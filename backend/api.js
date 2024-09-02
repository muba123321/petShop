const API_CAT_URL = "https://api.thecatapi.com/v1";

const API_DOG_URL = "https://api.thedogapi.com/v1";
const API_KEY_CAT =
  "live_d4ardeTARUwUI0RKDZwqVPI3WsT4Qnp1clzN5ro91mtSfugd3ti6xXqmPXsUl6cF";

  const API_KEY_DOG =
  "live_6901800xXTiUjpz792ISWRkGnyWvLD39Gz3WiOBnj7tTinxGl1I1NNzgvZSLwRUk";

export async function getPets(Value) {
  try {
    const [dogRes, catRes] = await Promise.all([
      fetch(`${API_DOG_URL}/images/search?breed_ids=${Value}`, {
        headers: {
          "x-api-key": API_KEY_DOG,
        },
      }),
      fetch(`${API_CAT_URL}/images/search?breed_ids=${Value}`, {
        headers: {
          "x-api-key": API_KEY_CAT,
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

export async function getCats() {
  try {
    const res = await fetch(`${API_CAT_URL}/breeds`, {
    //   headers: {
    //     "x-api-key": API_KEY,
    //   },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}


export async function getDogs() {
    try {
      const res = await fetch(`${API_DOG_URL}/breeds`, {
      //   headers: {
      //     "x-api-key": API_KEY,
      //   },
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }