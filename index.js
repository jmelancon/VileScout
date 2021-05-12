if ("serviceWorker" in navigator) {
  window.onload = () => navigator.serviceWorker.register("./sw.js");
}

/**
 * An array of svg icons
 */
const icons = [
  { name: "bars", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path></svg>" },
  { name: "copy", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z'></path></svg>" },
  { name: "download", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'></path></svg>" },
  { name: "eraser", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z'></path></svg>" },
  { name: "minus", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path></svg>" },
  { name: "pause", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z'></path></svg>" },
  { name: "pen", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z'></path></svg>" },
  { name: "play", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'></path></svg>" },
  { name: "plus", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path></svg>" },
  { name: "question", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'></path></svg>" },
  { name: "save", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z'></path></svg>" },
  { name: "square-empty", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z'></path></svg>" },
  { name: "square-checked", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z'></path></svg>" },
  { name: "star-empty", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path fill='currentColor' d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'></path></svg>" },
  { name: "star-filled", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path fill='currentColor' d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path></svg>" },
  { name: "stop", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z'></path></svg>" },
  { name: "undo", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z'></path></svg>" }
];

/**
 * Updates every `i` node within an element with a corresponding icon
 * @param {HTMLElement} element The element to refresh icons under
 */
function refreshIcons(element = document) {
  element.querySelectorAll("i").forEach(iconElement => {
    iconElement.innerHTML = icons.question;
    icons.forEach(icon => {
      if (iconElement.classList.contains(icon.name)) iconElement.innerHTML = icon.value;
    });
  });
}

const customMetrics = document.querySelector("#metrics-custom");

const teamMetric = document.querySelector("#metric-team");
const teamsList = document.querySelector("#teams");
const matchMetric = document.querySelector("#metric-match");
const absentMetric = document.querySelector("#metric-absent");

let scoutLocation = "Red Near";
let matchCount = 1;
let isAbsent = false;
let gameMetrics = [];
const metricTypes = {
  "toggle": ToggleMetric,
  "number": NumberMetric,
  "select": SelectMetric,
  "text": TextMetric,
  "rating": RatingMetric,
  "timer": TimerMetric,
};
const exampleTemplate = {
  metrics: [
    { name: "Toggle", type: "toggle", group: "Group" },
    { name: "Number", type: "number" },
    { name: "Select", type: "select", values: ["Value 1", "Value 2", "Value 3"] },
    { name: "Text", type: "text", tip: "Tip" },
    { name: "Rating", type: "rating" },
    { name: "Timer", type: "timer" },
  ]
};
let currentTemplate = JSON.parse(localStorage.getItem("template") ?? JSON.stringify(exampleTemplate));
loadTemplate(currentTemplate);
setLocation(localStorage.getItem("location") ?? "Red Near");

if (localStorage.getItem("backup")) {
  const backupSurvey = JSON.parse(localStorage.getItem("backup"));
  teamMetric.value = backupSurvey.find(metric => metric.name == "Team").value;
  matchCount = backupSurvey.find(metric => metric.name == "Match").value;
  matchMetric.value = matchCount;
  isAbsent = backupSurvey.find(metric => metric.name == "Absent").value;
  if (isAbsent) {
    absentMetric.innerHTML = "<i class='square-checked'></i> Absent";
    customMetrics.classList.toggle("hide");
    refreshIcons(absentMetric);
  }
  gameMetrics.forEach(metric => {
    metric.update(backupSurvey.find(m => m.name == metric.name).value);
  });
}

/**
 * Stores the current unsaved survey to `localStorage`
 */
function backupCurrentSurvey() {
  localStorage.setItem("backup", JSON.stringify([
    { name: "Team", value: teamMetric.value },
    { name: "Match", value: matchMetric.value },
    { name: "Absent", value: isAbsent },
    ...gameMetrics.map(metric => { return { name: metric.name, value: metric.value } })
  ]));
}

/**
 * Copies the current template to clipboard
 */
function copyTemplate() {
  const input = document.createElement("input");
  input.value = JSON.stringify(currentTemplate);
  document.body.append(input);
  input.select();
  input.setSelectionRange(0, input.value.length);
  document.execCommand("copy");
  input.remove();
  alert("Copied template");
}

/**
 * Requests a new template and checks if the template is valid
 */
function editTemplate() {
  const newPrompt = prompt("Paste new template (leave blank to cancel):");
  if (newPrompt) {
    const newTemplate = JSON.parse(newPrompt);
    let error;
    if (newTemplate.metrics) {
      newTemplate.metrics.forEach(metric => {
        if (!metric.name) error = "Metric has no name";
        if (!Array.isArray(metric.values ?? [])) error = "Metric has invalid values";
        if (!metricTypes.hasOwnProperty(metric.type)) error = "Metric has invalid type";
      });
    } else error = "Template has no metrics";
    if (error) {
      alert(`Could not set template! ${error}`);
      return;
    }
    setTemplate(newTemplate);
  }
}

/**
 * Sets a new template or to example template
 * @param {object} newTemplate An object that contains template data
 */
function setTemplate(newTemplate = exampleTemplate) {
  if (!newTemplate) if (prompt("Type 'reset' to reset the template") != "reset") return;
  currentTemplate = JSON.parse(JSON.stringify(newTemplate));
  localStorage.setItem("template", JSON.stringify(currentTemplate ?? ""));
  if (localStorage.getItem("surveys")) downloadSurveys(false);
  loadTemplate(currentTemplate);
  backupCurrentSurvey();
  refreshIcons();
}

/**
 * Loads a template into the UI
 * @param {object} newTemplate An object that contains template data
 */
function loadTemplate(newTemplate = exampleTemplate) {
  teamsList.innerHTML = "";
  if (newTemplate.teams) {
    newTemplate.teams.forEach(team => {
      teamsList.innerHTML += `<option value="${team}">`;
    });
  }
  customMetrics.innerHTML = "";
  gameMetrics = [];
  let metricObject;
  newTemplate.metrics.forEach(metric => {
    metricObject = new metricTypes[metric.type](metric);
    if (metric.group) customMetrics.innerHTML += `<span class='group'>${metric.group}</span>`;
    customMetrics.append(metricObject.element);
    gameMetrics.push(metricObject);
  });
}

/**
 * Sets a new scout location
 * @param {string} newLocation A string that includes alliance color and robot position
 */
function setLocation(newLocation = "Red Near") {
  scoutLocation = newLocation;
  let newTheme = "red";
  if (/blue/.test(newLocation.toLowerCase())) newTheme = "blue";
  document.documentElement.style.setProperty("--theme-color", `var(--${newTheme})`);
  localStorage.setItem("location", newLocation);
  document.querySelector("#nav-location").innerHTML = newLocation;
  document.querySelector("#menu-location").value = newLocation;
  refreshIcons();
}

/**
 * Toggles the options menu
 */
function toggleMenu() {
  document.querySelector("#menu").classList.toggle("show");
  document.querySelector("#menu-toggle").classList.toggle("bg");
}

document.querySelector("#menu-toggle").onclick = () => toggleMenu();

teamMetric.oninput = () => backupCurrentSurvey();
matchMetric.oninput = () => backupCurrentSurvey();

/**
 * Toggles whether the team is absent
 */
function toggleAbsent() {
  customMetrics.classList.toggle("hide");
  absentMetric.innerHTML = `<i class="square-${isAbsent ? "empty" : "checked"}"></i> Absent`;
  refreshIcons(absentMetric);
  isAbsent = !isAbsent;
  backupCurrentSurvey();
}

absentMetric.onclick = () => toggleAbsent();

/**
 * Validates and saves the current survey to `localStorage`
 */
function saveSurvey() {
  if (!/^\d{1,4}[A-Z]?$/.test(teamMetric.value)) {
    alert("Invalid team value");
    teamMetric.focus();
    return;
  }
  if (currentTemplate.teams) {
    if (!currentTemplate.teams.some(team => team == teamMetric.value)) {
      alert("Invalid team value");
      teamMetric.focus();
      return;
    }
  }
  if (!/\d{1,3}/.test(matchMetric.value)) {
    alert("Invalid match value");
    matchMetric.focus();
    return;
  }
  if (!confirm("Confirm save?")) return;
  let surveys = JSON.parse(localStorage.getItem("surveys") ?? "[]");
  surveys.push([
    { name: "Team", value: teamMetric.value },
    { name: "Match", value: matchMetric.value },
    { name: "Absent", value: isAbsent },
    ...gameMetrics.map(metric => { return { name: metric.name, value: metric.value } })
  ]);
  localStorage.setItem("surveys", JSON.stringify(surveys));
  resetSurvey(false);
}

/**
 * Resets the current survey
 * @param {boolean} askUser A boolean that represents whether to prompt the user
 */
function resetSurvey(askUser = true) {
  if (askUser) if (prompt("Type 'reset' to reset the survey") != "reset") return;
  teamMetric.value = "";
  teamMetric.focus();
  if (!askUser) {
    matchCount = Math.min(parseInt(matchMetric.value) + 1, 999);
    matchMetric.value = matchCount;
  }
  if (isAbsent) toggleAbsent();
  gameMetrics.forEach(metric => metric.reset());
  refreshIcons();
  localStorage.removeItem("backup");
}

/**
 * Downloads all surveys from `localStorage`
 * @param {boolean} askUser A boolean that represents whether to prompt the user
 */
function downloadSurveys(askUser = true) {
  if (askUser) if (!confirm("Confirm download?")) return;
  const anchor = document.createElement("a");
  anchor.href = "data:text/plaincharset=utf-8," + encodeURIComponent(localStorage.getItem("surveys"));
  anchor.download = "surveys.json";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
}

/**
 * Erases all surveys from `localStorage` after prompting the user
 */
function eraseSurveys() {
  if (prompt("Type 'erase' to erase saved surveys") == "erase") localStorage.removeItem("surveys");
}