let EmptyError = document.querySelectorAll('.ErrorEmpty')
function CheckDate() {
  let Day = document.querySelector('#Day')
  let Month = document.querySelector('#Month')
  let Year = document.querySelector('#Year')
  let DateContainer = document.querySelectorAll('.Date');

  if (!Day.value && !Month.value && !Year.value) {
    Day.style.border = '1px solid red'
    Month.style.border = '1px solid red'
    Year.style.border = '1px solid red'
    DateContainer.forEach((items) => items.style.color = 'red')
    EmptyError.forEach(items => items.style.display = 'block')
  } else {
    let DayCount = document.querySelector('#DayCount');
    let MonthCount = document.querySelector('#MonthCount')
    let YearCount = document.querySelector('#YearCount')
    let YourDay = Day.value
    let YourMonth = Month.value
    let YourYear = Year.value

    let date = new Date();
    let CurrDay = date.getDate();
    let CurrMonth = date.getMonth() + 1;
    let CurrYear = date.getFullYear();

    let ageYear = CurrYear - YourYear;
    let ageMonth = CurrMonth - YourMonth;
    let ageDay = CurrDay - YourDay;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }
    if (ageDay < 0) {
      ageDay += new Date(CurrYear, CurrMonth, 0).getDate();
    }

    // Display the calculated age
    YearCount.innerHTML = ageYear;
    MonthCount.innerHTML = ageMonth;
    DayCount.innerHTML = ageDay;

    Day.value = ''
    Month.value = ''
    Year.value = ''
  }
}

let ErrorDay = document.querySelector('#ErrorDay')
let ErrorMonth = document.querySelector('#ErrorMonth')
let ErrorYear = document.querySelector('#ErrorYear')

let DaySpan = document.querySelector('#DaySpan')
let MonthSpan = document.querySelector('#MonthSpan')
let YearSpan = document.querySelector('#YearSpan')

function DayInput() {
  EmptyError.forEach(items => items.style.display = 'none')
  let Day = document.querySelector('#Day')
  if (Day.value > 31) {
    Day.style.border = '2px solid red';
    ErrorDay.style.display = 'block'
    DaySpan.style.color = 'red'
  } else {
    ErrorDay.style.display = 'none'
    DaySpan.style.color = 'black'
    Day.style.border = '1px solid black'
  }
}
function MonthInput() {
  EmptyError.forEach(items => items.style.display = 'none')
  let Month = document.querySelector('#Month')
  if (Month.value > 12) {
    ErrorMonth.style.display = 'block';
    Month.style.border = '2px solid red';
    MonthSpan.style.color = 'red'
  } else {
    ErrorMonth.style.display = 'none'
    Month.style.border = '1px solid black'
    MonthSpan.style.color = 'black'
  }
}
function YearInput() {
  EmptyError.forEach(items => items.style.display = 'none')
  let Year = document.querySelector('#Year')
  let date = new Date();
  if (Year.value > date.getFullYear()) {
    ErrorYear.style.display = 'block';
    Year.style.border = '2px solid red';
    YearSpan.style.color = 'red'
  } else {
    ErrorYear.style.display = 'none'
    YearSpan.style.color = 'black'
    Year.style.border = '1px solid black'
  }
}