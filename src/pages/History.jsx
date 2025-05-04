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
        "Indigenous burning practices are criminalized in California. This disruption of fire management caused large amounts of vegetation buildup in forests, acting as fuel for future fires. (Attebery)",
      type: "policy",
    },
    {
      id: 2,
      year: 1889,
      title: "Santiago Canyon Fire",
      description:
        "The Santiago Canyon Fire of 1889 burned over 300,000 acres across Orange, Riverside, and San Diego counties. Agricultural lands and livestock were devastated, an early example of the importance of wildfire management in California. (Wildland Firefighter Foundation; OC Historyland)",
      type: "fire",
    },
    {
      id: 3,
      year: 1910,
      title: "The Great Fire & Rise of Fire Suppression",
      description:
        "After a 3-million-acre fire in the Northern Rockies, the US Forest Service adopted a strict policy of extinguishing all wildfires quickly, suppressing natural ecological fire cycles. (Forest History Society; National Forest Foundation)",
      type: "policy",
    },
    {
      id: 4,
      year: 1944,
      title: "Birth of Smokey Bear",
      description:
        "The US Forest Service launched the Smokey Bear campaign with the slogan 'Only YOU Can Prevent Forest Fires.' It became the longest-running public service campaign in US history. (U.S. Forest Service)",
      type: "mitigation",
    },
    {
      id: 5,
      year: 1970,
      title: "Southern California Fire Siege",
      description:
        "Fires burned over 500,000 acres and killed 16 people, leading to the creation of FIRESCOPE and the Incident Command System for better emergency response. (FIRESCOPE California)",
      type: "fire",
    },
    {
      id: 6,
      year: 1991,
      title: "Oakland Hills Firestorm",
      description:
        "A wildfire killed 25 people and destroyed over 3,300 homes, exposing gaps in emergency communication and leading to improved building codes in fire-prone areas. (Glaister)",
      type: "fire",
    },
    {
      id: 7,
      year: 2003,
      title: "Cedar Fire",
      description:
        "The Cedar Fire in San Diego County burned over 273,000 acres, becoming the largest in state history at the time. It spurred improvements in emergency alert systems and preparedness. (CAL FIRE)",
      type: "fire",
    },
    {
      id: 8,
      year: 2007,
      title: "California Firestorm",
      description:
        "Santa Ana fires led to mass evacuations and burned nearly 500,000 acres, prompting upgrades in fire-resistant infrastructure and evacuation planning. (Glaister)",
      type: "fire",
    },
    {
      id: 9,
      year: 2018,
      title: "Camp Fire",
      description:
        "The town of Paradise was destroyed by the deadliest wildfire in California history, killing 85 people. Sparked by PG&E equipment, it triggered major fire safety reforms. (CAL FIRE)",
      type: "fire",
    },
    {
      id: 10,
      year: 2019,
      title: "PG&E Bankruptcy & Power Shutoffs",
      description:
        "PG&E declared bankruptcy over wildfire liabilities. Utilities began power shutoffs during high-wind events to prevent future ignitions. (Westervelt and Schwartz)",
      type: "policy",
    },
    {
      id: 11,
      year: 2020,
      title: "Record-Breaking Fire Season",
      description:
        "Over 4.3 million acres burned in 2020, leading to urgent calls for climate adaptation and forest resilience. (CAL FIRE)",
      type: "fire",
    },
    {
      id: 12,
      year: 2021,
      title: "Return to Good Fire",
      description:
        "New legislation encouraged prescribed burning and tribal stewardship. Agencies agreed to treat 1 million acres annually to reduce wildfire risk. (Governor’s Office)",
      type: "policy",
    },
    {
      id: 13,
      year: 2023,
      title: "Rise of Community Fire Activism",
      description:
        "Groups like Fire Forward and the Indigenous Stewardship Network expanded training in cultural burning and building fire-adapted communities. (Baldassari)",
      type: "mitigation",
    },
    {
      id: 14,
      year: 2024,
      title: "SB 310 – Enabling Cultural Burns",
      description:
        "Governor Newsom signed SB 310, allowing California Native American Tribes to conduct cultural burns on ancestral lands, restoring traditional fire management. (SB 310)",
      type: "policy",
    },
    {
      id: 15,
      year: 2025,
      title: "Los Angeles Wildfires",
      description:
        "The 2025 Palisades and Eaton fires destroyed over 16,000 structures and killed 30 people. Fueled by dry conditions and strong winds, the event exposed vulnerabilities in urban fire preparedness. (CAL FIRE; Reuters)",
      type: "fire",
    },
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
          The timeline above shows a shift from an instrumentalist approach of fire exclusion to better management practices. Recent efforts are slowly leaning more towards an intersubjective approach, working with nature and understanding fires as necessary and inevitable in order to prevent damage. Into the future, we hope to see more legislation, agencies, activist groups, and research focused on adapting to climate change, ecological balance, investing in prevention, and adapting to climate change.
        </p>
      </section>
    </div>
  );
}
