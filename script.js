
document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();

    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${nombre}
FN:${nombre}
TEL;TYPE=cell:${telefono}
EMAIL:${email}
END:VCARD`;

    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
        text: vCard,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.M
    });
});
