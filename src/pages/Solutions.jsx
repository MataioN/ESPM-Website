import './solutions.css';
import { Leaf, Home, Bell, AlertTriangle } from 'lucide-react';

export default function Solutions() {
  const sections = [
    {
      icon: <Leaf className="solution-icon" />,
      title: "Vegetation Management & Fuel Reduction",
      text: (
        <>
          <p>
            Effective vegetation management is a cornerstone in mitigating wildfire risks, particularly in the wildland–urban interface (WUI) where human development meets natural landscapes. Techniques such as controlled burns, strategic thinning, and the creation of fuel breaks are instrumental in managing combustible materials. Murray et al. (2023) emphasize the application of geographic analytics to identify optimal areas for these interventions.
          </p>
          <p>
            By analyzing factors like topography, climate, and vegetation density, land managers can prioritize regions that would benefit most from fuel reduction strategies, ensuring efficient allocation of resources and enhancing the effectiveness of wildfire mitigation efforts.
          </p>
          <p>
            In Southern California, the Santa Ana winds significantly exacerbate wildfire risks by rapidly spreading fires through dry vegetation. Westerling et al. (2004) highlight that early control of wildfires is crucial, and managing the environment could have lessened the impact of the October 2003 wildfires. Integrating environmental management with an understanding of climatic factors like the Santa Ana winds is vital for effective wildfire mitigation.
          </p>
        </>
      ),
      image: "/images/vegetation.png"
    },
    {
      icon: <Home className="solution-icon" />,
      title: "Fire-Resistant Building & Zoning Policy",
      text: (
        <>
          <p>
            The expansion of housing into high-risk fire zones has intensified wildfire impacts in California. Philson, Wagner, and Nawathe (2021) advocate for policy reforms that discourage development in these areas, promote urban upzoning to increase housing density in safer zones, and support retrofitting existing structures with fire-resistant materials.
          </p>
          <p>
            Implementing such policies can significantly reduce the vulnerability of communities to wildfires. By focusing on strategic land use planning and building codes, it's possible to create resilient communities better equipped to withstand wildfire events.
          </p>
          <p>
            These policy recommendations are grounded in research that underscores the economic and human costs of wildfires. By aligning housing policies with wildfire risk assessments, California can mitigate future wildfire impacts and enhance community resilience.
          </p>
        </>
      ),
      image: "/images/building.png"
    },
    {
      icon: <Bell className="solution-icon" />,
      title: "Early Detection & Rapid Response Systems",
      text: (
        <>
          <p>
            Early detection of wildfires is vital for prompt response and containment. Advanced technologies, including remote sensing and real-time monitoring systems, enable authorities to identify and assess fire risks quickly. Murray et al. (2023) highlight the importance of integrating these technologies into wildfire risk mitigation plans, especially in the WUI.
          </p>
          <p>
            By leveraging data from various sources, such as satellite imagery and ground-based sensors, emergency services can deploy resources more effectively, potentially preventing small fires from escalating into large-scale disasters. This proactive approach is crucial in areas where climatic conditions, like the Santa Ana winds, can rapidly transform minor ignitions into uncontrollable wildfires.
          </p>
        </>
      ),
      image: "/images/alert.png"
    },
    {
      icon: <AlertTriangle className="solution-icon" />,
      title: "Community Preparedness & Public Education",
      text: (
        <>
          <p>
            Community engagement and education are essential components of wildfire resilience. Programs that inform residents about evacuation plans, defensible space creation, and emergency preparedness can significantly enhance a community's ability to respond to wildfires.
          </p>
          <p>
            Collaborative efforts between local governments, organizations, and residents foster a culture of preparedness, ensuring that communities are not only aware of the risks but also equipped to take proactive measures in the face of wildfire threats.
          </p>
          <p>
            Educational initiatives can include workshops, distribution of informational materials, and community drills. By empowering residents with knowledge and resources, communities can reduce the potential for human-caused ignitions and improve response times during wildfire events. This grassroots approach complements broader policy and technological strategies, creating a comprehensive framework for wildfire mitigation.
          </p>
        </>
      ),
      image: "/images/community.png"
    }
  ];

  return (
    <div className="solutions-page">
      <header className="solutions-header">
        <div className="solutions-header-content">
          <h1>Wildfire Solutions</h1>
          <p>Exploring strategies and practices to mitigate wildfire risks and enhance community resilience.</p>
        </div>
      </header>

      <main className="solutions-content">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`solution-stagger ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{
              transform: `
                translateY(${index * 30}px)
                translateX(${index % 2 === 0 ? '-80px' : '80px'})
                scale(${1 - index * 0.04})
              `,
              zIndex: `${10 - index}`
            }}
          >
            <div className="solution-stagger-text">
              <div className="solution-icon-wrapper">{section.icon}</div>
              <div>
                <h2>{section.title}</h2>
                {section.text}
              </div>
            </div>
            <img src={section.image} alt={section.title} className="solution-stagger-image" />
          </div>
        ))}
      </main>
    </div>
  );
}
