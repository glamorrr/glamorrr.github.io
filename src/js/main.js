import "../scss/styles.scss";
import { Toast } from "bootstrap";

const main = () => {
  const successToast = new Toast(document.getElementById("liveToast"));
  const errorToast = new Toast(document.getElementById("errorToast"));

  document.querySelector(".contact__form").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputNameEl = e.target.name;
    const inputEmailEl = e.target.email;
    const inputMessageEl = e.target.message;
    if (inputNameEl.value && inputEmailEl.value && inputMessageEl.value) {
      successToast.show();
      inputNameEl.value = "";
      inputEmailEl.value = "";
      inputMessageEl.value = "";
    } else {
      errorToast.show();
    }
  });
};

main();
