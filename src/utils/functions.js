// Almost project functions exist here

// ## components ##

// --checkbox--
export const checkboxChecked = (e) => {
  e.target.classList.toggle("checkbox-checked");
};

// --lang select box--
export const selectFocus = (e) => {
  e.target.parentNode.classList.add("border-water");
};
export const selectBlur = (e) => {
  e.target.parentNode.classList.remove("border-water");
};

// --email field--
export const emailValidate = () => {
  let emailField = document.querySelector('[data-name|="email-field"]'),
    emailConditionsBox = document.querySelector(".emailConditionsBox"),
    allCheckBoxes = document.querySelectorAll('[data-class="form-checkbox"]'),
    checkboxLabel = document.querySelectorAll(
      '[data-name="checkbox-email-label"]'
    ),
    truthyChecker = document.querySelector(".password-truthy-checker"),
    // fullExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    checkboxes = document.querySelectorAll('[type="checkbox"]'),
    notCheckedInputs = [],
    btn = document.querySelector('[data-type|="submit"]'),
    regex = {
      0: /^\S*$/, // no spaces /^[\S]+$/
      1: "", // no @
      2: /^[^\s@]+@[^\s@]+$/, // domain exist
      3: /\.[^\s@]+$/, // top-level domain exist
    };
  for (let i = 0; i < Object.keys(regex).length; i++) {
    if (emailField.value.match(regex[i])) {
      checkboxes[i].setAttribute("checked", "");
      checkboxLabel[i].style.cssText = "color: green";

      checkboxes[i].classList.add("checkbox-info");
    } else {
      checkboxes[i].removeAttribute("checked");
      checkboxLabel[i].style.cssText = "color: red";
      checkboxes[i].classList.remove("checkbox-info");
    }

    if (
      checkboxes[0].hasAttribute("checked") &&
      checkboxes[1].hasAttribute("checked") &&
      checkboxes[2].hasAttribute("checked") &&
      checkboxes[3].hasAttribute("checked") === true
    ) {
      emailField.style.cssText = "border: 1px solid green";
      emailConditionsBox.style.setProperty(
        "border",
        "1px solid green",
        "important"
      );
      truthyChecker.classList.remove("d-none");
    } else {
      emailField.style.cssText = "border: 1px solid red";
      emailConditionsBox.style.setProperty(
        "border",
        "1px solid #dee2e6",
        "important"
      );
      truthyChecker.classList.add("d-none");
    }
  }
  for (let i = 0; i < Object.keys(allCheckBoxes).length; i++) {
    if (!allCheckBoxes[i].hasAttribute("checked")) {
      notCheckedInputs.push(allCheckBoxes[i]);
    }
  }

  if (notCheckedInputs.length !== 0) {
    btn.style.setProperty("background-color", "#e85f51", "important");
    btn.setAttribute("disabled", "");
  } else {
    btn.style.setProperty("background-color", "green", "important");
    btn.removeAttribute("disabled");
  }
};
export const emailShow = () => {
  let emailConditionsBox = document.querySelector(".emailConditionsBox");
  emailConditionsBox.classList.remove("d-none");
};
export const emailHide = () => {
  let emailConditionsBox = document.querySelector(".emailConditionsBox");
  emailConditionsBox.classList.add("d-none");
};

// --password field--
export const passwordValidate = () => {
  let passwordField = document.querySelector('[data-name|="password-field"]'),
    passwordConditionsBox = document.querySelector(".passwordConditionsBox"),
    checkboxes = document.querySelectorAll('[data-type="pass-checkbox"]'),
    btn = document.querySelector('[data-type|="submit"]'),
    allCheckBoxes = document.querySelectorAll('[data-class="form-checkbox"]'),
    checkboxLabel = document.querySelectorAll(
      '[data-name="checkbox-password-label"]'
    ),
    notCheckedInputs = [],
    // fullExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    regex = {
      0: /^.{8,15}$/, //  [8:15] length
      1: /(?=.*[A-Z])/, // 1<= uppercase
      2: /(?=.*[a-z])/, // 1<= lowercase
      3: /(?=.*[1-9])/, // 1<= number
    };
  for (let i = 0; i < Object.keys(regex).length; i++) {
    if (passwordField.value.match(regex[i])) {
      checkboxes[i].setAttribute("checked", "");
      checkboxes[i].classList.add("checkbox-info");
      checkboxLabel[i].style.cssText = "color: green";
    } else {
      checkboxes[i].removeAttribute("checked");
      checkboxes[i].classList.remove("checkbox-info");
      checkboxLabel[i].style.cssText = "color: red";
    }

    if (
      checkboxes[0].hasAttribute("checked") &&
      checkboxes[1].hasAttribute("checked") &&
      checkboxes[2].hasAttribute("checked") &&
      checkboxes[3].hasAttribute("checked") === true
    ) {
      passwordField.style.cssText = "border: 1px solid green";
      passwordConditionsBox.style.setProperty(
        "border",
        "1px solid green",
        "important"
      );
    } else {
      passwordField.style.cssText = "border: 1px solid red";
      passwordConditionsBox.style.setProperty(
        "border",
        "1px solid #dee2e6",
        "important"
      );
    }
  }
  for (let i = 0; i < Object.keys(allCheckBoxes).length; i++) {
    if (!allCheckBoxes[i].hasAttribute("checked")) {
      notCheckedInputs.push(allCheckBoxes[i]);
    }
  }

  if (notCheckedInputs.length !== 0) {
    btn.style.setProperty("background-color", "#e85f51", "important");
    btn.setAttribute("disabled", "");
  } else {
    btn.style.setProperty("background-color", "green", "important");
    btn.removeAttribute("disabled");
  }
};
export const passwordShow = () => {
  let passwordConditionsBox = document.querySelector(".passwordConditionsBox");
  passwordConditionsBox.classList.remove("d-none");
};
export const passwordHide = () => {
  let passwordConditionsBox = document.querySelector(".passwordConditionsBox");
  passwordConditionsBox.classList.add("d-none");
};

// ## app ## //
// --app/navbar--
export const toggleAsideMenu = (e) => {
  let Aside = document.querySelector(".aside");
  Aside.classList.add("smooth-fast");
  Aside.classList.toggle("w-0");
  
};
export const searchFocusing = (e) => {
  let siblings = e.target.nextSibling.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.contains("d-none")
      ? siblings[i].classList.remove("d-none")
      : siblings[i].classList.add("d-none");
  }
  // e.target.value = "";
  e.target.parentNode.style.cssText = "width: 400px !important";
};
export const searchBluring = (e) => {
  let siblings = e.target.nextSibling.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.contains("d-none")
      ? siblings[i].classList.remove("d-none")
      : siblings[i].classList.add("d-none");
  }
  // e.target.value = "Search";
  e.target.parentNode.style.cssText = "width: 170px !important";
};
// adding task through plus icon
export const plusIcon = (e) => {
  e.preventDefault();
  let addTaskContainer = document.querySelector(
    ".inbox-list-box .add-task-with-plus-btn"
  );
  // window.history.replaceState(null,null,'app/today');
  addTaskContainer.click();
};
// Notification
export const notifyBody = (e) => {
  let notifyBody = document.querySelector(".notify-body");
  notifyBody.classList.toggle("d-none");
  notifyBody.style.left = `${
    e.clientX - notifyBody.getBoundingClientRect().width
  }px`;
};
export const notifiyLength = (e) => {
  let notifyBody = document.querySelector(".notify-body");
  e.currentTarget.setAttribute(
    "data-hint",
    `${notifyBody.children[1].children.length} Notify`
  );
};
export const markNotifyAsRead = (e) => {
  e.currentTarget.classList.toggle("fade");
};
// task progression
export const taskProgression = (e) => {
  let progression = document.querySelector(".task-progression");
  progression.classList.toggle("d-none");
  progression.style.left = `${
    e.clientX - progression.getBoundingClientRect().width
  }px`;
};

// --app/body--
// app/body/aside

// Context Menues
export const ContextMenu = (e) => {
  let contextMenues = document.querySelectorAll(".contextMenu"),
    // Additions for contextMenuMainInbox menu
    newFeature = document.createElement("span"),
    shortcutIcon = document.createElement("span"),
    scheduleSection = document.querySelector(".scheduleSection");
  newFeature.innerHTML = "New";
  shortcutIcon.innerHTML = `<kbd style='padding: 2px;background: #363636'>⇧</kbd> <kbd style='padding: 2px;background: #363636'>V</kbd>`;
  newFeature.style.cssText = `color: #2de95f;
    background: rgba(37, 184, 76, 0.1);
    padding: 0 4px;
    font-size: 12px;
    border-radius: 3px;`;

  for (let menu of contextMenues) {
    if (e.currentTarget.id === menu.getAttribute("data-id")) {
      menu.classList.toggle("d-none");
      menu.style.left = e.clientX - menu.getBoundingClientRect().width + "px";
      menu.style.top = e.clientY - 20 + "px";

      if (
        window.innerHeight - e.clientY <=
        menu.getBoundingClientRect().height
      ) {
        console.log("narrow");
        // menu.style.top = 'unset';
        // menu.style.bottom =0 + menu.getBoundingClientRect().height + "px";
      }
      if (menu.id === "contextMenuMainInbox") {
        menu.firstChild.firstChild.firstChild.firstChild.append(newFeature);
        menu.firstChild.firstChild.firstChild.append(shortcutIcon);
      }
      if (menu.id === "contextMenuForTask") {
        menu.firstChild.children[2].after(scheduleSection);
        scheduleSection.classList.remove("d-none");
      }
    }
  }
};

// contextMenues functions

export const addTaskAbove = (e) => {
  console.log("add task above");
};
export const addTaskBelow = (e) => {
  const addTaskPopup = document.querySelector(".add-new-task");

  addTaskPopup.parentElement.classList.toggle("d-none");

  addTaskPopup.parentElement.classList.toggle("w-100");
  addTaskPopup.firstChild.focus();
};
// End
export const DetailsHandling = (e) => {
  let details = e.currentTarget,
    detailsArrow = e.currentTarget.firstChild.firstChild.firstChild;
  setTimeout(() => {
    details.hasAttribute("open")
      ? detailsArrow.classList.add("rotate-90", "smooth-fast")
      : detailsArrow.classList.remove("rotate-90");
  }, 0);
};

// app/body/aside/Filter pane
export const FiltersPopUp = () => {
  const filtersPopUp = document.querySelector(".filtersPopUp"),
    appMain = document.querySelector('[data-name="App-main"]'),
    appAside = document.querySelector('[data-name="App-aside"]');
  // filtersPopUp.classList.remove("d-none");
  filtersPopUp.classList.remove("visually-hidden");
  appMain.classList.add("foggy");
  appAside.classList.add("foggy");
};
export const filterPopupCancel = () => {
  const filterPopUp = document.querySelector(".filtersPopUp"),
    appMain = document.querySelector('[data-name="App-main"]'),
    appAside = document.querySelector('[data-name="App-aside"]');
  filterPopUp.classList.add("visually-hidden");
  appMain.classList.remove("foggy");
  appAside.classList.remove("foggy");
};
export const filterPopupAdd = () => {
  const filterName = document.querySelector("#filterName"),
    addfilterBtn = document.querySelector("[data-name='add-filter-btn']");
  filterName.value.length !== 0
    ? addfilterBtn.removeAttribute("disabled")
    : addfilterBtn.setAttribute("disabled", "");
};

// app/body/aside/Label pane
export const LabelsPopUp = () => {
  const labelsPopUp = document.querySelector(".labelsPopUp"),
    appMain = document.querySelector('[data-name="App-main"]'),
    appAside = document.querySelector('[data-name="App-aside"]');
  labelsPopUp.classList.remove("visually-hidden");
  appMain.classList.add("foggy");
  appAside.classList.add("foggy");
};
export const labelPopupCancel = () => {
  const labelPopUp = document.querySelector(".labelsPopUp"),
    appMain = document.querySelector('[data-name="App-main"]'),
    appAside = document.querySelector('[data-name="App-aside"]');
  labelPopUp.classList.add("visually-hidden");
  appMain.classList.remove("foggy");
  appAside.classList.remove("foggy");
};
export const labelPopupAdd = () => {
  const labelName = document.querySelector("#labelName"),
    addlabelBtn = document.querySelector("[data-name='add-label-btn']");
  labelName.value.length !== 0
    ? addlabelBtn.removeAttribute("disabled")
    : addlabelBtn.setAttribute("disabled", "");
};

// app/body/aside/Project pane
export const ProjectsPopUp = () => {
  const projectsPopUp = document.querySelector(".projectsPopUp"),
    appMain = document.querySelector('[data-name="App-main"]'),
    appAside = document.querySelector('[data-name="App-aside"]');
  projectsPopUp.classList.remove("visually-hidden");
  appMain.classList.add("foggy");
  appAside.classList.add("foggy");
};
export const projectPopupCancel = () => {
  const projectsPopUp = document.querySelector(".projectsPopUp"),
    appMain = document.querySelector('[data-name="App-main"]'),
    appAside = document.querySelector('[data-name="App-aside"]');
  projectsPopUp.classList.add("visually-hidden");
  appMain.classList.remove("foggy");
  appAside.classList.remove("foggy");
};
export const projectPopupAdd = () => {
  const projectName = document.querySelector("#projectName"),
    addProjectBtn = document.querySelector("[data-name='add-project-btn']");
  projectName.value.length !== 0
    ? addProjectBtn.removeAttribute("disabled")
    : addProjectBtn.setAttribute("disabled", "");
};
export const projectActivateGroup = (e) => {
  const items = document.querySelectorAll('[data-label="group-item"]');
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("labelHoverEffect");
  }
  e.target.parentNode.classList.add("labelHoverEffect");
};

// Draggable function

export const makeMeDraggable = (e) => {
  const dragIcon = e.currentTarget,
    draggedElement = dragIcon.parentNode.parentNode,
    draggedElementSiblings = draggedElement.parentNode.children;
  // shadow effect says that the element is ready to dragged
  dragIcon.addEventListener("mousemove", () => {
    draggedElement.style.cssText = `box-shadow: 0px 0px 6px #141414`;
  });
  dragIcon.addEventListener("mouseleave", () => {
    draggedElement.style.cssText = `box-shadow: 0px`;
  });

  draggedElement.setAttribute("draggable", "true");
  // drag functions
  draggedElement.addEventListener("dragstart", dragStart);
  draggedElement.addEventListener("dragend", dragEnd);
  function dragStart() {
    draggedElement.classList.add("fade");
  }
  function dragEnd() {
    draggedElement.classList.remove("fade");
    // draggedElement.style.cssText='box-shadow: none'
  }
  for (const sibling of draggedElementSiblings) {
    sibling.addEventListener("dragover", dragOver);
    sibling.addEventListener("dragenter", dragEnter);
    sibling.addEventListener("dragleave", dragLeave);
    sibling.addEventListener("drop", drop);
    function dragEnter(e) {
      e.preventDefault();
      sibling.classList.add("fade");
    }
    function dragOver(e) {
      e.preventDefault();
      sibling.classList.add("fade");
    }
    function dragLeave() {
      sibling.classList.remove("fade");
      // sibling.style.cssText = "box-shadow: none";
    }
    function drop(e) {
      sibling.after(draggedElement);
      sibling.classList.remove("fade");
    }
  }
};

export const makeMeUnDraggable = (e) => {
  e.currentTarget.parentNode.parentNode.removeAttribute("draggable");
};
// app/body/main

export const expandTask = (e) => {
  e.stopPropagation();
  e.currentTarget.classList.add("new-added-task-expanded");
  e.currentTarget.classList.remove("cursor-pointer");

};  

// enable user to edit tasks
export const editTask = (e)=>{
  let taskName= e.currentTarget.parentElement.previousSibling.lastChild.children[1],
  taskDescription = e.currentTarget.parentElement.previousSibling.lastChild.children[2].lastChild;
  taskName.setAttribute('contentEditable','true')
  taskDescription.setAttribute('contentEditable','true')
  taskName.classList.add('cursor-text')
  taskDescription.classList.add('cursor-text')
}
// add comment to the task
export const taskComment=(e)=>{
  let taskComment = e.currentTarget.nextSibling;
    taskComment.classList.toggle('d-none');
  // taskComment.setAttribute('contentEditable','true')
  
}
export const closeExpandedTask = (e)=>{
  e.stopPropagation()
  e.currentTarget.parentElement.parentElement.classList.remove('new-added-task-expanded')
}

export const addTask = (e) => {
  let addTaskPopup = e.currentTarget.nextSibling;
  addTaskPopup.classList.toggle("d-none");
  addTaskPopup.firstChild.firstChild.focus();
};
export const addTaskBtn = (e) => {
  let addTaskBtn = e.currentTarget.parentElement.nextSibling.firstChild,
    taskInput = e.target.value;
  if (taskInput.length !== 0 && taskInput !== ' ') {
    addTaskBtn.classList.remove("disabled", "cursor-no-drop");
    addTaskBtn.removeAttribute("disabled");
  } else {
    addTaskBtn.setAttribute("disabled", "");
    addTaskBtn.classList.add("disabled", "cursor-no-drop");
  }
  // pick a random placeholder
  addTaskBtn.addEventListener("click", (e) => {
    let suggestions = [
        "eg., Get pastries sun at 9 #Family",
        "Start the Day With a Glass of Lemon Water...",
        "Exercise in the Morning...",
        "Eat a Good Breakfast...",
        "Get a Healthy Lunch.",
        "Go to Gym",
        "Do Some Mid-Afternoon Stretches...",
        "Take Time to Relax...",
      ],
      taskInput = e.currentTarget.parentElement.previousSibling.firstChild;
    taskInput.setAttribute(
      "placeholder",
      suggestions[Math.trunc(Math.random() * suggestions.length)]
    );
    taskInput.value = "";
    addTaskBtn.setAttribute("disabled", "");
    addTaskBtn.classList.add("disabled", "cursor-no-drop");
  });
};

export const cancelTastBtn = (e) => {
  e.currentTarget.parentNode.parentElement.classList.add("d-none");
};

export const deletionConfirmationMsg = (e) => {
  // handle close btn
  e.currentTarget.parentNode.parentNode.classList.add("fade");
  // return the deleted task
};

// Tooltips
window.addEventListener("mouseover", () => {
  let hint = document.querySelector(".hint"),
    ele = document.querySelectorAll(".showHint");
  for (let i = 0; i < ele.length; i++) {
    ele[i].onmousemove = (e) => {
      hint.classList.remove("d-none");
      hint.style.left = `${e.pageX + 5}px`;
      hint.style.top = `${
        e.clientY - hint.getBoundingClientRect().height + 50
      }px`;
      hint.textContent = e.currentTarget.getAttribute("data-hint");
    };
    ele[i].onmouseleave = () => {
      hint.classList.add("d-none");
    };
  }
});




// ------------------------------------Flat calender start-------------------------------//

// #1 toggle flatCalender appearance
export const flatCalender = (e) => {
  let flatCalender = document.querySelector(".flat-calender");
  flatCalender.classList.toggle("d-none");
};

// #2 dayHead first state => show day date and it's tasks when hover above it
export const daysHeadsFirstState = (e) => {
  let dayHead = document.querySelector(".day-head"),
    currentDateWrapper = document.querySelector(".current-date"),
    unCompletedTasksLength = document.querySelectorAll(
      ".unCompletedTasksLength"
    );
  dayHead.innerHTML = `<span class='text-gold'>${e.currentTarget.textContent} ${currentDateWrapper.textContent}</span><span class='text-secondary bg-darkApp-navbar rounded px-1'>${unCompletedTasksLength.length} tasks</span>`;
};

// #3 dayHead second state => show first char in each day on hover away the flat calender body
export const daysHeadsSecondState = (e) => {
  let dayHead = document.querySelector(".day-head"),
    heads = ["F", "S", "S", "M", "T", "W", "T"];
  dayHead.innerHTML = "";
  heads.forEach((head) => {
    let headNode = document.createElement("span");
    headNode.textContent = head;
    headNode.classList.add("text-center");
    headNode.style.width = `calc(100% / 9)`;
    dayHead.append(headNode);
  });
};

// #4 add flash effect on switching buttons
export const flashEffect = (e) => {
  let flatCalender = document.querySelector(".flat-calender");
  flatCalender.classList.add("flash-effect");
  setTimeout(() => {
    flatCalender.classList.remove("flash-effect");
  }, 150);
};
// -----------------------------Flat calender end----------------------------------//

// -----------------------------upcoming main state calender start----------------------------------//

// #1 adding some css styles to each day on clicking into it
export const dayFocus = (e) => {
  let days = document.querySelectorAll(".day"),
    taskDayDate = document.querySelectorAll(".future-task-date");
  days.forEach((day) => {
    day.classList.remove("border-white", "border-semiRed", "shadow"); // remove classes from both current day and any other day
    day.style.removeProperty("background");
  });
  e.currentTarget.classList.add("border-white");
  e.currentTarget.style.setProperty("background", "#9f9f9f1f");

  taskDayDate.forEach((day) => {
    day.parentElement.classList.add("foggy");
    day.parentElement.classList.remove("border-secondary-200", "border");
    // day.classList.remove('bg-darkApp-navbar','shadow')
    day.classList.remove("text-semiRed");
    day.classList.add("text-secondary-200");
    if (day.innerHTML === e.currentTarget.lastChild.getAttribute("id")) {
      day.scrollIntoView({ block: "center", behavior: "smooth" });
      day.parentElement.classList.remove("foggy");
      day.parentElement.classList.add("border-secondary-200", "border");
      // day.classList.add('bg-darkApp-navbar','shadow')
      day.classList.remove("text-secondary-200");
      day.classList.add("text-semiRed");
    }
  });
};

