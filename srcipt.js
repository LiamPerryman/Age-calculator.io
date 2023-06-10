"user-strict";
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
// Shows current time //
const date = new Date();
let currentYear = date.getUTCFullYear();
let currentMonth = date.getUTCMonth();
let currentDay = date.getUTCDate();

const birthYearEl = document.querySelector(`.birth-year`);
const birthMonthEl = document.querySelector(`.birth-month`);
const birthDayEl = document.querySelector(`.birth-day`);

// FOR ADDING INVALID COLOR IN //
const headerColorRemover = function (name) {
  document.querySelector(`.` + name + `-header`).classList.remove(`hcolor`);
};
const headerColorAdder = function (name) {
  document
    .querySelector(`.` + name + `-header`)
    .classList.add(`invalid-header`);
};

// FOR ADDING ORIGINAL COLOR BACK //
const addBack = function (name) {
  document.querySelector(`.` + name + `-header`).classList.add(`hcolor`);
};
const removeFrom = function (name) {
  document
    .querySelector(`.` + name + `-header`)
    .classList.remove(`invalid-header`);
};
// for a invalid input //
const invalid = document.querySelectorAll(`.invalid`);
// for birth year input //
let birthYear = ``;
let birthMonth = ``;
let birthDay = ``;

// Function for input //
document.querySelector(`.btn`).addEventListener(`click`, function () {
  birthYear = birthYearEl.value;

  // FOR YEAR INPUT //
  if (birthYear >= 1900 && birthYear <= currentYear) {
    document.querySelector(`.years-output`).textContent =
      currentYear - birthYear;
    invalid[2].classList.add(`hidden`);
    birthYearEl.classList.remove(`invalid-outline`);
    addBack(`year`);
    removeFrom(`year`);
  } else if ((birthYear > 1 && birthYear < 1900) || birthYear > currentYear) {
    invalid[2].textContent = `Bro you were not alive`;
    invalid[2].classList.remove(`hidden`);
    console.log(birthYearEl.value);
    birthYearEl.classList.add(`invalid-outline`);
    headerColorAdder(`year`);
    headerColorRemover(`year`);
    console.log(birthYearEl);
  } else if (!birthYearEl.value) {
    invalid[2].classList.remove(`hidden`);
    birthYearEl.classList.add(`invalid-outline`);
    headerColorAdder(`year`);
    headerColorRemover(`year`);
  }
});
document.querySelector(`.btn`).addEventListener(`click`, function () {
  birthMonth = birthMonthEl.value;

  // FOR MONTH INPUT //
  if (birthMonth >= 1 && birthMonth <= 12) {
    document.querySelector(`.months-output`).textContent =
      currentMonth > birthMonth
        ? currentMonth - birthMonth
        : birthMonth - currentMonth;
    invalid[1].classList.add(`hidden`);
    birthMonthEl.classList.remove(`invalid-outline`);
    addBack(`month`);
    removeFrom(`month`);
  } else if (birthMonth > 12) {
    invalid[1].textContent = `Bro thats not a month`;
    invalid[1].classList.remove(`hidden`);
    birthMonthEl.classList.add(`invalid-outline`);
    document.querySelector(`.month-header`).classList.add(`invalid-header`);
    headerColorRemover(`month`);
  } else if (birthMonth < 1) {
    invalid[1].classList.remove(`hidden`);
    birthMonthEl.classList.add(`invalid-outline`);
    headerColorAdder(`month`);
    headerColorRemover(`month`);
  }
});
document.querySelector(`.btn`).addEventListener(`click`, function () {
  birthDay = birthDayEl.value;

  // FOR DAY INPUT //
  if (birthDay >= 1 && birthDay <= 31) {
    document.querySelector(`.days-output`).textContent =
      currentDay > birthDay ? currentDay - birthDay : birthDay - currentDay;
    invalid[0].classList.add(`hidden`);
    birthDayEl.classList.remove(`invalid-outline`);
    removeFrom(`day`);
    addBack(`day`);
  } else if (birthDay > 31) {
    invalid[0].textContent = `Bro thats not a Day`;
    invalid[0].classList.remove(`hidden`);
    birthMonthEl.classList.add(`invalid-outline`);
    headerColorAdder(`day`);
    headerColorRemover(`day`);
  } else if (birthMonth < 1) {
    invalid[0].classList.remove(`hidden`);
    birthDayEl.classList.add(`invalid-outline`);
    headerColorAdder(`day`);
    headerColorRemover(`day`);
  }
});
// FOR ENTER KEYPRESS //
document.addEventListener(`keypress`, function (Event) {
  if (Event.key === `Enter`) {
    birthDay = birthDayEl.value;
    birthMonth = birthMonthEl.value;
    birthYear = birthYearEl.value;
    if (birthYear >= 1900 && birthYear <= currentYear) {
      document.querySelector(`.years-output`).textContent =
        currentYear - birthYear;
      invalid[2].classList.add(`hidden`);
      birthYearEl.classList.remove(`invalid-outline`);
      addBack(`year`);
      removeFrom(`year`);
    } else if ((birthYear > 1 && birthYear < 1900) || birthYear > currentYear) {
      invalid[2].textContent = `Bro you were not alive`;
      invalid[2].classList.remove(`hidden`);
      console.log(birthYearEl.value);
      birthYearEl.classList.add(`invalid-outline`);
      headerColorAdder(`year`);
      headerColorRemover(`year`);
      console.log(birthYearEl);
    } else if (!birthYearEl.value) {
      invalid[2].classList.remove(`hidden`);
      birthYearEl.classList.add(`invalid-outline`);
      headerColorAdder(`year`);
      headerColorRemover(`year`);
    }

    // FOR MONTH INPUT //
    if (birthMonth >= 1 && birthMonth <= 12) {
      document.querySelector(`.months-output`).textContent =
        currentMonth > birthMonth
          ? currentMonth - birthMonth
          : birthMonth - currentMonth;
      invalid[1].classList.add(`hidden`);
      birthMonthEl.classList.remove(`invalid-outline`);
      addBack(`month`);
      removeFrom(`month`);
    } else if (birthMonth > 12) {
      invalid[1].textContent = `Bro thats not a month`;
      invalid[1].classList.remove(`hidden`);
      birthMonthEl.classList.add(`invalid-outline`);
      document.querySelector(`.month-header`).classList.add(`invalid-header`);
      headerColorRemover(`month`);
    } else if (birthMonth < 1) {
      invalid[1].classList.remove(`hidden`);
      birthMonthEl.classList.add(`invalid-outline`);
      headerColorAdder(`month`);
      headerColorRemover(`month`);
    }

    // FOR DAY INPUT //
    if (birthDay >= 1 && birthDay <= 31) {
      document.querySelector(`.days-output`).textContent =
        currentDay > birthDay ? currentDay - birthDay : birthDay - currentDay;
      invalid[0].classList.add(`hidden`);
      birthDayEl.classList.remove(`invalid-outline`);
      removeFrom(`day`);
      addBack(`day`);
    } else if (birthDay > 31) {
      invalid[0].textContent = `Bro thats not a Day`;
      invalid[0].classList.remove(`hidden`);
      birthMonthEl.classList.add(`invalid-outline`);
      headerColorAdder(`day`);
      headerColorRemover(`day`);
    } else if (birthMonth < 1) {
      invalid[0].classList.remove(`hidden`);
      birthDayEl.classList.add(`invalid-outline`);
      headerColorAdder(`day`);
      headerColorRemover(`day`);
    }
  }
});
// cursor //
const cursor = document.querySelector(`.cursor`);

document.addEventListener(`mousemove`, function (e) {
  cursor.style.top = e.clientY + `px`;
  cursor.style.left = e.clientX + `px`;
});
const cursorBig = document.querySelector(`.cursor-big`);

document.addEventListener(`mousemove`, function (e) {
  cursorBig.style.top = e.clientY + `px`;
  cursorBig.style.left = e.clientX + `px`;
});

console.log(document.querySelector(`.` + `month` + `-header`));
