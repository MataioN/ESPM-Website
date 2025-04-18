import { useState } from "react";
import { Clock, Calendar, FileText } from "lucide-react";

export default function History() {
  const [filter, setFilter] = useState("all");

  const timelineEvents = [
    {
      id: 1,
      year: 1871,
      title: "Peshtigo Fire",
      description: "The deadliest wildfire in American history burned through Wisconsin and Michigan, killing over 1,500 people.",
      type: "fire"
    },
    {
      id: 2,
      year: 1910,
      title: "The Big Burn",
      description: "A series of forest fires burned across Idaho, Montana, and Washington, destroying 3 million acres and killing 87 people.",
      type: "fire"
    },
    {
      id: 3,
      year: 1944,
      title: "Smokey Bear Campaign",
      description: "The US Forest Service introduced Smokey Bear as part of a fire prevention campaign.",
      type: "policy"
    },
    {
      id: 4,
      year: 1970,
      title: "Clear-Cutting Legislation",
      description: "Major legislation limiting clear-cutting practices in national forests, which had contributed to wildfire risks.",
      type: "policy"
    },
    {
      id: 5,
      year: 1988,
      title: "Yellowstone Fires",
      description: "More than 793,000 acres (36% of Yellowstone National Park) burned, changing approaches to fire management.",
      type: "fire"
    },
    {
      id: 6,
      year: 2000,
      title: "National Fire Plan",
      description: "Comprehensive federal policy for wildland fire management, focusing on firefighting, rehabilitation, hazardous fuels reduction, and community assistance.",
      type: "policy"
    },
    {
      id: 7,
      year: 2003,
      title: "Healthy Forests Restoration Act",
      description: "Legislation designed to reduce wildfire risk by implementing forest thinning projects.",
      type: "policy"
    },
    {
      id: 8,
      year: 2018,
      title: "Camp Fire",
      description: "California's deadliest and most destructive wildfire destroyed the town of Paradise and killed 85 people.",
      type: "fire"
    },
    {
      id: 9,
      year: 2020,
      title: "Record-Breaking Fire Season",
      description: "The western United States experienced unprecedented wildfires, with over 10.2 million acres burned.",
      type: "fire"
    },
    {
      id: 10,
      year: 2022,
      title: "Wildfire Crisis Strategy",
      description: "Federal initiative to treat an additional 20 million acres of National Forest System lands and 30 million acres of other federal, state, and private lands over the next 10 years.",
      type: "mitigation"
    }
  ];

  const filteredEvents = filter === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === filter);

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-800 mb-4">Wildfire History Timeline</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore significant wildfires, policy developments, and mitigation efforts throughout history.
        </p>
      </section>

      <div className="flex justify-center gap-3 mb-8">
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800'}`}
          onClick={() => setFilter('all')}
        >
          All Events
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'fire' ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800'}`}
          onClick={() => setFilter('fire')}
        >
          Major Fires
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'policy' ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800'}`}
          onClick={() => setFilter('policy')}
        >
          Policy Changes
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'mitigation' ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800'}`}
          onClick={() => setFilter('mitigation')}
        >
          Mitigation Efforts
        </button>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {filteredEvents.map((event) => (
          <div key={event.id} className="timeline-event">
            <div className="timeline-date">{event.year}</div>
            <div className="timeline-content">
              <h3 className="text-xl font-bold text-orange-700 mb-2">
                {event.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                {event.type === 'fire' && (
                  <span className="flex items-center">
                    <Flame className="mr-1" size={16} />
                    Major Fire
                  </span>
                )}
                {event.type === 'policy' && (
                  <span className="flex items-center">
                    <FileText className="mr-1" size={16} />
                    Policy Change
                  </span>
                )}
                {event.type === 'mitigation' && (
                  <span className="flex items-center">
                    <Shield className="mr-1" size={16} />
                    Mitigation Effort
                  </span>
                )}
              </div>
              <p className="text-gray-700">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mt-12">
        <h3 className="text-xl font-bold text-orange-800 mb-4">Historical Context</h3>
        <p className="text-gray-700 mb-4">
          Understanding the history of wildfires helps us recognize patterns, evaluate the effectiveness of past interventions, 
          and develop more robust strategies for the future.
        </p>
        <p className="text-gray-700">
          While wildfires have always been part of natural ecosystems, their frequency and intensity have changed dramatically 
          over time due to human activities, land management practices, and climate change.
        </p>
      </div>
    </div>
  );
}

// Missing import from the timeline
function Flame(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className || ""}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
    </svg>
  );
}

function Shield(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className || ""}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}