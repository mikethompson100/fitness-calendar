Markdown document

## 2026-07-04 — Initial concept exploration

**Context:** Brainstormed initial ideas for a project of creating a fitness accountability calendar for myself. Simply want a calendar with the ability to 1) Show my scheduled workouts, 2) Be able to add post workout comments after the completion of each session, and 3) Add LLM analysis of the added comments over time to provide pattern recognition suggestions and recommendations.

**What I tried:** Created an initial comp in Figma using a prompt to get some initial inspirations.
`[figma: Initial_Proof_of_Concept.png"]`

**Decision:** Did commit to creating a 7 day weekly calendar layout but much more simplified without the cognitive overload of seeing all of the time of days. Will need to start UX/UI research to address it. My first thoughts on a mobile layout would be a very simple vertical list of the days of the week with a possible modal.

**Uncertainty:** Need more clarity on of all of the basic features and functionality that I want it to have.

**Keywords:** #layout #llm #calendar-ux #cognitive-load #information-architecture #mvp-scoping



## 2026-07-05 — 

**Context:** Started building initial workflow in Lucidchart

**What I tried:** Worked on brainstorming initial logic flow ideas.
`[screenshot: initial_flowchart.png"]`

**Decision:** To start with an onboarding screen to setup initial user profile in localStorage and the data schema.

**Uncertainty:** Exactly what deeper steps will be required in the logical flow. Need to keep investigating and working on features and logic to get more clarity.

**Keywords:** #Lucidchart #workflow #logic



## 2026-07-06 — 

**Context:** Needed to decide on the overall strategy for building this app with decision markdown documents, lucidchart and prototyping tools

**What I tried:** I researched different approaches

**Decision:** I decided to build the flowchart in Lucidchart alongside the coding process. Instead of building the flowchart completely first I felt agility was necessary to be able to adapt and change to meet the challenges and discoveries that come along the way. 

**Uncertainty:** Uncertainty is exactly why I decided to take this approach. To best manage uncertainty.

**Keywords:** #markdown #lucidchart #prototyping #strategy




## 2026-07-07 — 

**Context:** Setup initial high level flowchart. Worked on initial logic for determining if user exists. Thought about the best way to loop and render each day of the week to the UI in the safest and most efficient way possible.

**What I tried:** Studied localStorage and the best way to receive the user input. Researched UI rendering techniques.

**Decision:** To avoid XSS attacks I decided it was safer to use textContent instead of innerHTML. For the UI, I decided to use createFragment to render each day to the UI to reduce DOM load.

**Uncertainty:** 

**Keywords:** 
