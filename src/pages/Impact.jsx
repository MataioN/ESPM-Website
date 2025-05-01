import { Home, Heart, DollarSign, Users } from 'lucide-react';

export default function Impact() {
  const impactCategories = [
    {
      id: 1,
      title: "Displacement & Housing",
      icon: <Home size={32} className="text-red-500" />,
      description: "Communities forced to evacuate during wildfires often face long-term displacement challenges.",
      stats: "Over 100,000 people were displaced by wildfires in the western United States in 2020 alone.",
      impacts: [
        "Loss of homes and personal belongings",
        "Extended stays in temporary shelters",
        "Housing shortages in affected regions",
        "Increases in homelessness following major fires",
        "Challenges with insurance coverage and rebuilding"
      ]
    },
    {
      id: 2,
      title: "Health Impacts",
      icon: <Heart size={32} className="text-red-500" />,
      description: "Smoke and ash from wildfires create serious health hazards, particularly for vulnerable populations.",
      stats: "Studies show a 10% increase in hospital admissions for respiratory issues during wildfire events.",
      impacts: [
        "Respiratory problems from smoke inhalation",
        "Exacerbation of existing conditions like asthma",
        "Mental health effects including PTSD and anxiety",
        "Contamination of water supplies",
        "Long-term health concerns from repeated exposure"
      ]
    },
    {
      id: 3,
      title: "Economic Effects",
      icon: <DollarSign size={32} className="text-red-500" />,
      description: "The economic toll of wildfires extends well beyond the immediate damage to properties.",
      stats: "The economic cost of wildfires in the United States has exceeded $50 billion in recent years.",
      impacts: [
        "Loss of businesses and employment opportunities",
        "Tourism declines in affected regions",
        "Rising insurance rates or coverage denials",
        "Property value decreases in high-risk areas",
        "Tax revenue losses for local governments"
      ]
    },
    {
      id: 4,
      title: "Community & Cultural Impacts",
      icon: <Users size={32} className="text-red-500" />,
      description: "Beyond physical destruction, wildfires can tear at the social fabric of communities.",
      stats: "Communities affected by major wildfires can take 5-10 years to fully recover their social infrastructure.",
      impacts: [
        "Loss of community gathering spaces",
        "Displacement of entire social networks",
        "Damage to cultural and historical sites",
        "Disruption of community traditions and events",
        "Disproportionate impacts on disadvantaged communities"
      ]
    }
  ];

  const communityStories = [
    {
      community: "Paradise, California",
      event: "Camp Fire (2018)",
      story: "The town of Paradise was almost completely destroyed, with over 11,000 homes lost. Three years later, only about 20% of residents had returned to rebuild.",
      image: "/api/placeholder/400/250"
    },
    {
      community: "Blue Mountains, Australia",
      event: "Black Summer (2019-2020)",
      story: "Communities across the Blue Mountains faced evacuations and significant property loss, with local businesses suffering for months due to tourism declines.",
      image: "/api/placeholder/400/250"
    },
    {
      community: "Fort McMurray, Canada",
      event: "Horse River Fire (2016)",
      story: "Nearly 90,000 residents were forced to evacuate, and the community faced massive rebuilding challenges as well as ongoing mental health impacts.",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-700 mb-4">Wildfire Community Impact</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Beyond the flames: understanding how wildfires affect lives, communities, and economies.
        </p>
      </section>

      <div className="bg-red-50 p-6 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Community affected by wildfire" 
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-red-700 mb-4">The Human Cost</h3>
            <p className="text-gray-700 mb-3">
              While the visual imagery of wildfires often focuses on flames and burned landscapes, the most significant impacts are often less 
              visible: the disruption of lives and communities that can persist long after the fires are extinguished.
            </p>
            <p className="text-gray-700">
              From immediate evacuation challenges to long-term recovery efforts, communities affected by wildfires face a complex 
              array of obstacles that can reshape their future for decades.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-700 mb-6">Key Impact Areas</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {impactCategories.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-700">{category.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-3 rounded mb-4">
                <p className="text-red-700 font-medium text-sm">{category.stats}</p>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2">Key Impacts:</h5>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {category.impacts.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-700 mb-6">Community Stories</h3>
        <p className="text-gray-700 mb-6">
          Behind the statistics are real communities with unique stories of loss, resilience, and recovery.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {communityStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={story.image} 
                alt={story.community} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-red-700">{story.community}</h4>
                <p className="text-sm text-gray-500 mb-2">{story.event}</p>
                <p className="text-gray-700 text-sm">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Disproportionate Impacts</h3>
        <p className="text-gray-700 mb-4">
          Not all communities are affected equally by wildfires. Socioeconomic factors play a significant role in both 
          vulnerability to wildfire impacts and capacity for recovery.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-red-700 mb-2">Vulnerable Populations</h4>
            <p className="text-sm text-gray-700">
              Low-income communities, elderly populations, and those with limited English proficiency often face greater challenges 
              during evacuation and recovery, with fewer resources to rebuild.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-red-700 mb-2">Recovery Inequality</h4>
            <p className="text-sm text-gray-700">
              Studies show that wealthier communities tend to recover more quickly from wildfire disasters, with better access to 
              insurance, loans, and other resources essential for rebuilding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}