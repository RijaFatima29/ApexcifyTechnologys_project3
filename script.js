const products = [
  {title: "Smartphone", Brand: "Samsung", price: "$300", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguaK9JZF1TmZYG7L1b0mo7Zm7Me2Cw9l1JA&s"},
  {title: "Laptop", Brand: "HP", price: "$800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxd1lUhGFeaYdzIJZQg-F2I44kHqjdHEEHQ&s"},
  {title: "Headphones", Brand: "Audionic", price: "$50", img: "https://cdn.mos.cms.futurecdn.net/HMCWShKerkfeNQmYYhE3p7-1920-80.jpg"},
  {title: "Watch", Brand: "Time Zone", price: "$120", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-c4VDlEi2ovtJFL-xtXGAe66Axa5MgNYzA&s"},
  {title: "Camera", Brand: "Canon", price: "$500", img: "https://i1.adis.ws/i/canon/ecom_DSLR_Camera_Tile_2025_1x1_an?w=940&bg=white&fmt=webp&qlt=80&sm=aspect&aspect=1:1"},
  {title: "Airbuds", Brand: "Audionic", price: "$500", img: "https://www.mobilegeeks.pk/wp-content/uploads/2024/03/Airbud-625-Pro-Wireless-Earbuds-black.webp"},
  {title: "PowerBank", Brand: "Anker", price: "$500", img: "https://www.techadvisor.com/wp-content/uploads/2024/05/Anker-737-Powerbank.jpg?quality=50&strip=all&w=1024"},
  {title: "Speaker", Brand: "Bose", price: "$500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwpwO0Irm7Iq1sGDi1GOCUwy0EG5DGyIOkg&s"},
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");

  // clear once
  container.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-content">
        <div class="title">${p.title}</div>
        <div class="owner">${p.owner}</div>
        <div class="price">${p.price}</div>
        <a href="#" class="btn">Buy Now</a>
      </div>
    `;

    container.appendChild(card);
  });
}


function filterProducts() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(value));
  displayProducts(filtered);
}

// initial load
displayProducts(products);
