const loginScreen = document.querySelector("#login-screen");
const appScreen = document.querySelector("#app-screen");
const loginForm = document.querySelector("#login-form");
const loginUser = document.querySelector("#login-user");
const loginPass = document.querySelector("#login-pass");
const loginError = document.querySelector("#login-error");
const welcomeUser = document.querySelector("#welcome-user");
const logoutBtn = document.querySelector("#logout-btn");

const USERS_KEY = "taskflow_users";
const SESSION_KEY = "taskflow_session";

function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, user); 
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function showApp(user) {
  loginScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
  welcomeUser.textContent = "Olá, " + user + "! " + "Bem Vindo ao TaskFlow";
}

function showLogin() {
  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  loginForm.reset();
  loginError.textContent = "";
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginError.textContent = "";

  const username = loginUser.value.trim();
  const password = loginPass.value.trim();

  if (!username || !password) {
    loginError.textContent = "Preencha todos os campos.";
    return;
  }

  const users = getUsers();
  let user = users.find((u) => u.username === username);

  if (user) {
    if (user.password !== password) {
      loginError.textContent = "Senha incorreta.";
      return;
    }
  } else {
    users.push({ username, password });
    saveUsers(users);
  }

  setSession(username);
  showApp(username);
});

logoutBtn.addEventListener("click", () => {
  clearSession();
  showLogin();
});

const valorForm = document.querySelector("#taskflowform");
const input = document.querySelector("#taskflow");

valorForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

const session = getSession();
if (session) {
  showApp(session);
} else {
  showLogin();
}
