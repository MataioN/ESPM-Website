import { Home, Heart, DollarSign, Users } from 'lucide-react';
import './Impact.css';

export default function Impact() {
  const impactCategories = [
    {
      id: 1,
      title: "Displacement & Housing",
      icon: <Home size={32} color="#b91c1c" />,
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
      icon: <Heart size={32} color="#b91c1c" />,
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
      icon: <DollarSign size={32} color="#b91c1c" />,
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
      icon: <Users size={32} color="#b91c1c" />,
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
      image: "/images/paradise.jpg"
    },
    {
      community: "Santa Ana Mountains",
      event: "Santiago Canyon Fire (1889)",
      story: "Many conditions led up to this event, especially a more severe drought than usual and a very low amount of precipitation than usual. Santa Ana winds appeared as they commonly do and caused a 3-day wind event. This led to a lot of destruction as it burned over 300,000 acres of land and many farm fields were destroyed in this event as well.",
      image: "/images/santiago.webp"
    },
  ];

  return (
    <div className="container">
      <section>
        <h2 className="section-title">Wildfire Community Impact</h2>
        <p className="section-subtitle">
          Beyond the flames: understanding how wildfires affect lives, communities, and economies.
        </p>
      </section>

      <div className="flex-row">
        <div className="image-block" style={{ flex: 1 }}>
          <img src="/images/community_affected_wildfire.jpg" alt="Community affected by wildfire" />
        </div>
        <div className="text-block" style={{ flex: 1 }}>
          <h3>The Human Cost</h3>
          <p>
            While the visual imagery of wildfires often focuses on flames and burned landscapes, the most significant impacts are often less 
            visible: the disruption of lives and communities that can persist long after the fires are extinguished.
          </p>
          <p>
            From immediate evacuation challenges to long-term recovery efforts, communities affected by wildfires face a complex 
            array of obstacles that can reshape their future for decades.
          </p>
        </div>
      </div>

      <section>
        <h3 className="section-title">Key Impact Areas</h3>
        <div className="grid-2">
          {impactCategories.map((category) => (
            <div key={category.id} className="impact-card">
              <div className="impact-header">
                <div className="icon-wrapper">
                  {category.icon}
                </div>
                <div>
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="stat-box">{category.stats}</div>
              <h5>Key Impacts:</h5>
              <ul className="impact-list">
                {category.impacts.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="section-title">Community Stories</h3>
        <p className="section-subtitle">
          Behind the statistics are real communities with unique stories of loss, resilience, and recovery.
        </p>
        <div className="grid-3">
          {communityStories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.image} alt={story.community} />
              <div className="story-content">
                <h4 className="story-title">{story.community}</h4>
                <p className="story-meta">{story.event}</p>
                <p className="story-description">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-section">
        <h3 className="section-title">Disproportionate Impacts</h3>
        <p>
          Not all communities are affected equally by wildfires. Socioeconomic factors play a significant role in both 
          vulnerability to wildfire impacts and capacity for recovery. Many communities that are less fortunate do not have the resources to protect their belongings...
        </p>
        <div className="grid-2" style={{ marginTop: '24px' }}>
          <div className="recovery-card">
            <h4>Vulnerable Populations</h4>
            <p>
              Low-income communities, elderly populations, and those with limited English proficiency often face greater challenges 
              during evacuation and recovery, with fewer resources to rebuild.
            </p>
          </div>
          <div className="recovery-card">
            <h4>Recovery Inequality</h4>
            <p>
              Studies show that wealthier communities tend to recover more quickly from wildfire disasters, with better access to 
              insurance, loans, and other resources essential for rebuilding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
