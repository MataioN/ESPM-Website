import { useState } from "react";
import "./history.css";

export default function History() {
  const [filter, setFilter] = useState("all");

  const timelineEvents = [
    {
      id: 1,
      year: 1850,
      title: "Banning of Indigenous Cultural Burning",
      description:
        "California criminalized Indigenous burning practices, disrupting traditional fire stewardship and contributing to fuel buildup in forests.",
      type: "policy",
    },
    {
      id: 2,
      year: 1910,
      title: "The Great Fire & Rise of Fire Suppression",
      description:
        "After a 3-million-acre fire in the Northern Rockies, the U.S. Forest Service adopted a strict policy of extinguishing all wildfires quickly, preventing natural ecological fire cycles.",
      type: "policy",
    },
    {
      id: 3,
      year: 1944,
      title: "Birth of Smokey Bear",
      description:
        "The U.S. Forest Service launched the Smokey Bear campaign with the slogan 'Only YOU Can Prevent Forest Fires.' It became the longest-running public service campaign in U.S. history and helped raise public awareness about fire safety.",
      type: "mitigation",
    },
    {
      id: 4,
      year: 1970,
      title: "Southern California Fire Siege",
      description:
        "Wind-driven fires burned over 500,000 acres and killed 16 people. The disaster led to the creation of FIRESCOPE and the Incident Command System for better response coordination.",
      type: "fire",
    },
    {
      id: 5,
      year: 1991,
      title: "Oakland Hills Firestorm",
      description:
        "A fast-moving wildfire killed 25 people and destroyed over 3,300 homes. It exposed gaps in emergency communication and led to stricter building codes in fire-prone areas.",
      type: "fire",
    },
    {
      id: 6,
      year: 2003,
      title: "Cedar Fire",
      description:
        "Burning over 273,000 acres, the Cedar Fire became the largest in California history at the time. It pushed improvements in emergency alert systems and vegetation management.",
      type: "fire",
    },
    {
      id: 7,
      year: 2007,
      title: "California Firestorm",
      description:
        "Santa Ana wind-driven fires led to mass evacuations and burned nearly 500,000 acres. The event spurred investment in fire-resistant infrastructure and evacuation planning.",
      type: "fire",
    },
    {
      id: 8,
      year: 2018,
      title: "Camp Fire",
      description:
        "The deadliest wildfire in California history destroyed the town of Paradise and killed 85 people. It was ignited by PG&E equipment and led to major fire safety reforms.",
      type: "fire",
    },
    {
      id: 9,
      year: 2019,
      title: "PG&E Bankruptcy & Power Shutoffs",
      description:
        "PG&E declared bankruptcy over wildfire liabilities. Utilities began preemptive Public Safety Power Shutoffs to prevent future ignitions during wind events.",
      type: "policy",
    },
    {
      id: 10,
      year: 2020,
      title: "Record-Breaking Fire Season",
      description:
        "Over 4.3 million acres burned in 2020. The August Complex became California’s first 'gigafire,' leading to urgent calls for climate adaptation and forest resilience.",
      type: "fire",
    },
    {
      id: 11,
      year: 2021,
      title: "Return to Good Fire",
      description:
        "New legislation encouraged prescribed burning and tribal stewardship. State and federal agencies agreed to treat 1 million acres annually to reduce wildfire risk.",
      type: "policy",
    },
    {
      id: 12,
      year: 2023,
      title: "Rise of Community Fire Activism",
      description:
        "Grassroots groups like Fire Forward and the Indigenous Stewardship Network expanded efforts to train the public in cultural burning, home hardening, and fire-adapted communities.",
      type: "mitigation",
    },
    {
      id: 13,
      year: 2024,
      title: "SB 310 – Empowering Tribal Cultural Burns",
      description:
        "Governor Newsom signed SB 310, enabling California Native American Tribes to conduct cultural burns on ancestral territories, supporting tribal sovereignty and traditional fire management practices.",
      type: "policy",
    }
  ];
  

  const filteredEvents =
    filter === "all"
      ? timelineEvents
      : timelineEvents.filter((event) => event.type === filter);

  return (
    <div className="history-page">
      <section className="header-section">
        <div className="header-overlay">
          <h1>History of California Wildfires</h1>
          <p>Tracing key events, major fire seasons, and pivotal policy changes that shaped the state’s fire landscape.</p>

          <div className="filter-buttons">
            {["all", "fire", "policy", "mitigation"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={filter === type ? "active" : ""}
              >
                {type === "all"
                  ? "All Events"
                  : type === "fire"
                  ? "Wildfires"
                  : type === "policy"
                  ? "Policy"
                  : "Mitigation"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="timeline">
        {filteredEvents.map((event, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={event.id}
          >
            <div className="timeline-content">
              <span className="tag">{event.type}</span> {}
              <h2>
                {event.year}: {event.title}
              </h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="history-context">
        <h3>Historical Context</h3>
        <p>
          California’s fire history reflects a shift from fire exclusion to adaptive management. Early Indigenous burning practices were outlawed,
          leading to fuel build-up and larger, more destructive fires.
        </p>
        <p>
          Today, policies focus on restoring ecological balance, investing in prevention, and adapting to climate change.
        </p>
      </section>
    </div>
  );
}
