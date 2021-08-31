// Connect API Google Sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzB87q7d5j2jgXmNfQTxvUtlk3f0dmn7jCujZ-VnRdjMr_eKDC37Cg4jVYiG5bmcCRc/exec";
const form = document.forms["pkkmb-fti-absensi"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("button").textContent = "Loading ...";
  const nama = document.querySelector("#nama").value;
  console.log(new FormData(form))
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      if (window.matchMedia("(max-width: 480px)").matches) {
        document.querySelector(".card").style.height = "100vh";
      } else {
        document.querySelector(".card").style.height = "100%";
      }

      form.innerHTML = `
      <div class="card-alert">
      <h4>Hello, ${nama}</h4>
      <h5>
        Data anda berhasil kami terima. Terimakasih atas partisipasinya
        dalam kegiatan PKKMB FTI 2021
      </h5>
    </div>`;
    })
    .catch((error) => {
      console.error("Error!", error.message);
      form.innerHTML = `
      <div class="card-alert">
      <h4>Maaf Terjadi Kesalahan !</h4>
      <h5>Silahkan Coba Kembali ...</h5>
    </div>`;
    });
});
