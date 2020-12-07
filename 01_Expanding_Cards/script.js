const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeClassName("active");
    panel.classList.add("active");
  });
});

const removeClassName = (className) => {
  panels.forEach((panel) => {
    panel.classList.remove(className);
  });
};
