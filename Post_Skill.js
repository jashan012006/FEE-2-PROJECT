function saveCard() {
    const teach = document.getElementById("teachInput").value.trim();
    const learn = document.getElementById("learnInput").value.trim();

    if (!teach || !learn) {
        alert("Please fill both fields!");
        return;
    }

    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push({ teach: teach, learn: learn });
    localStorage.setItem("cards", JSON.stringify(cards));

    alert("Card Posted Successfully!");
    window.location.href = "browse_skills.html"; 
}