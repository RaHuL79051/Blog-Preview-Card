let Days = document.querySelector('#Days')
let Hour = document.querySelector('#Hours')
let Minutes = document.querySelector('#Minutes')
let Second = document.querySelector('#Seconds')

console.log(Days, Hour, Minutes, Second);

function ChangeTime() {
  let TimeinSecond = Second.innerHTML;
  let TimeinMinutes = Minutes.innerHTML;
  let TimeinHour = Hour.innerHTML;
  let TimeinDays = Days.innerHTML;
  setInterval(() => {
    if (TimeinSecond <= 60 && TimeinSecond > 0) {
      TimeinSecond--;
      Second.innerHTML = TimeinSecond;
    } else {
      TimeinSecond = 60;
      Second.innerHTML = 60;
      --TimeinMinutes;
      Minutes.innerHTML = TimeinMinutes;
      if (TimeinMinutes === 0) {
        --TimeinHour;
        Hour.innerHTML = TimeinHour;
      }
      if (TimeinHour === 0) {
        TimeinHour = 24
        Hour.innerHTML = TimeinHour;
        --TimeinDays;
        Days.innerHTML = TimeinDays;
      }

      ChangeTime();
    }
  }, 1000)
}

ChangeTime();