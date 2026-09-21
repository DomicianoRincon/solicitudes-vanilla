const STORAGE_KEY = "solicitudes.requests";

const sampleRequests = [
  { id: 1, title: "Ana Pérez · 5 días de descanso", approved: false, createdAt: "2026-09-14T08:05:00" },
  { id: 2, title: "Luis Gómez · Cita médica el jueves", approved: true, createdAt: "2026-09-14T08:10:00" },
  { id: 3, title: "Marta Díaz · Silla ergonómica", approved: false, createdAt: "2026-09-14T08:15:00" },
];

const form = document.getElementById("new-request-form");
const input = document.getElementById("new-request-input");
const list = document.getElementById("request-list");
const counter = document.getElementById("request-counter");

let requests = loadRequests();

function loadRequests() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.warn("No se pudo leer lo que estaba guardado.", error);
  }
  return sampleRequests;
}

function saveRequests() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
  } catch (error) {
    console.warn("No se pudo guardar.", error);
  }
}

function addRequest(title) {
  requests.push({ id: Date.now(), title: title, approved: false, createdAt: new Date().toISOString() });
  saveRequests();
  render();
}

function toggleRequest(id) {
  requests = requests.map(function (request) {
    return request.id === id ? { ...request, approved: !request.approved } : request;
  });
  saveRequests();
  render();
}

function pluralize(count, singular, plural) {
  return count + " " + (count === 1 ? singular : plural);
}

function renderRequests() {
  list.innerHTML = "";

  if (requests.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "Todavía no hay solicitudes.";
    list.appendChild(empty);
    return;
  }

  requests.forEach(function (request) {
    const row = document.createElement("li");


    const check = document.createElement("button");
    check.type = "button";
    check.className = "check";
    check.textContent = request.approved ? "●" : "○";
    check.setAttribute("aria-label", request.approved ? "Marcar como pendiente" : "Marcar como aprobada");
    check.addEventListener("click", function () {
      toggleRequest(request.id);
    });

    const title = document.createElement("span");
    title.className = request.approved ? "title done" : "title";
    title.textContent = request.title;

    row.appendChild(check);
    row.appendChild(title);
    list.appendChild(row);
  });
}


function renderCounter() {
  const doneCount = requests.filter(function (request) {
    return request.approved;
  }).length;
  counter.textContent =
    pluralize(requests.length, "solicitud", "solicitudes") + " · " + pluralize(doneCount, "aprobada", "aprobadas");
}


function render() {
  renderRequests();
  renderCounter();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = input.value.trim();
  if (title === "") {
    return;
  }
  addRequest(title);
  input.value = "";
  input.focus();
});

render();
