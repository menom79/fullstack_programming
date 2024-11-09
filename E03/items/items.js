let hcpdata = [
    { "name": "Ari", "hcp": 54 },
    { "name": "Pasi", "hcp": 5 },
    { "name": "Seppo", "hcp": 20 }
];

document.getElementById("showButton").addEventListener("click", function() {
    let list = document.getElementById("hcplist");
    list.innerHTML = ""; 

    hcpdata.forEach(function(player) {
        let listItem = document.createElement("li");
        listItem.textContent = `${player.name} ${player.hcp}`;
        list.appendChild(listItem);
    });
});
