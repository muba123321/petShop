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
