import { getPets } from "./backend/api.js";
import { getCats } from "./backend/api.js";
import { getDogs } from "./backend/api.js";
import { showData } from "./cardWidget.js";

const searchBar = document.getElementById("searchBar");

const catButton = document.getElementById("getCat");

const dogButton = document.getElementById("getDog");

searchBar.addEventListener("input", async () => {
  const searchValue = searchBar.value;
  if (searchValue.length > 0) {
    const petData = await getPets(searchValue);
  }
});

catButton.addEventListener("click", async () => {
  const catData = await getCats();
  showData(catData);
});

dogButton.addEventListener("click", async () => {
  const dogData = await getDogs();
  showData(dogData);
});
