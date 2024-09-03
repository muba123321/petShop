import { toggleFavorite, getFavorites } from "../backend/api.js";

export function showData(data) {
  const listData = document.getElementById("petList");
  listData.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("petCard");
    card.innerHTML = `
        <h2>
        ${item.name}</h2>
        <h3> <strong>
        ID:
        </strong>${item.id}</h3>
        `;
    listData.appendChild(card);
  });
}

export async function showDetailedData(dataDetails) {
  const listData = document.getElementById("petList");
  listData.innerHTML = "";
  console.log(dataDetails);

  const boughtPets  = await getFavorites();
  dataDetails.forEach((item) => {
    const breed = item.breeds && item.breeds.length > 0 ? item.breeds[0] : {};

    console.log(item);
    const card = document.createElement("div");
    card.classList.add("petCard");

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.textContent = "Buy Now";


    const isBought = boughtPets.some(fav => fav.image_id === item.id);

    if (isBought) {
      buyButton.textContent = "Bought";
      buyButton.classList.add("bought");
      updateBoughtPets(item, true); 
    } else {
      buyButton.textContent = "Buy Now";
    }


    buyButton.addEventListener("click", async () => {
      console.log("clicked button");
      
      const isFavourite = await toggleFavorite(item);

      if (isFavourite) {
        buyButton.textContent = "Bought";
        buyButton.classList.add("bought");
        updateBoughtPets(item, true);
      } else {
        buyButton.textContent = "Buy Now";
        buyButton.classList.remove("bought");
        updateBoughtPets(item, false);
      }
    });

    card.innerHTML = `  
        <h2>${breed.name}</h2>
        <img src="${item.url || "default-image.jpg"}" alt="${item.name}" />
        <p><strong>Temperament:</strong> ${breed.temperament || "N/A"}</p>
        <p><strong>Weight:</strong> ${breed.weight.imperial || "N/A"} lbs</p>
        <p><strong>Description:</strong> ${breed.description || "N/A"}</p>
        <p><strong>Price:</strong> $ ${item.height || "N/A"}</p>
        
      `;
    card.appendChild(buyButton);
    listData.appendChild(card);
  });
}

function updateBoughtPets(pet, add) {
  console.log(pet);
  const boughtPetsContainer = document.getElementById("boughtPets");
  const petsBoughtCount = document.getElementById("petsBoughtCount");
  let currentCount = parseInt(petsBoughtCount.textContent, 10);

  if (add) {
    const alreaydyBought = boughtPetsContainer.querySelector(`[data-pet-id="${pet.id}"]`);
if (!alreaydyBought){

    currentCount += 1;
    const petItem = document.createElement("div");
    petItem.classList.add("bought-pet");
    petItem.setAttribute("data-pet-id", pet.id);
    petItem.innerHTML = `
      <img src="${pet.url}" alt="${pet.breeds[0].name}" />
      <p>${pet.breeds[0].name},</p>
      <p> ID: ${pet.breeds[0].id}</p>
    `;
    boughtPetsContainer.appendChild(petItem);
}
  } else {
    currentCount -= 1;
    const petItem = boughtPetsContainer.querySelector(`[data-pet-id="${pet.id}"]`);
    if (petItem) {
      boughtPetsContainer.removeChild(petItem);
    }
  }

  petsBoughtCount.textContent = currentCount;
}


