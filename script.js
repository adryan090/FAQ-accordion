const questions = document.querySelectorAll(".question");
const minusPath = "assets/images/icon-minus.svg";
const plusPath = "assets/images/icon-plus.svg";

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.closest(".element").querySelector(".answer");
    const button = question.querySelector(".open-close-btn");
    openClose(answer, button);
  });
});

document.activeElement.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const answer = e.target.querySelector(".answer");
    const button = e.target.querySelector(".open-close-btn");
    openClose(answer, button);
  }
});

function openClose(answer, button) {
  if (answer.getAttribute("aria-hidden") === "true") {
    button.setAttribute("src", minusPath);
    answer.setAttribute("aria-hidden", false);
  } else {
    button.setAttribute("src", plusPath);
    answer.setAttribute("aria-hidden", true);
  }
}
