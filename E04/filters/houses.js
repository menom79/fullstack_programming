async function fetchHouses() {
    const response = await fetch('houses.json');
    const data = await response.json();
    return data;
}

async function renderHouses() {
    let houses = await fetchHouses();
    let housediv = document.getElementById("houses");

    housediv.innerHTML = ''; 

    houses.forEach(house => {
        if ((!document.getElementById('filterSize').checked || house.size < 200) &&
            (!document.getElementById('filterPrice').checked || house.price < 1000000)) {
            let housecontainer = document.createElement('div');
            housecontainer.className = 'houseContainer';

            let image = document.createElement('img');
            image.src = 'images/' + house.image;
            image.className = 'houseImage';

            let header = document.createElement('p');
            header.className = 'header';
            header.innerHTML = house.address;

            let price = document.createElement('p');
            price.className = 'text';
            let numberStr = new Intl.NumberFormat('fi-FI').format(house.price);
            price.innerHTML = `Price: ${numberStr} €`;

            let size = document.createElement('p');
            size.className = 'text';
            size.innerHTML = `Size: ${house.size} sqm`;

            housecontainer.appendChild(image);
            housecontainer.appendChild(header);
            housecontainer.appendChild(price);
            housecontainer.appendChild(size);

            housediv.appendChild(housecontainer);
        }
    });
}

document.getElementById('filterSize').addEventListener('change', renderHouses);
document.getElementById('filterPrice').addEventListener('change', renderHouses);

renderHouses(); 
