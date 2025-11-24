import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";
import { useEffect, useState } from "react";

interface AbcjsProps {
  abcCode: string;
  visualOptions?: object;
}

const Abcjs = ({ abcCode, visualOptions }: AbcjsProps) => {
  const [uniqueID] = useState(Math.random().toString(36).substring(2));
  var visualObj: abcjs.TuneObjectArray;

  class CursorControl implements abcjs.CursorControl {
    onStart() {
      var svg = document.querySelector("#paper-" + uniqueID + " svg");
      if (svg) {
        var cursor = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        cursor.setAttribute("class", "abcjs-cursor");
        cursor.setAttributeNS(null, "x1", "0");
        cursor.setAttributeNS(null, "y1", "0");
        cursor.setAttributeNS(null, "x2", "0");
        cursor.setAttributeNS(null, "y2", "0");
        svg.appendChild(cursor);
      }
    }

    onEvent(ev: abcjs.NoteTimingEvent): void {
      if (ev.measureStart && ev.left === null) return; // this was the second part of a tie across a measure line. Just ignore it.

      var lastSelection = document.querySelectorAll(
        "#paper-" + uniqueID + " svg .highlight"
      );
      for (var k = 0; k < lastSelection.length; k++)
        lastSelection[k].classList.remove("highlight");

      if (ev.elements) {
        for (var i = 0; i < ev.elements.length; i++) {
          var note = ev.elements[i];
          for (var j = 0; j < note.length; j++) {
            note[j].classList.add("highlight");
          }
        }
      }

      var cursor = document.querySelector(
        "#paper-" + uniqueID + " svg .abcjs-cursor"
      );
      if (cursor && ev.left && ev.top && ev.height) {
        cursor.setAttribute("x1", `${ev.left - 2}`);
        cursor.setAttribute("x2", `${ev.left - 2}`);
        cursor.setAttribute("y1", `${ev.top}`);
        cursor.setAttribute("y2", `${ev.top + ev.height}`);
      }
    }
    onFinished(): void {
      var els = document.querySelectorAll(
        "#paper-" + uniqueID + " svg .highlight"
      );
      for (var i = 0; i < els.length; i++) {
        els[i].classList.remove("highlight");
      }
      var cursor = document.querySelector(
        "#paper-" + uniqueID + " svg .abcjs-cursor"
      );
      if (cursor) {
        cursor.setAttribute("x1", "0");
        cursor.setAttribute("x2", "0");
        cursor.setAttribute("y1", "0");
        cursor.setAttribute("y2", "0");
      }
    }
  }

  const cursorControl = new CursorControl();

  useEffect(() => {
    visualObj = abcjs.renderAbc("paper-" + uniqueID, abcCode, {
      add_classes: true,
      wrap: { minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 },
      responsive: "resize",
    });
    if (abcjs.synth.supportsAudio()) {
      var controlOptions = {
        displayLoop: false,
        displayRestart: true,
        displayPlay: true,
        displayProgress: false,
        displayWarp: true,
      };
      var synthControl = new abcjs.synth.SynthController();
      synthControl.load("#audio-" + uniqueID, cursorControl, controlOptions);
      synthControl.disable(true);
      var midiBuffer = new abcjs.synth.CreateSynth();
      midiBuffer
        .init({
          visualObj: visualObj[0],
          options: {},
        })
        .then(function () {
          synthControl
            .setTune(visualObj[0], true, {
              drum: "dddd 76 77 77 77 20 20 20 20",
              drumIntro: 0,
              // voicesOff: true,
            })
            .then(function (response) {
              var inlineAudio = document.querySelector(".abcjs-inline-audio");
              if (inlineAudio) {
                inlineAudio.classList.remove("disabled");
              }
              synthControl.toggleLoop();
            });
        });
    } else {
      console.log("audio is not supported on this browser");
    }
    return () => {
      synthControl.pause();
    };
  });
  return (
    <div>
      <div id={"paper-" + uniqueID}></div>
      <div id={"audio-" + uniqueID}></div>
    </div>
  );
};

export default Abcjs;
