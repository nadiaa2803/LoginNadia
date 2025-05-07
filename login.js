document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Dummy login logic
  if (email === "user@example.com" && password === "123456") {
    alert("Welcome to your adventure!");
  } else {
    alert("Invalid login credentials.");
  }
});
