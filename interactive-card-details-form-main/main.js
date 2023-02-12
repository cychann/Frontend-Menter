const nameInput = document.querySelector(".card_holder_name_input");
const numInput = document.querySelector(".card_num_input");
const expMonthInput = document.querySelector(".card_exp_date_month");
const expYearInput = document.querySelector(".card_exp_date_year");
const cvcInput = document.querySelector(".card_cvc_input");
const previewName = document.querySelector(".card_preview_name");
const previewNum = document.querySelector(".card_preview_num");
const previewMonth = document.querySelector(".card_preview_month");
const previewYear = document.querySelector(".card_preview_year");
const previewCvc = document.querySelector(".card_cvc_num");

const form = document.querySelector(".card_form");
const completed = document.querySelector(".completed_state");
const continueBtn = document.querySelector(".completed_continue");

const handleNameChange = () => {
  previewName.innerHTML = `${nameInput.value}`;
};

const handleNumChange = () => {
  if (numInput.value.length <= 19) {
    previewNum.innerHTML = `${numInput.value}`;
  }
  if (numInput.value === "") previewNum.innerHTML = "0000 0000 0000 0000";
};

const handleChangeMonth = () => {
  previewMonth.innerHTML = `${expMonthInput.value} /`;
};

const handleChangeYear = () => {
  previewYear.innerHTML = `${expYearInput.value}`;
};

const handleChangeCvc = () => {
  previewCvc.innerHTML = `${cvcInput.value}`;
};

const showError = (message, $target) => {
  $target.innerHTML = message;
};

const checkName = () => {
  let isVaild = true;

  const $target = document.querySelector(".name_error_message");

  if (!nameInput.value) {
    showError("Can't be blank", $target);
    isVaild = false;
  }

  if (nameInput.value.length > 25) {
    showError("Max Length is 25", $target);
    isVaild = false;
  }

  return isVaild;
};

const checkNumber = () => {
  let isVaild = true;

  const splitNum = numInput.value.split(" ");
  const errorMsg =
    "Wrong format, Please write in the following form `**** **** **** ****`";
  const $target = document.querySelector(".number_error_message");

  if (splitNum.length !== 4) {
    isVaild = false;
  }

  splitNum.forEach((num) => {
    if (num.length !== 4) {
      isVaild = false;
    }

    [...num].forEach((n) => {
      if (isNaN(+n)) isVaild = false;
    });
  });

  !isVaild && showError(errorMsg, $target);

  return isVaild;
};

const checkMonthAndYear = () => {
  let isVaild = true;
  const $target = document.querySelector(".date_error_message");
  const month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const date = new Date();
  const currYear = date.getFullYear().toString().slice(2);

  if (!expMonthInput.value || !expYearInput.value) {
    showError("Can't be blank", $target);
    isVaild = false;
  }

  if (expMonthInput.value.length !== 2 || expYearInput.value.length !== 2) {
    showError("Please enter a date format such as 09/24 or 12/31", $target);
    isVaild = false;
  }

  if (!month.includes(expMonthInput.value)) {
    showError("Not a valid month format", $target);
    isVaild = false;
  }

  if (+expYearInput.value <= currYear) {
    showError("Enter a number greater than the current year", $target);
    isVaild = false;
  }

  return isVaild;
};

const checkCvc = () => {
  let isVaild = true;
  const $target = document.querySelector(".cvc_error_message");
  if (!cvcInput.value) {
    showError("Can't be blank", $target);
    isVaild = false;
  }

  if (cvcInput.value.length !== 3) {
    showError("cvc number must be 3 digits", $target);
    isVaild = false;
  }

  return isVaild;
};

const checkVaildAll = () => {
  const isNameVaild = checkName();
  const isNumVaild = checkNumber();
  const isDateVaild = checkMonthAndYear();
  const isCvcVaild = checkCvc();

  if (isNameVaild && isNumVaild && isDateVaild && isCvcVaild) {
    completed.style.display = "flex";
    form.style.display = "none";
  }

  if (isNameVaild) document.querySelector(".name_error_message").innerHTML = "";
  if (isNumVaild)
    document.querySelector(".number_error_message").innerHTML = "";

  if (isDateVaild) document.querySelector(".date_error_message").innerHTML = "";

  if (isCvcVaild) document.querySelector(".cvc_error_message").innerHTML = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkVaildAll();
});

continueBtn.addEventListener("click", () => {
  form.style.display = "flex";
  completed.style.display = "none";

  previewName.innerHTML = "name";
  previewNum.innerHTML = "0000 0000 0000 0000";
  previewMonth.innerHTML = "00 /";
  previewYear.innerHTML = "00";
  previewCvc.innerHTML = "000";
  nameInput.value = "";
  numInput.value = "";
  expMonthInput.value = "";
  expYearInput.value = "";
  cvcInput.value = "";
});
