//

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
    showNewUserForm(data);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

ensureUserDataExists().catch((err) => {
  console.error("Initialization error:", err.message);
});

function showNewUserForm() {

}