import './Links.css';

export default function Links() {
  const resources = [
    {
      title: 'CAL FIRE',
      url: 'https://www.fire.ca.gov/',
      img: '/images/cal_fire_dep.png',
      description: 'California Department of Forestry and Fire Protection—provides up-to-date wildfire information, fire prevention tips, and emergency response details.'
    },
    {
      title: 'California Fire Map and Tracker',
      url: 'https://www.frontlinewildfire.com/california-wildfire-map/',
      img: '/images/frontline.jpg',
      description: 'An educational site to help residents prepare for wildfires and reduce risk through defensible space and emergency planning. Also helps track current wildfires.'
    },
    {
      title: 'California Wildfire Recovery',
      url: 'https://wildfirerecovery.caloes.ca.gov/',
      img: 'https://www.nifc.gov/themes/custom/nifc/logo.svg',
      description: 'Resource to help prepare and respond to wildfires in California.'
    }
  ];

  
    return (
      <div className="links-container">
        <h1 className="links-page">Helpful Links</h1>
        <div className="links-grid">
          {resources.map(({ title, url, img, description }) => (
            <div key={title} className="link-card">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={title} className="link-image" />
              </a>
              <div className="link-info">
                <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
