function filter(categoryText){
    let input;
    if(categoryText){
        input=categoryText.toLowerCase();
    }
    else{
        input=document.getElementById("inp").value.trim().toLowerCase();
    }
    const cards=document.getElementsByClassName("skill-card");
    const noresult=document.getElementById("noResults");
    let found=0;
    for(let i=0;i<cards.length;i++){
        const title=cards[i].getElementsByTagName("h1")[0].textContent.toLowerCase();
        if(title.includes(input)){
            cards[i].classList.remove("hidden");
            found=1;
        }
        else{
            cards[i].classList.add("hidden");
        }
    }
    if(found==0){
        noresult.classList.remove("hidden");
    }
    else{
        noresult.classList.add("hidden");
    }
}
function filterByCategory(category) {
    filter(category);
}
window.onload = function() {
    const container = document.getElementById("cardsContainer");
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const div = document.createElement("div");
        div.className = "skill-card h-[180px] w-full sm:w-[300px] p-5 border-2  rounded-lg flex flex-col gap-3 bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ";
        div.innerHTML = `
            <h1 class="font-bold text-xl text-violet-500">${card.teach}</h1>
            <p>${card.learn}</p>
            <button class="w-[100px] py-1 font-bold bg-violet-500 rounded-lg text-white hover:bg-violet-600">View</button>
                `;
        container.appendChild(div);
    }
}