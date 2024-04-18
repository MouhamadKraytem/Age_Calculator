let inp = document.getElementById("date");

let but = document.querySelector("button");

but.addEventListener("click", () => {
  let bDate = new Date(inp.value);

  let d1 = bDate.getDay();
  let m1 = bDate.getMonth();
  let y1 = bDate.getFullYear();


  let today = new Date();

  let d2 = today.getDay();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  let d3,m3,y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 -d1;
  } else {
    m3--;
    d3 = getDayInMonth(y1 , m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3 --;
  }
  console.log(y3 , m3 , d3);
})

function getDayInMonth(year ,month) {
  return new Date(year , month , 0).getDate();
}
