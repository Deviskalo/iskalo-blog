let ul = document.querySelector(".links-container");

auth.onAuthStateChanged((user) => {
  if (user) {
    // If user is loggedin
    ul.innerHTML += `
    <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
    <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>`;
  } else {
    // No one is logged in
    ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Login</a></li>
      `;
  }
});
