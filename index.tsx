import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Coffee, Brain, Lightbulb } from 'lucide-react';

const PersonalGrowthArc = () => {
  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader className="text-center py-4">
        <CardTitle className="text-2xl md:text-3xl font-bold">Personal Growth Arc</CardTitle>
        <p className="text-xs md:text-sm text-gray-500 mt-1">The Corporate Edition</p>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="relative aspect-[3/4] md:aspect-[2/1] w-full">
          <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="1000" height="500" fill="url(#grid)" />

            {/* Growth Arc Path */}
            <path
              d="M 150,250 Q 500,350 500,250 T 850,150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="6"
            />

            {/* Gradient Definition */}
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            {/* Stage Points */}
            <circle cx="150" cy="250" r="8" fill="#4ade80" />
            <circle cx="500" cy="250" r="8" fill="#f87171" />
            <circle cx="850" cy="150" r="8" fill="#60a5fa" />

            {/* Stage Labels */}
            <text x="150" y="220" textAnchor="middle" fontSize="16" fontWeight="bold">Naivety</text>
            <text x="500" y="220" textAnchor="middle" fontSize="16" fontWeight="bold">Cynicism</text>
            <text x="850" y="120" textAnchor="middle" fontSize="16" fontWeight="bold">Wisdom</text>

            {/* Example Boxes with Better Text Wrapping */}
            <foreignObject x="50" y="290" width="200" height="180">
              <div className="bg-green-100 p-4 rounded-lg border border-green-200 shadow-sm overflow-hidden">
                <p className="font-semibold text-green-800 text-xs md:text-sm mb-2">The Rookie</p>
                <ul className="text-xs md:text-sm text-green-700 space-y-2">
                  <li className="leading-tight">"My ideas will revolutionize this company!"</li>
                  <li className="leading-tight">"Everyone here is so nice and helpful!"</li>
                  <li className="leading-tight">"I'll definitely use everything I learned in college!"</li>
                  <li className="leading-tight">"Can't wait for my performance review!"</li>
                </ul>
              </div>
            </foreignObject>

            <foreignObject x="400" y="290" width="200" height="180">
              <div className="bg-red-100 p-4 rounded-lg border border-red-200 shadow-sm overflow-hidden">
                <p className="font-semibold text-red-800 text-xs md:text-sm mb-2">The Burnout</p>
                <ul className="text-xs md:text-sm text-red-700 space-y-2">
                  <li className="leading-tight">"It's all office politics anyway"</li>
                  <li className="leading-tight">"This meeting could've been an email"</li>
                  <li className="leading-tight">"I'm just here for the paycheck"</li>
                  <li className="leading-tight">"Everything is broken and no one cares"</li>
                </ul>
              </div>
            </foreignObject>

            <foreignObject x="750" y="190" width="200" height="180">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 shadow-sm overflow-hidden">
                <p className="font-semibold text-blue-800 text-xs md:text-sm mb-2">The Sage</p>
                <ul className="text-xs md:text-sm text-blue-700 space-y-2">
                  <li className="leading-tight">"Let's focus on what we can change"</li>
                  <li className="leading-tight">"The system isn't perfect, but I know how to work with it"</li>
                  <li className="leading-tight">"Maybe we should talk to other teams first"</li>
                  <li className="leading-tight">"I've seen this before - here's what worked"</li>
                </ul>
              </div>
            </foreignObject>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6 px-4 md:px-12">
          <div className="text-center">
            <Coffee className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
            <p className="text-xs md:text-sm text-gray-600 leading-tight">Fresh out of college, powered by optimism and energy drinks</p>
          </div>
          <div className="text-center">
            <Brain className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
            <p className="text-xs md:text-sm text-gray-600 leading-tight">Three years in, runs on coffee and spite</p>
          </div>
          <div className="text-center">
            <Lightbulb className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
            <p className="text-xs md:text-sm text-gray-600 leading-tight">Five years in, has mastered the art of strategic meeting naps</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalGrowthArc;
