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


export function showDetailedData(dataDetails) {

    const listData = document.getElementById("petList");
    listData.innerHTML = ""; 
    console.log(dataDetails);
    dataDetails.forEach((item) => {
        console.log(item);
      const card = document.createElement("div");
      card.classList.add("petCard");
      card.innerHTML = `
        <h2>${item.breeds[0].name}</h2>
        <img src="${item.url || 'default-image.jpg'}" alt="${item.name}" />
        <p><strong>Temperament:</strong> ${item.breeds[0].temperament || 'N/A'}</p>
        <p><strong>Weight:</strong> ${item.breeds[0].weight.imperial || 'N/A'} lbs</p>
        <p><strong>Description:</strong> ${item.breeds[0].description || 'N/A'}</p>
        <p><strong>Price:</strong> $${ 'N/A'}</p>
        <button class="buy-button">Buy Now</button>
      `;
      listData.appendChild(card);
    });
  }