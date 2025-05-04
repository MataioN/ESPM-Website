import { ThermometerSun, Wind, Scissors, Users, Tractor } from 'lucide-react';
import './Causes.css';

export default function Causes() {
  const causesData = [
    {
      id: 1,
      title: "Climate Change",
      icon: <ThermometerSun size={32} className="text-orange-600" />,
      description: "Rising temperatures and changes in precipitation patterns are creating hotter, drier conditions that make wildfires more likely and more intense.",
      factors: [
        "Longer fire seasons due to earlier snowmelt and extended dry periods",
        "Increased drought conditions in many regions",
        "Record-breaking heat waves that dry out vegetation",
        "Changes in wind patterns that can spread fires more quickly"
      ],
   
    },
    {
      id: 2,
      title: "Weather Patterns",
      icon: <Wind size={32} className="text-orange-600" />,
      description: "Extreme weather events, including prolonged droughts and strong winds, create ideal conditions for wildfires to ignite and spread rapidly.",
      factors: [
        "High winds that can cause fires to spread at rapid rates",
        "Lightning strikes, which are a major natural cause of wildfires",
        "Drought cycles that create extremely dry vegetation",
        "Low humidity conditions that make vegetation more flammable",
        "Santa Ana winds are a very primary cause for wildfire causes in Southern California"
      ],
      
    },
    {
      id: 3,
      title: "Forest Management Practices",
      icon: <Scissors size={32} className="text-orange-600" />,
      description: "Past approaches to forest management, including fire suppression, have led to the buildup of dense vegetation that serves as fuel for wildfires.",
      factors: [
        "A century of aggressive fire suppression policies",
        "Reduced controlled burns and natural fire cycles",
        "Accumulation of dead trees and undergrowth that act as fuel",
        "Interrupted natural forest thinning processes"
      ],
     
    },
    {
      id: 4,
      title: "Human Activities",
      icon: <Users size={32} className="text-orange-600" />,
      description: "Human-caused ignitions, from campfires to power lines, account for the majority of wildfire starts in many regions.",
      factors: [
        "Campfires and recreational activities",
        "Equipment use and mechanical failures",
        "Power line failures during high wind events",
        "Arson and intentional fire setting",
        "Discarded cigarettes and other negligent behaviors"
      ],
      
    },
    {
      id: 5,
      title: "Land Use Changes",
      icon: <Tractor size={32} className="text-orange-600" />,
      description: "Expansion of development into wildland areas increases both the risk of human-caused ignitions and the potential for damage to communities.",
      factors: [
        "Growth of the wildland-urban interface (WUI)",
        "Agricultural practices and land clearing",
        "Road development providing access to previously remote areas",
        "Fragmentation of natural landscapes"
      ],
      
    }
  ];

  return (
    <div className="causes-wrapper">
      <section className="text-center">
        <h2 className="section-title">Understanding Wildfire Causes</h2>
        <p className="section-subtitle">
          Wildfires result from a complex interplay of environmental conditions, human activities, and policy decisions.
        </p>
      </section>

      <div className="gradient-section">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="image-wrapper">
            <img 
              src="/public/images/dead_trees.webp" 
              alt="Dry forest conditions" 
              className="rounded-lg"
            />
          </div>
          <div>
            <h3>The Science Behind Wildfires</h3>
            <p>
              Wildfires require three elements, often referred to as the "fire triangle": fuel (such as dry vegetation), 
              oxygen, and an ignition source. When these elements come together under the right conditions, wildfires can start and spread.
            </p>
            <p>
              The causes listed below influence one or more components of this fire triangle, creating conditions that
              are more favorable for wildfire ignition and spread.
            </p>
          </div>
        </div>
      </div>

      <section>
        <h3 className="section-title">Major Contributing Factors</h3>
        <div className="space-y-8">
          {causesData.map((cause) => (
            <div key={cause.id} className="causes-card">
              <div className="causes-header">
                <div className="icon-wrapper">{cause.icon}</div>
                <div className="flex-grow">
                  <h4 className="causes-title">{cause.title}</h4>
                  <p className="causes-description">{cause.description}</p>
                  <h5 className="causes-list-title">Key Factors:</h5>
                  <ul className="causes-list">
                    {cause.factors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                  {cause.image && (
                    <div className="causes-image">
                      <img 
                        src={cause.image} 
                        alt={`Figure for ${cause.title}`} 
                        className="rounded-md mt-4 shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="global-figures-section mt-12">
        <h3 className="section-title">Fire Trends & Climate</h3>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <img 
            src="/public/images/fire_freq.gif" 
            alt="Wildfire frequency over time" 
            className="rounded-lg w-full md:w-1/2 shadow"
          />
          <p>
            Fire Ignition Patterns on a variety of different starters (Keeley).
          </p>
          <img 
            src="/public/images/climate_change.gif" 
            alt="Climate change impact on wildfire intensity" 
            className="rounded-lg w-full md:w-1/2 shadow"
          />
          <p>
            Shows how climate impacts fire burning such as in the north being tied to low winter precipitation and high spring temperatures. Also shows high correlation for climate variation being the cause of fires in the south as well (Keeley).
          </p>
        </div>
      </section>

      <section className="final-section">
        <h3>Interconnected Causes</h3>
        <p>
          It's important to understand that these causes don't exist in isolation. Climate change exacerbates the effects 
          of poor forest management; human activities become more dangerous in extreme weather conditions; and land use 
          changes can affect both natural fire regimes and human exposure to wildfire risk. Many times, a wildfire is not caused by only one of these, but through a combination of causes coming together. We should be more attentive and knowledgeable on causes of wildfires so that we may be able to prevent them from ever starting in the first place.
        </p>
        <p>
          Addressing the wildfire crisis requires a holistic approach that considers all these interconnected factors
          and develops comprehensive strategies for mitigation and adaptation. If we are able to understand how these factors work together to cause wildfires, we are able to put measures in place to hopefully prevent or mitigate them. 
        </p>
      </section>
    </div>
  );
}
