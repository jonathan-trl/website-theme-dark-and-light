const toggleInput = document.getElementById("toggle-input");
toggleInput.addEventListener("change", (e) => {
  const checked = e.target.checked;
  const elementsLight = Array.from(
    document.getElementsByClassName("theme-light")
  );
  const elementsDark = Array.from(
    document.getElementsByClassName("theme-dark")
  );
  if (checked) {
    elementsLight.forEach((element) => {
      element.classList.add("theme-dark");
      element.classList.remove("theme-light");
    });
  } else {
    elementsDark.forEach((element) => {
      element.classList.add("theme-light");
      element.classList.remove("theme-dark");
    });
  }
});
