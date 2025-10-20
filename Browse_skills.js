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