const divNumber = document.querySelectorAll(".number");
const textboxValue = document.getElementById(display);
const divEquall = document.querySelectorAll(".equal");
const divClear = document.querySelectorAll("#clear");
const divDelete = document.querySelectorAll("#del");

const divNumberArrey = [...divNumber];
// get id  and show when click on div

const divpress = (e) => {
  const divbtn = e.target.id;
  console.log(divbtn);
  display.value += divbtn;
};

for (let div of divNumber) {
  div.addEventListener("click", divpress);
}
// opration done after press =
const divpressEquall = (e) => {
  const divbtnEquall = e.target.id;
  console.log(divbtnEquall);
  display.value = eval(display.value);
};

for (let div of divEquall) {
  div.addEventListener("click", divpressEquall);
}

// clear data
const divpressClear = (e) => {
  const divbtnClear = e.target.id;
  console.log(divbtnClear);
  display.value = "";
};

for (let div of divClear) {
  div.addEventListener("click", divpressClear);
}
// delet number

const divpressDelete = (e) => {
    const divbtnDelete = e.target.id;
    console.log(divbtnDelete);
    let displayValu= display.value
    display.value = displayValu.substr(0, displayValu.length - 1);
  };
  
  for (let div of divDelete) {
    div.addEventListener("click", divpressDelete);
  }