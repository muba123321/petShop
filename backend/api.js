const API_CAT_URL = "https://api.thecatapi.com/v1";

const API_DOG_URL = "https://api.thedogapi.com/v1";
const API_KEY_CAT =
  "live_d4ardeTARUwUI0RKDZwqVPI3WsT4Qnp1clzN5ro91mtSfugd3ti6xXqmPXsUl6cF";

const API_KEY_DOG =
  "live_6901800xXTiUjpz792ISWRkGnyWvLD39Gz3WiOBnj7tTinxGl1I1NNzgvZSLwRUk";

const API_FAVORITES_CAT_URL = "https://api.thecatapi.com/v1/favourites";

const API_FAVORITES_DOG_URL = "https://api.thedogapi.com/v1/favourites";

export async function getPets(Value) {
  try {
    const [dogRes, catRes] = await Promise.all([
      fetch(`${API_DOG_URL}/images/search?limit=10&breed_ids=${Value}`, {
        headers: {
          "x-api-key": API_KEY_DOG,
        },
      }),
      fetch(`${API_CAT_URL}/images/search?limit=10&breed_ids=${Value}`, {
        headers: {
          "x-api-key": API_KEY_CAT,
        },
      }),
    ]);
    const dogData = await dogRes.json();

    const catData = await catRes.json();
    // console.log(dogData);
    // console.log(dogData.length);
    // console.log(catData.length);
    // console.log(catData);
    return [...dogData, ...catData];
  } catch (e) {
    console.error(e);
  }
}

export async function getCats() {
  try {
    const res = await fetch(`${API_CAT_URL}/breeds`, {});
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getDogs() {
  try {
    const res = await fetch(`${API_DOG_URL}/breeds`, {});
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function toggleFavorite(pet) {
  console.log(pet.url);
  try {
    const isDog = pet.url.includes("thedogapi");
    const API_FAVORITES_URL = isDog
      ? API_FAVORITES_DOG_URL
      : API_FAVORITES_CAT_URL;
    const API_KEY = isDog ? API_KEY_DOG : API_KEY_CAT;

    const favoritesRes = await fetch(`${API_FAVORITES_URL}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    const favorites = await favoritesRes.json();
    const favorite = favorites.find((fav) => fav.image_id === pet.id);

    if (favorite) {
      await fetch(`${API_FAVORITES_URL}/${favorite.id}`, {
        method: "DELETE",
        headers: {
          "x-api-key": API_KEY,
        },
      });
      return false;
    } else {
      await fetch(`${API_FAVORITES_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          image_id: pet.id,
        }),
      });
      return true;
    }
  } catch (e) {
    console.error("Error toggling favorite:", e);
    return null;
  }
}


export async function getFavorites() {
  try {
    const catFavoritesRes = await fetch(API_FAVORITES_CAT_URL, {
      headers: {
        "x-api-key": API_KEY_CAT,
      },
    });
    const dogFavoritesRes = await fetch(API_FAVORITES_DOG_URL, {
      headers: {
        "x-api-key": API_KEY_DOG,
      },
    });

    const catFavorites = await catFavoritesRes.json();
    const dogFavorites = await dogFavoritesRes.json();

    return [...catFavorites, ...dogFavorites]; 
  } catch (e) {
    console.error("Error fetching favorites:", e);
    return [];
  }
}
