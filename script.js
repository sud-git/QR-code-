<<<<<<< HEAD
let btn = document.querySelector(".button");

function generate(user_input) {
  const qrContainer = document.querySelector(".qr-code");
  qrContainer.innerHTML = ""; // clear old QR
  qrContainer.style.display = "block";

  // Generate QR
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

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");
  if (user_input.value.trim() !== "") {
    generate(user_input);
  } else {
    document.querySelector(".qr-code").style.display = "none";
    console.log("Not valid input");
  }
});
=======
let btn = document.querySelector(".button");
btn.addEventListener("click", () => {
   //code
})

function generate(user_input) {
    //code
} 

function generate(user_input) {
    var qrcode = new QRCode(document.querySelector(".qr-code"), {
        text: `${user_input.value}`,
        width: 180, //default 128
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
} 

let download = document.createElement("button");
document.querySelector(".qr-code").appendChild(download);

let download_link = document.createElement("a");
download_link.setAttribute("download", "qr_code_linq.png");
download_link.innerText = "Download";
download.appendChild(download_link);

let qr_code_img = document.querySelector(".qr-code img");
setTimeout(() => {
    download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
}, 300);

let qr_code_canvas = document.querySelector("canvas");
setTimeout(() => {
    download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
}, 300);

if(qr_code_img.getAttribute("src") == null){
    setTimeout(() => {
        download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
} else {
    setTimeout(() => {
        download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
    }, 300);
}

function generate(user_input){

    document.querySelector(".qr-code").style = "";

    var qrcode = new QRCode(document.querySelector(".qr-code"), {
        text: `${user_input.value}`,
        width: 180, //128
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    console.log(qrcode);

    let download = document.createElement("button");
    document.querySelector(".qr-code").appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code_linq.png");
    download_link.innerText = "Download";

    download.appendChild(download_link);

    if(document.querySelector(".qr-code img").getAttribute("src") == null){
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector(".qr-code img").getAttribute("src")}`);
        }, 300);
    }
}
btn.addEventListener("click", () => {
    let user_input = document.querySelector("#input_text");
    if(user_input.value != "") {
        if(document.querySelector(".qr-code").childElementCount == 0){
            generate(user_input);
        } else{
            document.querySelector(".qr-code").innerHTML = "";
            generate(user_input);
        }
    } else {
        document.querySelector(".qr-code").style = "display: none";
        console.log("not valid input");
    }
})
>>>>>>> 8c09286d76868d38b8bc1c5b0bb18c6acc9efe0c
