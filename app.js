const sampleRequests = [
  { id: 1, title: "Ana Pérez · 5 días de descanso", approved: false, createdAt: "2026-09-14T08:05:00" },
  { id: 2, title: "Luis Gómez · Cita médica el jueves", approved: false, createdAt: "2026-09-14T08:10:00" },
  { id: 3, title: "Marta Díaz · Silla ergonómica", approved: false, createdAt: "2026-09-14T08:15:00" },
];

const form = document.getElementById("new-request-form");
const input = document.getElementById("new-request-input");
const list = document.getElementById("request-list");
const counter = document.getElementById("request-counter");

let requests = sampleRequests;

function addRequest(title) {
  requests.push({ id: Date.now(), title: title, approved: false, createdAt: new Date().toISOString() });
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


    const marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = "○";

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = request.title;

    row.appendChild(marker);
    row.appendChild(title);
    list.appendChild(row);
  });
}


function renderCounter() {
  counter.textContent = pluralize(requests.length, "solicitud", "solicitudes");
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
