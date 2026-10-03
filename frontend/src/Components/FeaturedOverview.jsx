import React from "react";

const FeaturedOverview = () => {
  return (
    <div className="OverviewSection">
      <h1>Overview</h1>

      <div className="OverviewContent">
        <div className="OverviewPoints">
          <img src="/images/overview1.png" alt="overview1" />
          <h1>The Audience</h1>
          <ul>
            <li>•	Newly promoted team leads and project leads </li>
            <li>•	Early-career professionals (0–5 years of experience)</li>
           <li> •	Professionals managing stakeholder communication and cross-functional collaboration</li>
          </ul>
        </div>
        <div className="OverviewPoints">
          <img src="/images/overview2.png" alt="overview1" />
          <h1>Responsibilities</h1>
          <ul>
            <li>•	Designed scenario-based, decision-driven learning experience</li>
            <li>•	Created branching interactions with real workplace situations</li>
            <li>•	Developed storyline, dialogues, and simulations (email, chat, meetings)</li>
            <li>•	Implemented variables (Trust, Alignment, Progress) for dynamic outcomes</li>
          </ul>
        </div>
        <div className="OverviewPoints">
          <img src="/images/overview1.png" alt="overview1" />
          <h1>Tool Used</h1>
          <ul>

            <li>•  Articulate Storyline 360 </li>
           <li> •  Figma </li>
           <li> •  Canva </li>
           <li> •  MindMeister</li>
           <li> •  Microsoft Word</li>
           <li> •  AI Tools  </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOverview;
