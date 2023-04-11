(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector("#clear");
    let equals = document.querySelector("#equals");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
      });
    });
  
    clear.addEventListener("click", function (e) {
      screen.value = "";
    });
  
    equals.addEventListener("click", function () {
      let result = eval(screen.value);
      screen.value = result;
    });
  })();
  