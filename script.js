let btn = document.querySelector(".button");

function generate(user_input) {
  const qrContainer = document.querySelector(".qr-code");
  qrContainer.innerHTML = ""; // Clear old QR code
  qrContainer.style.display = "block";

  // Generate QR code
  let qrcode = new QRCode(qrContainer, {
    text: user_input.value,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Add Download button
  setTimeout(() => {
    let img = qrContainer.querySelector("img");
    let canvas = qrContainer.querySelector("canvas");

    let downloadBtn = document.createElement("button");
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "qr_code.png");
    downloadLink.innerText = "Download";

    if (img && img.getAttribute("src")) {
      downloadLink.href = img.src;
    } else if (canvas) {
      downloadLink.href = canvas.toDataURL();
    }

    downloadBtn.appendChild(downloadLink);
    qrContainer.appendChild(downloadBtn);
  }, 300);
}

// Event listener for button click
btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");
  if (user_input.value.trim() !== "") {
    generate(user_input);
  } else {
    document.querySelector(".qr-code").style.display = "none";
    console.log("Not valid input");
  }
});
