import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/hero." alt="Wildfire background" />
        <div className="hero-overlay">
          <h1>Wildfire Crisis Awareness</h1>
          <p>Raising awareness, understanding impacts, and sharing solutions.</p>
          <Link to="/causes" className="hero-button">Start Exploring</Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div className="info-text">
          <h2>Why Wildfire Awareness Matters</h2>
          <p>
            We are dedicated to educating the public about wildfire risks, their consequences,
            and how communities can work together to reduce them.
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
            <img src={icon} alt="..." className={`topic-icon ${title.toLowerCase()}-icon`} />
            <h3>{title}</h3>
            <p>Learn more about {title.toLowerCase()}.</p>
          </Link>
        ))}
        </div>
      </section>
    </div>
  );
}
