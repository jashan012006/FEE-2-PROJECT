function saveCard() {
    const name= document.getElementById("nameInput").value.trim();
    const teach = document.getElementById("teachInput").value.trim();
    const level= document.getElementById("levelSelect").value.trim();
    const learn = document.getElementById("learnInput").value.trim();
    if (!teach || !learn || !name || !level) {
        alert("Please fill in all fields!");
        return;
    }
    const card={
        name: name,
        teach: teach,
        level: level,
        learn: learn
    }
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));

    alert("Card Posted Successfully!");
    window.location.href = "browse_skills.html"; 
}