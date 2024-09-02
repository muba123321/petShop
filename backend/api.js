const API_CAT_URL = "https://api.thecatapi.com/v1";

const API_DOG_URL = "https://api.thedogapi.com/v1";
const API_KEY =
  "live_d4ardeTARUwUI0RKDZwqVPI3WsT4Qnp1clzN5ro91mtSfugd3ti6xXqmPXsUl6cF";

export async function getPets(Value) {
  try {
    const [dogRes, catRes] = await Promise.all([
      fetch(`${API_DOG_URL}/images/search?breed_ids=${Value}`, {
        headers: {
          "x-api-key": API_KEY,
        },
      }),
      fetch(`${API_CAT_URL}/images/search?breed_ids=${Value}`, {
        headers: {
          "x-api-key": API_KEY,
        },
      }),
    ]);
    const dogData = await dogRes.json();
    const catData = await catRes.json();
    console.log(dogData);
    console.log(catData);

    return { ...dogData, ...catData };
  } catch (e) {
    console.error(e);
  }
}
