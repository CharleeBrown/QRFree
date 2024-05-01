function init() {
	// Clear forms here
	document.getElementById("qr-text").value = "";
}
window.onload = init;


function setQR(setID, labelID) {
	//var id = setID.toString();
	var holdIMG = document.getElementById(setID);
	var mainInfo = document.getElementsByTagName("img")[0];
	var mainLbl = document.getElementById("labelInfo");
	var imgs = document.createElement("img");
	holdIMG.src = mainInfo.src;
	//     if(holdimg.hasChildNodes()) {
	//     imgs.setAttribute("class", "mainIMG");
	//     imgs.src = mainInfo.src;
	//     holdimg.removeChild()
	//    }
	//    else{
	//     imgs.src = mainInfo.src;
	//     holdimg.appendChild(imgs);
	//    }

	var labels = document.getElementById(labelID);
	labels.innerText = mainLbl.innerText;
	// Get the target div element

	//codes.innerHTML = "";
	//codes.value = mainInfo;
	// Generate QR code using qrcode.js library
	// var qrcode = new QRCode(codes, {
	//     text: mainInfo,
	//     width: 150,
	//     height: 150
	// });


}
//document.getElementById("genButton").addEventListener("click", generateQRCode);
function generateQRCode() {
	// Get the text from the input field
	var text = document.getElementById("qr-text").value;
	var codes = document.getElementsByClassName("coding");
	var labels = document.getElementsByClassName("codeLbl");

	// Get the label 
	var lbl = document.getElementById("labelInfo");


	// Clear previous QR code if any
	var code = document.getElementById("qrcodeMain");
	code.innerHTML = "";

	// Generate QR code using qrcode.js library
	var qrcode = new QRCode(code, {
		text: text,
		width: 150,
		height: 150
	});
	lbl.textContent = text;
	// for (var i = 0; i < codes.length; i++) {
	//     var coder = codes[i];
	//     var lblr = labels[i];
	//     coder.innerHTML = "";

	//     // Generate QR code using qrcode.js library
	//     var qrcode = new QRCode(coder, {
	//         text: text,
	//         width: 150,
	//         height: 150
	//     });
	//     lblr.textContent = text;
	// }
	text = "";
	// Set label content 


}