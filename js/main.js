
/*
function renderUserData(items, container) {
  // Clear the container safely (also avoids innerHTML = '')
  container.textContent = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'user-card'; // safe: this is YOUR string, not user data

    const name = document.createElement('h3');
    name.textContent = item.name;      // user data → always textContent

    const bio = document.createElement('p');
    bio.textContent = item.bio;        // same rule, no exceptions

    card.appendChild(name);
    card.appendChild(bio);
    container.appendChild(card);
  });
}
  */


/*

function hasAccount() {
  const userData = localStorage.getItem("userAccount");
  return userData !== null;
}

// Usage
if (hasAccount()) {
  console.log("Welcome back!");
} else {
  console.log("Let's set up your account.");
}

function createAccount(userData) {
  localStorage.setItem("userAccount", JSON.stringify(userData));
}

createAccount({ name: "Alex", email: "alex@example.com" });

function getAccount() {
  const data = localStorage.getItem("userAccount");
  return data ? JSON.parse(data) : null;
}
*/
