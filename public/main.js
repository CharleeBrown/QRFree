function init() {
	// Clear forms here
	document.getElementById("qr-text").value = "";
}


function setQR(setID, labelID) {
	//var id = setID.toString();
	var holdIMG = document.getElementById(setID);
	var mainInfo = document.getElementsByTagName("img")[0];
	var mainLbl = document.getElementById("labelInfo");
	var imgs = document.createElement("img");
	holdIMG.src = mainInfo.src;


	var labels = document.getElementById(labelID);
	labels.innerText = mainLbl.innerText;



}
//document.getElementById("genButton").addEventListener("click", generateQRCode);
function generateQRCode() {
	// Get the text from the input field
	var text = document.getElementById("qr-text").value;
	var codes = document.getElementsByClassName("coding");
	var labels = document.getElementsByClassName("codeLbl");

	//Variable for the machine number
	let machineName = text.substring(0,text.indexOf(";"));

	//Variable for the model number
	let modelNumber = text.substring(text.indexOf(";")+1, text.indexOf(":"));

	//variable for the department number.
	let deptNumber = text.substring(text.indexOf("#")+1, text.length-2);
	//WASINO;LG-7M:#3-3

	// Get the label 
	var lbl = document.getElementById("labelInfo");


	// Clear previous QR code if any
	var code = document.getElementById("qrcodeMain");
	code.innerHTML = "";

	// Generate QR code using qrcode.js library
	var qrcode = new QRCode(code, {
		text: text,
		width: 75,
		height: 75
	});
	lbl.textContent = machineName + " - " + modelNumber + " - Dept# " + deptNumber;

	text = "";
	// Set label content 


}