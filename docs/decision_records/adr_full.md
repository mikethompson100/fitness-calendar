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

**Context:** Needed to decide on the overall strategy for building this app with decision markdown documents, lucidchart, prototyping tools and development tools.

**What I tried:** I researched different approaches

**Decision:** I decided to build the flowchart in Lucidchart alongside the coding process. Instead of building the flowchart completely first I felt agility was necessary to be able to adapt and change to meet the challenges and discoveries that come along the way. 

**Uncertainty:** Uncertainty is exactly why I decided to take this approach. To best manage uncertainty.

**Keywords:** #markdown #lucidchart #prototyping #strategy 




## 2026-07-07 — 

**Context:** Setup initial high level flowchart. Worked on initial logic for determining if user exists. Thought about the best way to loop and render each day of the week to the UI in the safest and most efficient way possible.

**What I tried:** Studied localStorage and the best way to receive the user input. Researched UI rendering techniques.

**Decision:** To avoid XSS attacks I decided it was safer to use textContent instead of innerHTML. For the UI, I decided to use createFragment to render each day to the UI to reduce DOM load.

**Uncertainty:** All of this is strategy and theory and needs to be eventually tested in code for viabliity.

**Keywords:** #localStorage #ui #xss #dom #flowchart



## 2026-07-08 — 

**Context:** Worked on setting up the data schema so that it meets the needs of the project. Some of the fundamental parts are 1) Providing a simple way to render each week to the UI 2) Providing a simple way for a LLM to read and organize all of the comments that it needs for analysis.

**What I tried:** I worked on conceptualizing all of the potential needs of the project like adding multiple users, using a LLM and rendering data to the UI.

**Decision:** I decided to create a 'users' object that is an array so multiple users can be added. Within each of those I created two main objects 'profile' and 'weeklyLogs'. The 'profile' object contains general information about the user: "userId", "name", "overallGoal" and "createdAtDate". The 'weeklyLogs' object contains the details and history of all of the user data on their journey.

**Uncertainty:** New data needs may arise over the course of this project and additional elements may need to be added or taken away over time.

**Keywords:** #schema #llm #conceptualization #ui 



## 2026-07-09 — 

**Context:** Successfully setup and wrote to first version of the data schema.

**What I tried:**  I worked on conceptualizing all of the potential needs of the project. Some of the fundamental parts that are needed are 1) Providing a simple way to render each week to the UI 2) Providing a simple way for a LLM to read and organize all of the comments that it needs for analysis. 

**Decision:** I decided to create a 'users' object that is an array so multiple users can be added. Within each of those I created two main objects 'profile' and 'weeklyLogs'. The 'profile' object contains general information about the user: "userId", "name", "overallGoal" and "createdAtDate". The 'weeklyLogs' object contains the details and history of all of the user data on their journey.

**Uncertainty:** New data needs may arise over the course of this project and additional elements may need to be added or taken away over time.

**Keywords:** #schema #llm #conceptualization #ui 



## 2026-07-11 — 

**Context:**  Strategize how to render the data properly to the UI and provide necessary features.

**What I tried:**  Worked on some logic ideas for rendering the data to the page and envision a user's needs. 

**Decision:** In addition to using createFragment and textContent for rendering it makes logical sense to add two buttons to the UI for displaying the previous week and next week. I also want to make sure that as the project develops that proper design principles are adhered to like 'Separation of Concerns' so I broke out the JavaScript files into render-calendar.js and initData.js.

**Uncertainty:** Once the building blocks of the ui start to take shape more user needs will reveal themselves. 

**Keywords:** #strategy #ui #separationofconcerns #design #principles



## 2026-07-14 — 

**Context:**  Addressing initial state of localStorage data object and what properties area needed to render the UI successfully.

**What I tried:**  I asking Claude Code to provide code that can convert today's date into a variable that will store the first day of that week (for users[x].weeklyLogs[y].weekId) into the format "2026-W25", to be able to use that as a unique id for rendering each week.  

**Decision:** Decided to just use a simple number for the a unique weekId. After seeing all of the complexity involved in this one task, I decided to simplify the process for the purpose of making this app an mvp. There were a lot of ISO calculations and string manipulations required for this one task and it seemed like a bit of over engineering for its purpose. In the future, I would like to invest more time in learning the Date object and string manipulation logic that it produced but in my best effort to stay focused on my mvp deadline, eliminate potential rabbit holes and boil this app down into a simple mvp, I decided to just use a simple number for the initial week when the profile is created.

**Uncertainty:** I cannot see at the moment why this wouldn't work or why a more complex format would be required as of yet.
 
**Keywords:** #claudecode #simplicity #mvp-scoping #self-awareness #avoid-rabbit-holes #deadline



## 2026-07-18 — 

**Context:**  Before working on any logic I need to focus more on the visuals of what the weekly ui layout will look like and approach this with more of a user experience angle.

**What I tried:** I used this prompt in Cursor to generate a visual:
"You are a UX/UI Designer. I am designing an app. I want to create a weekly calendar on the screen for fitness enthusiasts with their preselected workout days highlighted (like MWF) to be able to add a post workout comment after they have completed their session and have all of this intuitively designed so that the user doesn't have to think. They should be able to clearly see how to interact with the calendar. Show me a sample calendar proof of concept image with the html day boxes 300px high by 200px wide and the checkbox in an intuitive location."

**Decision:** I used Cursor to create a second proof of concept to get a better visual representation for myself of what the user needs.
`[Cursor: Second_Proof_of_Concept.png"]`

**Uncertainty:** I am uncertain how many proof of concepts will be required but this was a necessary step in order for me to better understand and visualize how to start creating logic to meet the needs of the user.
 
**Keywords:** #visual #prompt #cursor #ux #ui #design #layout #proof-of-concept


