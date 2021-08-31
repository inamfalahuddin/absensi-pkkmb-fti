"use strict";

// Connect API Google Sheet
var scriptURL =
  "https://script.google.com/macros/s/AKfycbzB87q7d5j2jgXmNfQTxvUtlk3f0dmn7jCujZ-VnRdjMr_eKDC37Cg4jVYiG5bmcCRc/exec";
var form = document.forms["pkkmb-fti-absensi"];
const loadingBar = document.createElement("span");
loadingBar.classList.add("bg-bar");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("button").textContent = "Loading ...";

  document.querySelector("body").appendChild(loadingBar);

  var nama = document.querySelector("#nama").value;

  console.log(new FormData(form));

  console.log(new FormData());

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(function (response) {
      console.log(response.body);
      loadingBar.remove();

      if (window.matchMedia("(max-width: 480px)").matches) {
        document.querySelector(".card").style.height = "100vh";
      } else {
        document.querySelector(".card").style.height = "100%";
      }

      form.innerHTML =
        '\n      <div class="card-alert">\n      <h4>Hello, ' +
        nama +
        "</h4>\n      <h5>\n        Data anda berhasil kami terima. Terimakasih atas partisipasinya\n        dalam kegiatan PKKMB FTI 2021\n      </h5>\n    </div>";
    })
    .catch(function (error) {
      console.error("Error!", error.message);
      loadingBar.remove();

      form.innerHTML =
        '\n      <div class="card-alert">\n      <h4>Maaf Terjadi Kesalahan !</h4>\n      <h5>Silahkan Coba Kembali ...</h5>\n    </div>';
    });
});

// if (window.matchMedia("(min-heigh: 832px)").matches) {
//   document.querySelector(".card").style.height = "100vh";
// } else {
//   document.querySelector(".card").style.height = "100%  ";
// }

if (window.screen.availHeight >= 831) {
  document.querySelector(".card").style.height = "100vh";
}

// if (window.screen(availHeight)) {
//   console.log("ok");
// }
