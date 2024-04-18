let inp = document.getElementById("date");

let but = document.querySelector("button");

but.addEventListener("click", () => {
  //get birth date from user
  let birthDate = new Date(inp.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  // initialize the current date
  let currentDate = new Date();

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let resDay , resMonth , resYear;

  resYear = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    resMonth = currentMonth - birthMonth;
  } else {
    resYear--;
    resMonth = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    resDay = currentDay - birthDay;
  } else {
    resMonth--;
    resDay = getDateInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  if (resMonth < 0) {
    resMonth = 11;
    resYear--;
  }

  //print result with handle null values logique error
  let days , months , years;
  let flag = 0;
  let result = "you have ";

  if (resYear > 0) {
    let y = "year"
    if (resYear > 1) {
      y += "s";
    }
    years = `<span>${resYear} ${y} </span> `;
    result += years;
    flag = 1;
  }

  if (resMonth > 0) {
    let m = "month"
    if (resMonth > 1) {
      m += "s";
    }
    if (flag === 1) {
      months = ` and <span> ${resMonth} ${m} </span>`;
      result += months;
    }
    else
    {
      months = ` <span> ${resMonth} ${m} </span>`;
      result += months;
    }
    flag = 1
  }

  if (resDay > 0) {
    let d = "day"
    if (resDay > 1) {
      d += "s";
    }
    if (flag === 1) {
      days = `and <span> ${resDay} ${d} </span>`;
      result += days;
    }else{
      days = `<span> ${resDay} ${d} </span> `;
      result += days;
    }
    
  }
  if (resDay > 0 || resMonth > 0 || resYear) {
    document.getElementById("result").innerHTML = result;
    // console.log(currentDate , currentDay , currentMonth ,  currentYear);
    // console.log(resDay , resMonth , resYear);
  }
})

function getDateInMonth(year , month) {
  console.log(new Date(year, month, 0).getDate);
  return new Date(year , month , 0).getDate();
}


