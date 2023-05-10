// LIGHT AND DARK MODE

const sunNight = document.querySelector(".day-night");

sunNight.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    sunNight.querySelector(".sun");
    document.querySelector(".sun").style.display = "block";
    document.querySelector(".moon").style.display = "none";
  } else {
    sunNight.querySelector(".moon");
    document.querySelector(".moon").style.display = "block";
    document.querySelector(".sun").style.display = "none";
  }
};

// FIN LIGHT AND DARK MODE

// START LEFT 

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
    if (window.innerWidth < 1000) {
      leftSectionTogglerBtn();
    }
  })
};

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
};

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
};

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
};

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
  left = document.querySelector(".left");
navTogglerBtn.addEventListener("click", () => {
  leftSectionTogglerBtn();
})
function leftSectionTogglerBtn() {
  left.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
};


// FIN LEFT

// FUNCTION FORMULAIRE

const nameEl = document.querySelector("#name");
const fornameEl = document.querySelector("#forname");
const emailEl = document.querySelector("#email");
const sujetEl = document.querySelector("#sujet");
const messageEl = document.querySelector("#message");
const formEl = document.querySelector("#form");


// CHECK NAME
const checkName = () => {
  let valid = false;

  let min = 2, max = 20;

  const name = nameEl.value.trim();

  if (!isRequired(name)) {
    showError(nameEl, "Le nom doit être rempli");
  } else if (!isBetween(name.length, min, max)) {
    showError(nameEl, `Le nom doit contenir entre ${min} et ${max} caractères.`);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};
// FIN CHECK NAME

// CHECK FORNAME
const checkForName = () => {
  let valid = false;

  let min = 2, max = 20;

  const forname = fornameEl.value.trim();

  if (!isRequired(forname)) {
    showError(fornameEl, "Le nom doit être rempli");
  } else if (!isBetween(forname.length, min, max)) {
    showError(fornameEl, `Le nom doit contenir entre ${min} et ${max} caractères.`);
  } else {
    showSuccess(fornameEl);
    valid = true;
  }
  return valid;
};
// FIN CHECK FORNAME

// CHECK EMAIL
const checkEmail = () => {
  let valid = false;

  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, "Email non valide");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email non valide");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// FIN CHECK EMAIL

// CHECK SUJET
const checkSujet = () => {
  let valid = false;

  let min = 2, max = 25;

  const sujet = sujetEl.value.trim();

  if (!isRequired(sujet)) {
    showError(sujetEl, "Le titre de votre demande doit être rempli");
  } else if (!isBetween(sujet.length, min, max)) {
    showError(sujetEl, `Le titre doit contenir entre ${min} et ${max} caractères.`);
  } else {
    showSuccess(sujetEl);
    valid = true;
  }
  return valid;
};
// FIN CHECK SUJET

// CHECK MESSAGE
const checkMessage = () => {
  let valid = false;

  let min = 2, max = 250;

  const message = messageEl.value.trim();

  if (!isRequired(message)) {
    showError(messageEl, "Votre message doit être rempli");
  } else if (!isBetween(message.length, min, max)) {
    showError(messageEl, `Votre message doit contenir entre ${min} et ${max} caractères.`);
  } else {
    showSuccess(messageEl);
    valid = true;
  }
  return valid;
};
// FIN CHECK MESSAGE

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  // Récupération de l'élément parent de formulaire
  const info = input.parentElement;
  // ajout de la classe error
  info.classList.remove("success");
  info.classList.add("error");

  // voir le message d'erreur dans la balise 
  const error = info.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // Récupération de l'élément parent de formulaire
  const info = input.parentElement;

  // supprimer la classe error
  info.classList.remove("error");
  info.classList.add("success");

  // cacher le message d'erreur dans la balise small
  const error = info.querySelector("small");
  error.textContent = "";
};


const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // validation des champs

  let isNameValid = checkName(),
    isFornameValid = checkForName(),
    isEmailValid = checkEmail(),
    isSujetValid = checkSujet(),
    isMessageValid = checkMessage();

  let isFormValid = isNameValid && isFornameValid && isEmailValid && isSujetValid && isMessageValid;

  if (isFormValid) {
    console.log(formEl);
  };
});

formEl.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "#name":
        checkName();
        break;
      case "#forname":
        checkForName();
        break;
      case "#email":
        checkEmail();
        break;
      case "#sujet":
        checkSujet();
        break;
      case "#message":
        checkMessage();
        break;
    }
  })
);

// FIN FORMULAIRE