import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>California Wildfire Crisis</h1>
          <p>Raising awareness, understanding impacts, and sharing solutions.</p>
          <Link to="/history" className="hero-button">Start Exploring</Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div className="info-text">
          <h2>Wildfire Awareness</h2>
          <p>
            This project serves as a resource to raise awareness about the escalating wildfire crisis across California. Each section aims to inform viewers on an important part of the crisis and why it matters. Specifically, we focus on a timeline of wildfires and mitigation efforts in California, the causes and why wildfires are so prominent in California, their impact on communities, and potential solutions to lessen their effects and danger in the future. We hope to encourage a deeper understanding of this issue in order to help prevent as much harm as possible.
          </p>
        </div>
        <img src="/images/tree-fire.png" alt="Man near wildfire" className="info-img" />
      </section>

      {/* Topics Section */}
      <section className="topics">
        <h2>Explore Topics</h2>
        <div className="cards">
          {[
            { title: 'History', icon: '/images/history.png', link: '/history' },
            { title: 'Causes', icon: '/images/causes.png', link: '/causes' },
            { title: 'Impact', icon: '/images/impact.png', link: '/impact' },
            { title: 'Solutions', icon: '/images/solutions.png', link: '/solutions' },
          ].map(({ title, icon, link }) => (
            <Link key={title} to={link} className="topic-card">
              <img src={icon} alt={`${title} icon`} className={`topic-icon ${title.toLowerCase()}-icon`} />
              <h3>{title}</h3>
              <p>Learn more about {title.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}