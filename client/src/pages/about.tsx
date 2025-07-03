import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="street-text font-bold text-4xl md:text-5xl mb-4">About Our Mission</h1>
          <p className="text-xl text-gray-300">Music as a force for justice and solidarity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="street-text font-bold text-2xl mb-6">Why Music Matters</h2>
            <p className="text-lg text-gray-300 mb-6">
              Music has always been at the heart of social movements. From the civil rights movement to anti-apartheid protests, 
              rhythms and songs have united people across cultural and linguistic barriers.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Brazilian samba, with its roots in resistance and community, provides the perfect foundation for modern protest music. 
              These rhythms were born from the struggle of enslaved people and have evolved into a powerful tool for social change.
            </p>
            <p className="text-lg text-gray-300">
              Today, we channel that same energy in solidarity with Palestine and all oppressed peoples fighting for their freedom.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Samba musicians performing"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="lg:order-2">
            <h2 className="street-text font-bold text-2xl mb-6">Our Tools</h2>
            <p className="text-lg text-gray-300 mb-6">
              This platform provides professional-grade tools for learning and playing samba rhythms. Whether you're a beginner 
              or an experienced drummer, you'll find everything you need to participate in musical activism.
            </p>
            <ul className="text-lg text-gray-300 space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                High-quality audio samples from authentic instruments
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                Interactive learning tools with visual pattern guides
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                Protest-specific rhythms designed for demonstrations
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                Community features to connect with other drummers
              </li>
            </ul>
          </div>
          <div className="lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Traditional samba instruments"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8 text-center">
            <h3 className="street-text font-bold text-2xl mb-4">Join the Movement</h3>
            <p className="text-lg text-gray-300 mb-6">
              Ready to use your musical skills for justice? Connect with drummers worldwide who are making their voices heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Heart className="mr-2 h-5 w-5" />
                Support Palestine
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
