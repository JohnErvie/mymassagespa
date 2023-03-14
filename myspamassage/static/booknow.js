const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

// FOR REQUIRED FORM BILLING INFO
const fullname = document.getElementById("fullname");
const address = document.getElementById("address");
const phonenumber = document.getElementById("phonenumber");
const email = document.getElementById("email");
const password = document.getElementById("password");

// FOR SCHED DATE FORM
const scheddate = document.getElementById("scheddate");
const time = document.getElementById("time");

// FOR SCHED DATE
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;

document.getElementById("scheddate").setAttribute("min", today);

//FOR TOTAL PAYMENT
if (document.getElementById("offersR1").checked) {
  document.getElementById("totalPayment").innerHTML = "Total Payment: €150";
} else if (document.getElementById("offersR2").checked) {
  document.getElementById("totalPayment").innerHTML = "Total Payment: €200";
} else if (document.getElementById("offersR3").checked) {
  document.getElementById("totalPayment").innerHTML = "Total Payment: €250";
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 0) {
      if (fullname.value === "" || fullname.value == null) {
      } else if (address.value === "" || address.value == null) {
      } else if (phonenumber.value === "" || phonenumber.value == null) {
      } else if (email.value === "" || email.value == null) {
      } else if (password.value === "" || password.value == null) {
      } else {
        //alert(formStepsNum);
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
      }
    } else if (formStepsNum == 1) {
      if (scheddate.value === "" || scheddate.value == null) {
      } else if (time.value === "" || time.value == null) {
      } else {
        //alert(formStepsNum);
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
      }
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

// FOR PAYPAL
function initPayPalButton() {
  paypal
    .Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "horizontal",
        label: "paypal",
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              description: "1 hour of massage for only €150",
              amount: { currency_code: "EUR", value: 1 },
            },
          ],
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          // Full available details
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2)
          );

          // Show a success message within this page, e.g.
          const element = document.getElementById("paypal-button-container");
          element.innerHTML = "";
          element.innerHTML = "<h3>Thank you for your payment!</h3>";

          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      },

      onError: function (err) {
        console.log(err);
      },
    })
    .render("#paypal-button-container");
}
initPayPalButton();

function payButton() {
  alert(
    "There is a problem with your card. \nPlease check or Pay using PayPal. \n\nThank You!"
  );
}
