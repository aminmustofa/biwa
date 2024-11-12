function generateMessage() {
    const messages = [
        "Aku cinta kamu lebih dari apa pun!",
	"Im So Proud of you!",
	"Kamu Hebatt!",
	"Terimakasih Sudah Terlahir di Dunia Ini!",
        "Setiap detik bersamamu adalah anugerah.",
        "Kamu adalah alasan senyumku setiap hari!",
        "Aku ingin menghabiskan selamanya bersamamu.",
        "Cintaku padamu tak terbatas seperti langit."
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
}
