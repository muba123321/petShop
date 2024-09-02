import { getPets } from './backend/api.js';


const searchBar = document.getElementById("searchBar");

const catButton = document.getElementById("getCat");

const dogButton = document.getElementById("getDog");

searchBar.addEventListener("input", async () => {
  const searchValue = searchBar.value;
  if (searchValue.length > 0) {
    const petData = await getPets(searchValue);
  }
});
