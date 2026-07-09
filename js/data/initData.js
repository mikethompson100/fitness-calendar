// Determine if localStorage needs to be initialized for a new user or if data already exists
let data = null;

async function ensureUserDataExists() {
  const existing = localStorage.getItem("users");
  if (existing && existing !== "null") {
    // check if user already has data in localStorage
    return;
  }
  // Setup initial data for new user in localStorage
  try {
    let response = await fetch("../../schema/initialSchema.json");

    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || typeof data !== "object") {
      throw new Error("Invalid schema data received");
    }
    
    localStorage.setItem("users", JSON.stringify(data));
    showNewUserForm();
    return;

  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

ensureUserDataExists(data).catch((err) => {
  console.error("Initialization error:", err.message);
});

function showNewUserForm() {
      document.getElementById("form-container").style.display = "flex";
      document.getElementById("main-container").style.display = "none";

      const form = document.getElementById("form-container");
      form.addEventListener('submit', (e) => {
        const nameInput = document.getElementById("nameInput").value;
        const goalInput = document.getElementById("goalInput").value;
        let data = JSON.parse(localStorage.getItem("users"));
          data.users[0].profile.name = nameInput; 
          data.users[0].profile.overallGoal = goalInput; 
          localStorage.setItem("users", JSON.stringify(data));
      })
}

