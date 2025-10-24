const params = new URLSearchParams(window.location.search);
const skillName = params.get("skill");


const skillTitle = document.getElementById("skillTitle");
skillTitle.textContent = People who can teach ${skillName};


const storedData = JSON.parse(localStorage.getItem("skills")) || [];


const filteredUsers = storedData.filter(
  (user) => user.teach.toLowerCase() === skillName.toLowerCase()
);

const container = document.getElementById("skillContainer");
const noDataMsg = document.getElementById("noDataMsg");


if (filteredUsers.length > 0) {
  filteredUsers.forEach((user) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1";

    card.innerHTML = `
      <h3 class="text-xl font-bold text-indigo-600 mb-2">${user.name}</h3>
      <p class="text-gray-700"><strong>Teaches:</strong> ${user.teach}</p>
      <p class="text-gray-700"><strong>Level:</strong> ${user.level}</p>
      <p class="text-gray-700"><strong>Wants to Learn:</strong> ${user.learn}</p>
    `;
    container.appendChild(card);
  });
} else {

  noDataMsg.classList.remove("hidden");
}
