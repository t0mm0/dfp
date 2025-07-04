import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <img src="/logo.png" alt="Drummers For Palestine" className="max-w-lg mx-auto mb-8" />
          <h1 className="street-text font-bold text-4xl md:text-5xl mb-4">Who We Are</h1>
          <p className="text-xl text-gray-300">We are a collective of passionate drummers united by a shared purpose</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-300 mb-6">
            We are a collective of passionate drummers united by a shared purpose:
            to amplify the Palestinian movement and raise morale through the power of rhythm.
            Our beats echo in the streets, providing a rallying call for justice, solidarity, and resistance.
          </p>
          
          <h2 className="street-text font-bold text-2xl mb-6">Our Code of Conduct</h2>
          <p className="text-lg text-gray-300 mb-6">
            As members of MD4P, we commit to the following guiding principles:
          </p>
          
          <ul className="text-lg text-gray-300 space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              We treat others how we want to be treated—both in person and online.
              We act with kindness and respect, fostering an inclusive space for all.
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              We remain mindful of how our tone or phrasing might impact others,
              striving for open and constructive dialogue.
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              We challenge any oppressive behavior (sexism, racism, homophobia) in ourselves and others,
              aiming to keep the group safe and welcoming.
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              We commit to using protective equipment (like ear protection) during events,
              and encourage others to do the same.
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              If approached about our behavior, we stay open and reflective on how to improve.
            </li>
          </ul>
          
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-white">
            <p className="text-xl font-bold text-white mb-2">
              "Our mission is to amplify the Palestinian movement and raise morale."
            </p>
            <p className="text-lg text-gray-300">
              We invite everyone to join our percussive purpose. 
              We bring thunder in the streets until Palestine is free!
            </p>
          </div>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8 text-center">
            <h3 className="street-text font-bold text-2xl mb-4">Join Our Percussive Purpose</h3>
            <p className="text-lg text-gray-300 mb-6">
              Learn samba rhythms, participate in solidarity actions, and help amplify the Palestinian movement through music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black">
                <Users className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black">
                <Heart className="mr-2 h-5 w-5" />
                Free Palestine
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
