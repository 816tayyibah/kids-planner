const plannerData = {
  children: ["Sumaiya", "Fatima"],
  days: [
    { key: "sun", label: "Sun \u2600\uFE0F" },
    { key: "mon", label: "Mon" },
    { key: "tue", label: "Tue" },
    { key: "wed", label: "Wed" },
    { key: "thu", label: "Thu" },
    { key: "fri", label: "Fri" },
    { key: "sat", label: "Sat \uD83C\uDF24\uFE0F" },
  ],
  tabs: ["Schedule", "Checklist", "My Stars"],
  schedule: {
   Sumaiya: {
  mon: [
   ["05:30", "Fajr Namaz", "A peaceful start to the day.", "lavender"],
["07:15", "Wake up for school", "Stretch, smile, and get ready.", "peach"],
["07:45", "Go to school", "Bagpack, water bottle, big energy.", "mint"],
["14:30", "Lunch", "Wash up, then enjoy your meal.", "mint"],
["14:50", "Zohar Namaz", "Quiet prayer time.", "lavender"],
["15:00", "Sleep - Qailula", "A short recharge nap.", "sky"],

["16:45", "Snack time", "Snack and reset.", "peach"],

["17:00", "Madarsa", "Learning with focus.", "sky"],
["18:15", "Asr Namaz", "Pause and pray.", "rose"],
["18:20", "Quran Revision", "Revise with attention.", "mint"],

["19:15", "Maghrib Namaz", "Faith and reflection.", "rose"],
["19:25", "Quran Sabaq", "Learn with care.", "mint"],

["20:15", "Dinner", "Family table time.", "mint"],
["20:45", "Isha Namaz", "A calm evening prayer.", "rose"],
["21:00", "Homework check / revision", "Tiny review, big confidence.", "sky"],
["21:45", "Play time", "Free fun after a great day.", "peach"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
  ],
  tue: [
    ["05:30", "Fajr Namaz", "A peaceful start to the day.", "lavender"],
["07:15", "Wake up for school", "Stretch, smile, and get ready.", "peach"],
["07:45", "Go to school", "Bagpack, water bottle, big energy.", "mint"],
["14:30", "Lunch", "Wash up, then enjoy your meal.", "mint"],
["14:50", "Zohar Namaz", "Quiet prayer time.", "lavender"],
["15:00", "Sleep - Qailula", "A short recharge nap.", "sky"],

["16:45", "Snack time", "Snack and reset.", "peach"],

["17:00", "Madarsa", "Learning with focus.", "sky"],
["18:15", "Asr Namaz", "Pause and pray.", "rose"],
["18:20", "Quran Revision", "Revise with attention.", "mint"],

["19:15", "Maghrib Namaz", "Faith and reflection.", "rose"],
["19:25", "Quran Sabaq", "Learn with care.", "mint"],

["20:15", "Dinner", "Family table time.", "mint"],
["20:45", "Isha Namaz", "A calm evening prayer.", "rose"],
["21:00", "Homework check / revision", "Tiny review, big confidence.", "sky"],
["21:45", "Play time", "Free fun after a great day.", "peach"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
  ],
  wed: [
   ["05:30", "Fajr Namaz", "A peaceful start to the day.", "lavender"],
["07:15", "Wake up for school", "Stretch, smile, and get ready.", "peach"],
["07:45", "Go to school", "Bagpack, water bottle, big energy.", "mint"],
["14:30", "Lunch", "Wash up, then enjoy your meal.", "mint"],
["14:50", "Zohar Namaz", "Quiet prayer time.", "lavender"],
["15:00", "Sleep - Qailula", "A short recharge nap.", "sky"],

["16:45", "Snack time", "Snack and reset.", "peach"],

["17:00", "Madarsa", "Learning with focus.", "sky"],
["18:15", "Asr Namaz", "Pause and pray.", "rose"],
["18:20", "Quran Revision", "Revise with attention.", "mint"],

["19:15", "Maghrib Namaz", "Faith and reflection.", "rose"],
["19:25", "Quran Sabaq", "Learn with care.", "mint"],

["20:15", "Dinner", "Family table time.", "mint"],
["20:45", "Isha Namaz", "A calm evening prayer.", "rose"],
["21:00", "Homework check / revision", "Tiny review, big confidence.", "sky"],
["21:45", "Play time", "Free fun after a great day.", "peach"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
  ],
  thu: [
    ["05:30", "Fajr Namaz", "A peaceful start to the day.", "lavender"],
["07:15", "Wake up for school", "Stretch, smile, and get ready.", "peach"],
["07:45", "Go to school", "Bagpack, water bottle, big energy.", "mint"],
["14:30", "Lunch", "Wash up, then enjoy your meal.", "mint"],
["14:50", "Zohar Namaz", "Quiet prayer time.", "lavender"],
["15:00", "Sleep - Qailula", "A short recharge nap.", "sky"],

["16:45", "Snack time", "Snack and reset.", "peach"],

["17:00", "Madarsa", "Learning with focus.", "sky"],
["18:15", "Asr Namaz", "Pause and pray.", "rose"],
["18:20", "Quran Revision", "Revise with attention.", "mint"],

["19:15", "Maghrib Namaz", "Faith and reflection.", "rose"],
["19:25", "Quran Sabaq", "Learn with care.", "mint"],

["20:15", "Dinner", "Family table time.", "mint"],
["20:45", "Isha Namaz", "A calm evening prayer.", "rose"],
["21:00", "Homework check / revision", "Tiny review, big confidence.", "sky"],
["21:45", "Play time", "Free fun after a great day.", "peach"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
  ],
  fri: [
  ["05:30", "Fajr Namaz", "A peaceful start to the day.", "lavender"],

["07:15", "Wake up for school", "Stretch, smile, and get ready.", "peach"],
["07:45", "Go to school", "Bagpack, water bottle, big energy.", "mint"],

["13:00", "Bath", "Freshen up and relax after school.", "sky"],
["13:30", "Lunch", "Quiet meal time.", "mint"],

["14:00", "Jumma Namaz", "Spiritual prayer time.", "rose"],

["14:45", "Qailula (Nap)", "Short recharge nap for energy.", "sky"],

["16:45", "Snack Time", "Snack and reset.", "peach"],

["17:00", "Madarsa", "Learning with focus.", "sky"],

["18:15", "Asr Namaz", "Pause and pray.", "rose"],
["18:20", "Quran Revision", "Revise with attention.", "mint"],

["19:15", "Maghrib Namaz", "Faith and reflection.", "rose"],
["19:25", "Quran Sabaq", "Learn with care.", "mint"],

["20:15", "Dinner", "Family table time.", "mint"],
["20:45", "Isha Namaz", "A calm evening prayer.", "rose"],

["21:00", "Homework / Revision", "Tiny review, big confidence.", "sky"],
["21:45", "Play Time", "Free fun after a great day.", "peach"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
],
  sat: [
 ["05:30", "Fajr Namaz", "Happy weekend start", "lavender"],

["09:30", "Wake up", "Peaceful start", "peach"],
["10:00", "Freshen up + Breakfast", "Ready for a creative day", "sky"],
["10:30", "Quran Sabaq", "Learning with focus", "mint"],
["11:15", "Break", "Rest well", "sky"],
["11:30", "Quran Revision", "Revise with care", "peach"],

["13:30", "Zohar Namaz", "Peaceful prayer", "rose"],
["14:00", "Homework", "Family support time", "mint"],
["14:30", "Lunch", "Healthy meal + rest", "mint"],

["17:30", "Asr Namaz", "Afternoon prayer", "rose"],
["18:00", "Free Time / Play", "Relax and enjoy", "peach"],

["19:15", "Maghrib Namaz", "Evening prayer", "rose"],
["19:25", "Family Time", "Talk & relax together", "mint"],

["21:00", "Isha Namaz", "End the day peacefully", "lavender"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
],
sun: [
  ["05:30", "Fajr Namaz", "Happy weekend start", "lavender"],

["10:30", "Wake up", "Peaceful start to the day", "peach"],
["10:45", "Breakfast", "Get ready with energy", "sky"],

["11:00", "House chores / Mom help", "Help at home with care", "mint"],
["11:30", "Bath", "Fresh and clean start", "sky"],

["12:00", "Quran Sabaq", "Learning with focus", "rose"],
["12:45", "Quran Revision", "Revise with care", "mint"],

["14:00", "Zohar Namaz", "Midday prayer and peace", "rose"],
["14:30", "Lunch", "Healthy meal + rest", "mint"],
["15:00", "Mobile Time", "Short entertainment break", "peach"],

["16:00", "Play with Bushra", "Fun and relaxing time", "peach"],

["17:30", "Asr Namaz", "Evening prayer", "rose"],
["18:00", "Family Time", "Talk & relax together", "mint"],

["19:00", "Maghrib Namaz", "Evening prayer", "lavender"],

["21:30", "Isha Namaz", "End the day peacefully", "lavender"],
["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
["23:00", "Sleep", "Good night and rest well.", "lavender"],
],
},

Fatima: {
  mon: [
  ["05:30", "Fajr Namaz", "Start with calm and gratitude.", "lavender"],
  ["07:15", "Wake up for school", "Brush, dress, shine.", "peach"],
  ["07:45", "Go to school", "Ready for a bright day.", "mint"],
  ["14:30", "Lunch", "Healthy meal after bath.", "mint"],
  ["14:50", "Zohar Namaz", "Prayer time.", "lavender"],
  ["15:00", "Quiet rest", "Recharge your superhero brain.", "sky"],

  ["16:45", "Snack time", "Relax with a happy bite.", "peach"],
  ["17:15", "Homework", "Complete your homework with focus.", "sky"],

  ["18:00", "Asr Namaz", "Reset with prayer.", "rose"],
  ["18:15", "Madarsa + Kalma", "Learn with focus.", "mint"],
  ["19:15", "Maghrib Namaz", "Evening remembrance.", "rose"],
  ["19:20", "Madarsa", "Continue learning.", "mint"],

  ["20:15", "Dinner", "Family dinner chat.", "mint"],
  ["20:45", "Isha Namaz", "A peaceful finish.", "rose"],
  ["21:00", "Revision", "Quick review and smile.", "sky"],
  ["21:35", "Creative play", "Draw, build, or imagine.", "peach"],
  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"],
],
  tue: [
    [
  ["05:30", "Fajr Namaz", "Start with calm and gratitude.", "lavender"],
  ["07:15", "Wake up for school", "Brush, dress, shine.", "peach"],
  ["07:45", "Go to school", "Ready for a bright day.", "mint"],

  ["14:30", "Lunch", "Healthy meal after bath.", "mint"],
  ["14:50", "Zohar Namaz", "Prayer time.", "lavender"],
  ["15:00", "Quiet rest", "Recharge your superhero brain.", "sky"],

  ["16:45", "Snack time", "Relax with a happy bite.", "peach"],
  ["17:15", "Homework", "Complete your homework with focus.", "sky"],

  ["18:00", "Asr Namaz", "Reset with prayer.", "rose"],
  ["18:15", "Quran Revision", "Learn with focus.", "mint"],

  ["19:15", "Maghrib Namaz", "Evening remembrance.", "rose"],
  ["19:25", "Madarsa + Kalma", "Continue learning.", "mint"],

  ["20:15", "Dinner", "Family dinner chat.", "mint"],
  ["20:45", "Isha Namaz", "A peaceful finish.", "rose"],

  ["21:00", "Story time", "Read a happy story.", "sky"],
  ["21:35", "Creative play", "Draw, build, or imagine.", "peach"],

  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"]
],
  ],
  wed: [
    [
  ["05:30", "Fajr Namaz", "Start with calm and gratitude.", "lavender"],
  ["07:15", "Wake up for school", "Brush, dress, shine.", "peach"],
  ["07:45", "Go to school", "Ready for a bright day.", "mint"],
  ["14:30", "Lunch", "Healthy meal after bath.", "mint"],
  ["14:50", "Zohar Namaz", "Prayer time.", "lavender"],
  ["15:00", "Quiet rest", "Recharge your superhero brain.", "sky"],
  ["16:45", "Snack time", "Relax with a happy bite.", "peach"],
  ["17:15", "Homework", "Finish schoolwork with care.", "sky"],
  ["18:00", "Asr Namaz", "Reset with prayer.", "rose"],
  ["18:15", "Madarsa + Kalma", "Learn with focus.", "mint"],
  ["19:15", "Maghrib Namaz", "Evening remembrance.", "rose"],
  ["19:25", "Quran Revision", "Practice with confidence.", "mint"],
  ["20:15", "Dinner", "Family dinner chat.", "mint"],
  ["20:45", "Isha Namaz", "A peaceful finish.", "rose"],
  ["21:00", "Revision", "Quick review and smile.", "sky"],
  ["21:35", "Creative play", "Draw, build, or imagine.", "peach"],
  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"]
],
  ],
  thu: [
    [
  ["05:30", "Fajr Namaz", "Start with calm and gratitude.", "lavender"],
  ["07:15", "Wake up for school", "Brush, dress, shine.", "peach"],
  ["07:45", "Go to school", "Ready for a bright day.", "mint"],

  ["14:30", "Lunch", "Healthy meal after bath.", "mint"],
  ["14:50", "Zohar Namaz", "Prayer time.", "lavender"],
  ["15:00", "Quiet rest", "Recharge your superhero brain.", "sky"],

  ["16:45", "Snack time", "Relax with a happy bite.", "peach"],
  ["17:15", "Homework", "Complete your homework with focus.", "sky"],

  ["18:00", "Asr Namaz", "Reset with prayer.", "rose"],
  ["18:15", "Madarsa + Kalma", "Learn with focus.", "mint"],

  ["19:15", "Maghrib Namaz", "Evening remembrance.", "rose"],
  ["19:20", "Madarsa", "Continue learning.", "mint"],

  ["20:15", "Dinner", "Family dinner chat.", "mint"],
  ["20:45", "Isha Namaz", "A peaceful finish.", "rose"],

  ["21:00", "School bag prep", "Get ready for Friday calmly.", "sky"],
  ["21:35", "Creative play", "Draw, build, or imagine.", "peach"],

  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"]
],
  ],
  fri: [
  [
  ["05:30", "Fajr Namaz", "A peaceful start to the day.", "lavender"],

  ["07:15", "Wake up for school", "Stretch, smile, and get ready.", "peach"],
  ["07:45", "Go to school", "Bagpack, water bottle, big energy.", "mint"],

  ["13:00", "Bath", "Freshen up and relax after school.", "sky"],
  ["13:30", "Lunch", "Quiet meal time.", "mint"],

  ["14:00", "Jumma Namaz", "Spiritual prayer time.", "rose"],

  ["14:45", "Qailula (Nap)", "Short recharge nap for energy.", "sky"],

  ["16:45", "Snack Time", "Snack and reset.", "peach"],

  ["17:15", "Homework", "Complete your homework with focus.", "sky"],

  ["18:00", "Asr Namaz", "Reset with prayer.", "rose"],
  ["18:15", "Madarsa + Kalma", "Learn with focus.", "mint"],

  ["19:15", "Maghrib Namaz", "Evening remembrance.", "rose"],
  ["19:20", "Madarsa", "Continue learning.", "mint"],

  ["20:15", "Dinner", "Family table time.", "mint"],
  ["20:45", "Isha Namaz", "A calm evening prayer.", "rose"],

  ["21:00", "Homework / Revision", "Tiny review, big confidence.", "sky"],
  ["21:45", "Play Time", "Free fun after a great day.", "peach"],

  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"]
],
],
  sat: [
 [
  ["05:30", "Fajr Namaz", "Happy weekend start", "lavender"],

  ["10:00", "Wake up", "Peaceful start to the day", "peach"],
  ["10:30", "Freshen up + Breakfast", "Get ready with energy", "sky"],
  ["11:00", "Homework", "Focus and learn calmly", "mint"],
  ["12:00", "Play Time", "Relax and enjoy fun time", "sky"],

  ["13:15", "Zohar Namaz", "Midday prayer and peace", "rose"],
  ["13:45", "Quran Revision", "Revise with focus", "mint"],

  ["14:30", "Lunch", "Healthy meal + rest", "mint"],

  ["17:30", "Asr Namaz", "Afternoon prayer", "rose"],
  ["18:00", "Free Time / Play", "Relax and enjoy", "peach"],

  ["19:15", "Maghrib Namaz", "Evening prayer", "rose"],
  ["19:25", "Family Time", "Talk & relax together", "mint"],

  ["21:00", "Isha Namaz", "End the day peacefully", "lavender"],

  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"]
],
],
sun: [
[
  ["05:30", "Fajr Namaz", "Peaceful weekend start", "lavender"],

  ["10:30", "Wake up", "Relaxed morning", "peach"],
  ["10:45", "Breakfast", "Energy for the day", "sky"],

  ["11:00", "House chores / Mom help", "Helping at home", "mint"],
  ["11:30", "Bath", "Fresh and clean", "sky"],

  ["11:50", "Quran Revision", "Revise with focus", "rose"],

  ["13:30", "Zohar Namaz", "Midday prayer and peace", "rose"],
  ["14:30", "Lunch", "Healthy meal + rest", "mint"],

  ["15:00", "Mobile Time", "Short entertainment break", "peach"],

  ["16:00", "Play with Zahra", "Fun and relaxing time", "peach"],

  ["17:30", "Asr Namaz", "Evening prayer", "rose"],
  ["18:00", "Family Time", "Talk & relax together", "mint"],

  ["19:00", "Maghrib Namaz", "Evening prayer", "lavender"],

  ["21:30", "Isha Namaz", "End the day peacefully", "lavender"],

  ["22:45", "Brush your teeth", "Freshen up and get ready for bed.", "sky"],
  ["23:00", "Sleep", "Good night and rest well.", "lavender"]
],
],
},
  },
  tasks: {
    Sumaiya: [
      ["Make your bed", "2 stars"],
      ["Finish homework", "3 stars"],
      ["Read for 15 minutes", "2 stars"],
      ["Help set the table", "1 star"],
      ["Complete namaz routine", "4 stars"],
    ],
    Fatima: [
      ["Pack school bag", "2 stars"],
      ["Finish homework", "3 stars"],
      ["Read a story", "2 stars"],
      ["Tidy toys", "1 star"],
      ["Complete namaz routine", "4 stars"],
    ],
  },
  awards: [
    { id: "starter", icon: "\uD83C\uDF1F", title: "Shiny Starter", goal: 5, text: "Earn 5 stars to unlock your first award." },
    { id: "helper", icon: "\uD83E\uDDB8", title: "Helping Hero", goal: 12, text: "Finish kind helper jobs around the house." },
    { id: "focus", icon: "\uD83C\uDFAF", title: "Focus Friend", goal: 20, text: "Stay with your checklist and timer." },
    { id: "champ", icon: "\uD83D\uDC51", title: "Routine Champion", goal: 30, text: "A whole week of strong routines." },
  ],
};

const state = {
  child: "Sumaiya",
  day: "mon",
  tab: "Schedule",
  schedules: loadScheduleMap("kidsPlannerSchedules", plannerData.schedule),
  starsByChild: loadChildNumberMap("kidsPlannerStarsByChild", 0),
  badgesByChild: loadChildArrayMap("kidsPlannerBadgesByChild"),
  completedTasks: loadObject("kidsPlannerTasks", {}),
  completedScheduleStars: loadObject("kidsPlannerScheduleStars", {}),
  timer: {
    duration: 15 * 60,
    remaining: 15 * 60,
    intervalId: null,
  },
};

const childSelector = document.getElementById("childSelector");
const daySelector = document.getElementById("daySelector");
const viewSelector = document.getElementById("viewSelector");
const scheduleView = document.getElementById("scheduleView");
const checklistView = document.getElementById("checklistView");
const starsView = document.getElementById("starsView");
const todayLabel = document.getElementById("todayLabel");
const starCount = document.getElementById("starCount");
const badgeCount = document.getElementById("badgeCount");
const installAppBtn = document.getElementById("installAppBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const scheduleEditorModal = document.getElementById("scheduleEditorModal");
const editorModalTitle = document.getElementById("editorModalTitle");
const editorDaySelector = document.getElementById("editorDaySelector");
const scheduleEditorContent = document.getElementById("scheduleEditorContent");
const closeScheduleEditorBtn = document.getElementById("closeScheduleEditorBtn");
let deferredInstallPrompt = null;
let editorDay = state.day;

resetProgressBtn.addEventListener("click", resetCurrentChildProgress);
installAppBtn.addEventListener("click", installApp);
closeScheduleEditorBtn.addEventListener("click", closeScheduleEditor);
scheduleEditorModal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeEditor === "true") {
    closeScheduleEditor();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !scheduleEditorModal.hidden) {
    closeScheduleEditor();
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installAppBtn.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installAppBtn.hidden = true;
});

registerServiceWorker();

renderSelectors();
renderAll();

function renderSelectors() {
  renderPicker(
    childSelector,
    plannerData.children.map((child) => ({ label: child, value: child })),
    state.child,
    (value) => {
      state.child = value;
      renderAll();
    }
  );

  renderPicker(
    daySelector,
    plannerData.days.map((day) => ({
      label: day.label,
      value: day.key,
    })),
    state.day,
    (value) => {
      state.day = value;
      renderAll();
    }
  );

  renderPicker(
    viewSelector,
    plannerData.tabs.map((tab) => ({ label: tab, value: tab })),
    state.tab,
    (value) => {
      state.tab = value;
      renderAll();
    }
  );
}

function renderPicker(container, items, activeItem, onPick) {
  container.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `picker-button${item.value === activeItem ? " active" : ""}`;
    button.textContent = item.label;
    button.disabled = Boolean(item.disabled);
    button.addEventListener("click", () => {
      if (item.disabled) return;
      onPick(item.value);
      renderSelectors();
    });
    container.appendChild(button);
  });
}

function renderAll() {
  todayLabel.textContent = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  starCount.textContent = getCurrentStars();
  badgeCount.textContent = getCurrentBadges().length;
  resetProgressBtn.textContent = `Reset ${state.child}`;

  renderSchedule();
  renderChecklist();
  renderStars();

  [scheduleView, checklistView, starsView].forEach((panel) => panel.classList.remove("active"));
  if (state.tab === "Schedule") scheduleView.classList.add("active");
  if (state.tab === "Checklist") checklistView.classList.add("active");
  if (state.tab === "My Stars") starsView.classList.add("active");
}

function renderSchedule() {
  const dayLabel = plannerData.days.find((day) => day.key === state.day)?.label || state.day;
  const title = `
    <div class="schedule-head">
      <div>
        <h2 class="panel-title">${dayLabel} Schedule</h2>
        <p class="panel-note">A colorful routine board for ${state.child}. Tap <strong>+⭐ Add</strong> only during that activity's live time slot.</p>
      </div>
      <button id="openScheduleEditorBtn" class="open-editor-btn" type="button">Edit Schedule</button>
    </div>
  `;
  const note = `<p class="panel-note">A colorful routine board for ${state.child}. Tap <strong>+⭐</strong> when an activity is done.</p>`;
  const list = document.createElement("div");
  list.className = "schedule-list";

  const template = document.getElementById("scheduleItemTemplate");
  const entries = getScheduleEntries(state.child, state.day);

  if (entries.length === 0) {
    scheduleView.innerHTML = `
      ${title}
      <div class="empty-state">
        <strong>No schedule added yet.</strong>
        <span>Use the editor to add ${state.child}'s routine for ${dayLabel}.</span>
      </div>
    `;
    attachScheduleViewEvents();
    return;
  }

  entries.forEach(([time, titleText, detail, color], index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const lineKey = buildScheduleLineKey(state.child, state.day, time, titleText);
    const nextTime = entries[index + 1]?.[0] ?? null;
    const lineState = getScheduleLineState(state.day, time, nextTime, lineKey);
    node.dataset.color = color;
    node.querySelector(".time-chip").textContent = formatDisplayTime(time);
    node.querySelector("h3").textContent = titleText;
    node.querySelector("p").textContent = detail;

    if (titleText.toLowerCase().includes("namaz")) {
      node.classList.add("namaz");
    }

    const btn = node.querySelector(".mini-star");
    btn.disabled = lineState.disabled;
    btn.textContent = lineState.label;
    node.classList.toggle("schedule-earned", lineState.completed);
    node.classList.toggle("schedule-locked", lineState.expired || lineState.notToday);

    btn.addEventListener("click", () => {
      if (lineState.disabled) return;
      state.completedScheduleStars[lineKey] = true;
      save("kidsPlannerScheduleStars", state.completedScheduleStars);
      awardStars(1);
    });

    list.appendChild(node);
  });

  scheduleView.innerHTML = title;
  scheduleView.appendChild(list);
  attachScheduleViewEvents();
}

function renderChecklist() {
  const taskList = document.createElement("div");
  taskList.className = "task-list";
  const template = document.getElementById("taskItemTemplate");
  const safeChild = state.child.trim();
  const safeDay = state.day.trim();
  const childTasks = plannerData.tasks[state.child];

  childTasks.forEach(([task, stars], index) => {
    const key = `${safeChild}__${safeDay}__${index}`;
    const done = Boolean(state.completedTasks[key]);
    const node = template.content.firstElementChild.cloneNode(true);

    node.classList.toggle("done", done);
    node.querySelector("input").checked = done;
    node.querySelector("strong").textContent = task;
    node.querySelector("small").textContent = done ? "Completed. Great job!" : "Ready for today";
    node.querySelector(".task-points").textContent = stars;

    const checkbox = node.querySelector("input");
    checkbox.addEventListener("change", () => {
      toggleTask(key, node, stars);
    });

    taskList.appendChild(node);
  });

  checklistView.innerHTML = `
    <div class="checklist-grid">
      <section class="task-panel">
        <h2 class="panel-title">Checklist</h2>
        <p class="panel-note">Finish little missions and collect stars.</p>
      </section>
      <aside class="side-panel focus-timer">
        <div class="focus-card">
          <h3>Focus Timer</h3>
          <p>15 minutes of superhero concentration.</p>
          <div class="timer-ring" id="timerRing">
            <div class="timer-value" id="timerValue">${formatTime(state.timer.remaining)}</div>
          </div>
          <div class="focus-buttons">
            <button class="start-btn" type="button" id="startTimerBtn">${state.timer.intervalId ? "Pause" : "Start"}</button>
            <button class="reset-btn" type="button" id="resetTimerBtn">Reset</button>
          </div>
        </div>
      </aside>
    </div>
  `;

  checklistView.querySelector(".task-panel").appendChild(taskList);
  checklistView.querySelector("#startTimerBtn").addEventListener("click", toggleTimer);
  checklistView.querySelector("#resetTimerBtn").addEventListener("click", resetTimer);
  updateTimerVisual();
}

function renderStars() {
  const currentStars = getCurrentStars();
  const currentBadges = getCurrentBadges().filter((badgeId) => {
    const award = plannerData.awards.find((item) => item.id === badgeId);
    return award && currentStars >= award.goal;
  });
  const unlocked = plannerData.awards
    .filter((award) => currentStars >= award.goal)
    .map((award) => award.id);
  const nextBadges = Array.from(new Set([...currentBadges, ...unlocked]));

  state.badgesByChild[state.child] = nextBadges;
  save("kidsPlannerBadgesByChild", state.badgesByChild);
  badgeCount.textContent = nextBadges.length;

  const cards = plannerData.awards.map((award) => {
    const isUnlocked = nextBadges.includes(award.id);
    return `
      <article class="badge-card${isUnlocked ? "" : " locked"}">
        <div class="badge-icon">${award.icon}</div>
        <h3>${award.title}</h3>
        <p>${award.text}</p>
        <p><strong>${isUnlocked ? "Unlocked!" : `${award.goal} stars needed`}</strong></p>
      </article>
    `;
  }).join("");

  starsView.innerHTML = `
    <div class="stars-grid">
      <section class="task-panel">
        <h2 class="panel-title">My Stars</h2>
        <p class="panel-note">${state.child} has earned <strong>${currentStars}</strong> shiny stars so far.</p>
        <div class="badge-grid">${cards}</div>
      </section>
      <aside class="side-panel">
        <div class="focus-card">
          <h3>Reward Chest</h3>
          <p>Every 10 stars means one fun reward choice.</p>
          <div class="streak-row">
            <div class="streak-bubble">${Math.floor(currentStars / 10)} reward${Math.floor(currentStars / 10) === 1 ? "" : "s"}</div>
            <div class="streak-bubble">${10 - (currentStars % 10 || 10)} to next</div>
          </div>
        </div>
        <div class="reward-banner">
          <div>
            <strong>Today&apos;s prize idea</strong>
            <span>Pick from stickers, extra play time, drawing time, or a family treat.</span>
          </div>
          <div class="badge-icon">&#127873;</div>
        </div>
      </aside>
    </div>
  `;
}

function toggleTask(key, node, stars) {
  const alreadyDone = !!state.completedTasks[key];

  const starValue = Number(stars.replace(" stars", "").replace(" star", ""));

  if (alreadyDone) {
    delete state.completedTasks[key];
    node.classList.remove("done");
    node.querySelector("small").textContent = "Ready for today";
    addStarsForCurrentChild(-starValue);
  } else {
    state.completedTasks[key] = true;
    node.classList.add("done");
    node.querySelector("small").textContent = "Completed. Great job!";
    awardStars(starValue);
  }

  save("kidsPlannerTasks", state.completedTasks);
  renderAll();
}

function awardStars(amount) {
  addStarsForCurrentChild(amount);
  renderAll();
  launchConfetti();
}

function toggleTimer() {
  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
    renderChecklist();
    return;
  }

  state.timer.intervalId = window.setInterval(() => {
    state.timer.remaining -= 1;
    updateTimerVisual();

    if (state.timer.remaining <= 0) {
      clearInterval(state.timer.intervalId);
      state.timer.intervalId = null;
      state.timer.remaining = 0;
      updateTimerVisual();
      awardStars(3);
    }
  }, 1000);

  renderChecklist();
}

function resetTimer() {
  clearInterval(state.timer.intervalId);
  state.timer.intervalId = null;
  state.timer.remaining = state.timer.duration;
  renderChecklist();
}

function updateTimerVisual() {
  const timerValueEl = document.getElementById("timerValue");
  const timerRingEl = document.getElementById("timerRing");
  if (!timerValueEl || !timerRingEl) return;

  timerValueEl.textContent = formatTime(state.timer.remaining);
  const progress = 100 - (state.timer.remaining / state.timer.duration) * 100;
  timerRingEl.style.setProperty("--progress", `${progress}`);
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function launchConfetti() {
  const colors = ["#f7c84b", "#9ed9c6", "#f3a8c2", "#a8c8f5", "#c4b5fd"];
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1500);
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadNumber(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? Number(JSON.parse(value)) : fallback;
}

function loadArray(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
}

function loadObject(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
}

function loadScheduleMap(key, fallback) {
  const savedSchedules = loadObject(key, null);
  if (savedSchedules) return savedSchedules;
  return cloneScheduleMap(fallback);
}

function loadChildNumberMap(mapKey, fallback) {
  const savedMap = loadObject(mapKey, null);
  if (savedMap) return savedMap;

  return plannerData.children.reduce((result, child) => {
    result[child] = fallback;
    return result;
  }, {});
}

function loadChildArrayMap(mapKey) {
  const savedMap = loadObject(mapKey, null);
  if (savedMap) return savedMap;

  return plannerData.children.reduce((result, child) => {
    result[child] = [];
    return result;
  }, {});
}

function getCurrentStars() {
  return state.starsByChild[state.child] ?? 0;
}

function getCurrentBadges() {
  return state.badgesByChild[state.child] ?? [];
}

function getScheduleEntries(child, day) {
  return state.schedules[child]?.[day] ?? [];
}

function hasScheduleForDay(child, day) {
  return getScheduleEntries(child, day).length > 0;
}

function syncSelectedDayToAvailableSchedule() {
  if (hasScheduleForDay(state.child, state.day)) return;

  const firstAvailableDay = plannerData.days.find((day) => hasScheduleForDay(state.child, day.key));
  state.day = firstAvailableDay?.key || plannerData.days[0].key;
}

function renderScheduleEditor(dayLabel, entries) {
  const normalizedEntries = normalizeDayEntries(entries);
  const rows = normalizedEntries.length > 0
    ? normalizedEntries.map(([time, title, detail, color]) => `
        <div class="editor-row">
          <input data-field="time" type="time" value="${toTimeInputValue(time)}">
          <input data-field="title" type="text" value="${escapeAttribute(title)}" placeholder="Activity title">
          <input data-field="detail" type="text" value="${escapeAttribute(detail)}" placeholder="Activity detail">
          <select data-field="color">
            ${renderColorOptions(color)}
          </select>
          <button class="editor-remove-btn" type="button">Remove</button>
        </div>
      `).join("")
    : `
      <div class="editor-row">
        <input data-field="time" type="time" value="07:00">
        <input data-field="title" type="text" value="" placeholder="Activity title">
        <input data-field="detail" type="text" value="" placeholder="Activity detail">
        <select data-field="color">
          ${renderColorOptions("peach")}
        </select>
        <button class="editor-remove-btn" type="button">Remove</button>
      </div>
    `;

  return `
    <section class="schedule-editor">
      <div class="schedule-editor-head">
        <h3>Edit ${state.child}'s ${dayLabel} routine</h3>
        <p>Update the timetable here and it will stay saved in the app.</p>
      </div>
      <div id="scheduleEditorRows" class="editor-rows">${rows}</div>
      <div class="editor-actions">
        <button id="addScheduleRowBtn" class="editor-add-btn" type="button">Add Line</button>
        <button id="saveScheduleBtn" class="editor-save-btn" type="button">Save Schedule</button>
        <button id="resetScheduleDayBtn" class="editor-reset-btn" type="button">Reset This Day</button>
      </div>
    </section>
  `;
}

function renderColorOptions(selectedColor) {
  return ["lavender", "peach", "mint", "sky", "rose"]
    .map((color) => `<option value="${color}"${color === selectedColor ? " selected" : ""}>${capitalize(color)}</option>`)
    .join("");
}

function attachScheduleViewEvents() {
  const openEditorBtn = document.getElementById("openScheduleEditorBtn");
  if (!openEditorBtn) return;

  openEditorBtn.addEventListener("click", () => {
    editorDay = state.day;
    openScheduleEditor();
  });
}

function openScheduleEditor() {
  scheduleEditorModal.hidden = false;
  closeScheduleEditorBtn.disabled = false;
  renderScheduleEditorModal();
}

function closeScheduleEditor() {
  scheduleEditorModal.hidden = true;
}

function renderScheduleEditorModal() {
  const dayLabel = plannerData.days.find((day) => day.key === editorDay)?.label || editorDay;
  const entries = getScheduleEntries(state.child, editorDay);

  editorModalTitle.textContent = `Edit ${state.child}'s ${dayLabel} schedule`;
  renderPicker(
    editorDaySelector,
    plannerData.days.map((day) => ({ label: day.label, value: day.key })),
    editorDay,
    (value) => {
      editorDay = value;
      renderScheduleEditorModal();
    }
  );

  scheduleEditorContent.innerHTML = renderScheduleEditor(dayLabel, entries);
  attachScheduleEditorEvents();
}

function attachScheduleEditorEvents() {
  const rowsContainer = document.getElementById("scheduleEditorRows");
  const addBtn = document.getElementById("addScheduleRowBtn");
  const saveBtn = document.getElementById("saveScheduleBtn");
  const resetBtn = document.getElementById("resetScheduleDayBtn");

  if (!rowsContainer || !addBtn || !saveBtn || !resetBtn) return;

  addBtn.addEventListener("click", () => {
    rowsContainer.insertAdjacentHTML("beforeend", `
      <div class="editor-row">
        <input data-field="time" type="time" value="07:00">
        <input data-field="title" type="text" value="" placeholder="Activity title">
        <input data-field="detail" type="text" value="" placeholder="Activity detail">
        <select data-field="color">
          ${renderColorOptions("peach")}
        </select>
        <button class="editor-remove-btn" type="button">Remove</button>
      </div>
    `);
    attachEditorRemoveHandlers(rowsContainer);
  });

  saveBtn.addEventListener("click", saveScheduleEditor);
  resetBtn.addEventListener("click", resetScheduleDay);
  attachEditorRemoveHandlers(rowsContainer);
}

function attachEditorRemoveHandlers(rowsContainer) {
  rowsContainer.querySelectorAll(".editor-remove-btn").forEach((button) => {
    button.onclick = () => {
      const row = button.closest(".editor-row");
      if (!row) return;
      if (rowsContainer.children.length === 1) {
        row.querySelectorAll("input").forEach((input) => {
          input.value = input.type === "time" ? "07:00" : "";
        });
        const select = row.querySelector("select");
        if (select) select.value = "peach";
        return;
      }
      row.remove();
    };
  });
}

function saveScheduleEditor() {
  const rows = Array.from(document.querySelectorAll("#scheduleEditorRows .editor-row"));
  const nextEntries = rows
    .map((row) => {
      const time = row.querySelector('[data-field="time"]').value;
      const title = row.querySelector('[data-field="title"]').value.trim();
      const detail = row.querySelector('[data-field="detail"]').value.trim();
      const color = row.querySelector('[data-field="color"]').value;
      if (!time || !title) return null;
      return [fromTimeInputValue(time), title, detail || "Daily routine time.", color];
    })
    .filter(Boolean);

  if (!state.schedules[state.child]) {
    state.schedules[state.child] = {};
  }

  state.schedules[state.child][editorDay] = nextEntries;
  save("kidsPlannerSchedules", state.schedules);
  renderSelectors();
  renderAll();
  renderScheduleEditorModal();
}

function resetScheduleDay() {
  const shouldReset = window.confirm(`Reset ${state.child}'s ${editorDay.toUpperCase()} schedule back to the original planner version?`);
  if (!shouldReset) return;

  if (!state.schedules[state.child]) {
    state.schedules[state.child] = {};
  }

  state.schedules[state.child][editorDay] = cloneScheduleDay(plannerData.schedule[state.child]?.[editorDay] ?? []);
  save("kidsPlannerSchedules", state.schedules);
  renderSelectors();
  renderAll();
  renderScheduleEditorModal();
}

function buildScheduleLineKey(child, day, time, title) {
  return `${child}__${getTodayDateKey()}__${day}__${time}__${title}`;
}

function getScheduleLineState(day, time, nextTime, lineKey) {
  const todayDayKey = getTodayWeekdayKey();
  const completed = Boolean(state.completedScheduleStars[lineKey]);
  const notToday = day !== todayDayKey;
  const currentMinutes = getCurrentMinutes();
  const startMinutes = timeToMinutes(time);
  const nextMinutes = nextTime ? timeToMinutes(nextTime) : 24 * 60;
  const upcoming = !notToday && currentMinutes < startMinutes;
  const expired = !notToday && currentMinutes >= nextMinutes;

  if (completed) {
    return { disabled: true, completed: true, expired: false, notToday: false, label: "⭐ Earned" };
  }

  if (notToday) {
    return { disabled: true, completed: false, expired: false, notToday: true, upcoming: false, label: "⭐ Not today" };
  }

  if (upcoming) {
    return { disabled: true, completed: false, expired: false, notToday: false, upcoming: true, label: "⭐ Wait" };
  }

  if (expired) {
    return { disabled: true, completed: false, expired: true, notToday: false, upcoming: false, label: "⭐ Closed" };
  }

  return { disabled: false, completed: false, expired: false, notToday: false, upcoming: false, label: "+⭐ Add" };
}

function addStarsForCurrentChild(amount) {
  const nextValue = Math.max(0, getCurrentStars() + amount);
  state.starsByChild[state.child] = nextValue;
  save("kidsPlannerStarsByChild", state.starsByChild);
}

function cloneScheduleMap(scheduleMap) {
  return JSON.parse(JSON.stringify(scheduleMap));
}

function cloneScheduleDay(dayEntries) {
  return JSON.parse(JSON.stringify(dayEntries));
}

function normalizeDayEntries(entries) {
  let previousMinutes = null;

  return entries.map(([time, title, detail, color]) => {
    const normalizedMinutes = normalizeTimeAgainstPrevious(time, previousMinutes);
    previousMinutes = normalizedMinutes;
    return [minutesToTimeString(normalizedMinutes), title, detail, color];
  });
}

function getTodayDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function getTodayWeekdayKey() {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date().getDay()];
}

function getCurrentMinutes() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function timeToMinutes(timeValue) {
  const [hoursText, minutesText] = String(timeValue).split(":");
  const hours = Number(hoursText);
  const minutes = Number(minutesText);
  return hours * 60 + minutes;
}

function minutesToTimeString(totalMinutes) {
  const safeMinutes = Math.max(0, Math.min(totalMinutes, (24 * 60) - 1));
  const hours = Math.floor(safeMinutes / 60);
  const minutes = safeMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function normalizeTimeAgainstPrevious(timeValue, previousMinutes) {
  let minutes = timeToMinutes(timeValue);

  if (previousMinutes == null) {
    return minutes;
  }

  while (minutes <= previousMinutes && minutes + (12 * 60) < 24 * 60) {
    minutes += 12 * 60;
  }

  return minutes;
}

function toTimeInputValue(timeValue) {
  const [hoursText, minutesText] = String(timeValue).split(":");
  return `${String(Number(hoursText)).padStart(2, "0")}:${String(Number(minutesText)).padStart(2, "0")}`;
}

function fromTimeInputValue(timeValue) {
  return formatDisplayTime(timeValue);
}

function formatDisplayTime(timeValue) {
  return minutesToTimeString(timeToMinutes(timeValue));
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function resetCurrentChildProgress() {
  const shouldReset = window.confirm(`Reset all stars, awards, and checked tasks for ${state.child}?`);
  if (!shouldReset) return;

  state.starsByChild[state.child] = 0;
  state.badgesByChild[state.child] = [];

  Object.keys(state.completedTasks).forEach((key) => {
    if (key.startsWith(`${state.child}__`)) {
      delete state.completedTasks[key];
    }
  });

  clearInterval(state.timer.intervalId);
  state.timer.intervalId = null;
  state.timer.remaining = state.timer.duration;

  save("kidsPlannerStarsByChild", state.starsByChild);
  save("kidsPlannerBadgesByChild", state.badgesByChild);
  save("kidsPlannerTasks", state.completedTasks);
  renderAll();
}

async function installApp() {
  if (!deferredInstallPrompt) return;

  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  if (choice.outcome !== "accepted") {
    installAppBtn.hidden = false;
  }
  deferredInstallPrompt = null;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Leave the planner usable even when install features are unavailable.
    });
  });
}
