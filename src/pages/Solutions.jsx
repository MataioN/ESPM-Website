import './solutions.css';
import { Leaf, Home, Bell, AlertTriangle } from 'lucide-react';

export default function Solutions() {
  const sections = [
    {
      icon: <Leaf className="solution-icon" />,
      title: "Vegetation Management and Fuel Reduction",
      text: (
        <>
          <p>
            Wildland-urban interfaces, WUI, are areas where urban areas meet abruptly with natural landscape (Murray et al.). In such areas, vegetation management is a necessity to prevent wildfire risks. Methods like controlled burns, thinning of vegetation, and overall fuel reduction can help manage vegetation that serve as fuel for wildfires.
          </p>
          <p>
            Murray et al. (2023) discuss the use of new technology and research to mitigate wildfire risk. By analyzing tons of raster cells, or small areas of split up land, the team is able to identify areas that are prioritized for vegetation treatment and fuel breaks. In the paper, the team demonstrates this method in the Santa Barbara region, showing its potential for preventing wildfire damage. Vegetation management practices must take into account efficient allocation of resources in order to increase effectiveness of wildfire mitigation efforts.
          </p>
          <p>
            Westerling et al. (2004) recognize that early control of wildfires is particularly important in the Santa Ana region, where strong winds increase spread of flames through dry vegetation. The research group says that managing the environment before the wildfire event could have stopped the October 2003 wildfires from being so detrimental. Understanding region specific climate factors such as high Santa Ana winds, and maintaining the environment through methods like fuel reduction is crucial for mitigating wildfires in the future.
          </p>
        </>
      ),
      image: "/images/fuel-reduction.png"
    },
    {
      icon: <Home className="solution-icon" />,
      title: "Fire-Resistant Building and Zoning Policy",
      text: (
        <>
          <p>
            Another factor that worsens wildfire impacts in California is the expansion of housing into specifically high risk zones. Philson, Wagner, and Nawathe (2021) discuss this issue and suggest policy reforms that discourage development in zones prone to wildfires. Instead, they propose policies to increase housing density in safer zones with urban upzoning, and support modernizing existing structures with fire-resistant material.
          </p>
          <p>
            The policy recommendations made by the group are supported by research that mainly prioritizes the economic and human costs of wildfires. By incorporating wildfire risk assessment into housing policies and focusing on community resilience, California can mitigate the effect of fires on communities.
          </p>
        </>
      ),
      image: "/images/firesafe-homes.png"
    },
    {
      icon: <Bell className="solution-icon" />,
      title: "Early Detection and Rapid Response Systems",
      text: (
        <>
          <p>
            Early detection of fires can make a huge difference in response time and containment. New, emerging technologies such as remote sensing and monitoring systems allow for quick assessment of fire risk.
          </p>
          <p>
            Murray et al. (2023) discuss this topic in the context of the WUI. Data from sources like satellite imagery, sensors on the ground, better equipped emergency services and resource management systems can prevent early, small fires from growing into larger disasters. In areas like Santa Ana, with powerful winds that can escalate wildfires very quickly, a quick response time,  early detection, and identifying prone areas early, can prevent large amounts of damage due to wildfires. 
          </p>
        </>
      ),
      image: "/images/early-detect.png"
    },
    {
      icon: <AlertTriangle className="solution-icon" />,
      title: "Community Preparedness and Public Education",
      text: (
        <>
          <p>
            Arguably the best way to create wildfire resilience is through education and community involvement. Programs for evacuation plans and emergency preparedness can make the difference between a community's ability to respond and protect themselves from wildfires.
          </p>
          <p>
            When residents have resources and the correct knowledge to act, lives can be saved in the event of a wildfire and potential for human-caused ignition of wildfires can be reduced. Methods may include things like community workshops for information and resources and community planning in case of emergency.
          </p>
          <p>
            Efforts from government agencies, non-profit organizations, and projects like this one can help confirm that everyone is aware of wildfire risks and how to prevent them.
          </p>
        </>
      ),
      image: "/images/preparedness.png"
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
