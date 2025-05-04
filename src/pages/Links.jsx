import './Links.css';

export default function Links() {
  const resources = [
    {
      title: 'CAL FIRE',
      url: 'https://www.fire.ca.gov/',
      img: 'https://www.fire.ca.gov/wp-content/uploads/2020/11/logo-cal-fire-2020.png',
      description: 'California Department of Forestry and Fire Protection—provides up-to-date wildfire information, fire prevention tips, and emergency response details.'
    },
    {
      title: 'California Fire Map and Tracker',
      url: 'https://www.frontlinewildfire.com/california-wildfire-map/',
      img: 'https://www.readyforwildfire.org/wp-content/uploads/2022/04/RFW-logo-horizontal.png',
      description: 'An educational site to help residents prepare for wildfires and reduce risk through defensible space and emergency planning.'
    },
    {
      title: 'National Interagency Fire Center',
      url: 'https://www.nifc.gov/',
      img: 'https://www.nifc.gov/themes/custom/nifc/logo.svg',
      description: 'Coordinates wildland firefighting efforts across federal agencies and shares national incident updates and statistics.'
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
  
