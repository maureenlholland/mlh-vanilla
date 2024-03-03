// conditionally run if dialog is supported

// on load, set theme from local storage if it exists
const storedTheme = localStorage.getItem("garden-bird-theme");
if (storedTheme) {
  document.body.setAttribute("data-theme", storedTheme);
}

// add dialog open/close events
const dialog = document.getElementById("garden-bird-themes__dialog");

document
  .getElementById("garden-bird-themes__dialog-open-button")
  .addEventListener("click", () => {
    dialog.showModal();
  });

document
  .getElementById("garden-bird-themes__dialog-close-button")
  .addEventListener("click", () => {
    dialog.close();
  });

// on theme selection, update local storage and data-theme attribute
dialog.querySelector('input[type="submit"]').addEventListener("click", (e) => {
  const checkedTheme = e.target.form.querySelector(
    "input[name='theme']:checked"
  ).value;
  localStorage.setItem("garden-bird-theme", checkedTheme);
  // is there a way to add event listener to local storage? item inserted/updated?
  // create custom event? https://stackoverflow.com/questions/26974084/listen-for-changes-with-localstorage-on-the-same-window
  document.body.setAttribute("data-theme", checkedTheme);
});
