let qrcode;

function generateQR() {
  const text = document.getElementById("text").value;
  const darkColor = document.getElementById("darkColor").value;
  const lightColor = document.getElementById("lightColor").value;

  if (!text) return;

  document.getElementById("qrcode").innerHTML = "";

  qrcode = new QRCode(document.getElementById("qrcode"), {
	text: text,
	width: 200,
	height: 200,
	colorDark: darkColor,
	colorLight: lightColor,
	correctLevel: QRCode.CorrectLevel.H
  });
}