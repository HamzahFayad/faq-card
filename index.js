{
  ("use strict");

  console.log("hi");

  let questions = document.querySelectorAll(".question");
  let answers = document.querySelectorAll(".answer");
  let arrow = document.querySelectorAll(".arrow");

  questions.forEach(function (el, i) {
    el.addEventListener("click", () => {
      el.classList.toggle("openedQ");
      answers[i].classList.toggle("openedA");
      arrow[i].classList.toggle("openedIcon");

      questions.forEach(function (qu, q) {
        if (i !== q) {
          qu.classList.remove("openedQ");
          answers[q].classList.remove("openedA");
          arrow[q].classList.remove("openedIcon");
        }
      });
    });
  });

  //   for (let i = 0; i < questions.length; i++) {
  //     questions[i].addEventListener("click", () => {
  //       questions[i].classList.add("openedQ");
  //       arrow[i].classList.add("openedIcon");
  //       console.log("clicked", i);
  //     });
  //   }
}

// inf.addEventListener("click", (e) => {
//   for (let i = 0; i < infLink.length; i++) {
//     infLink[i].classList.remove("active");
//     e.target.classList.add("active");
//   }
// });
