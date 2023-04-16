const baseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-AM/players";

export async function fetchDogs() {
  try {
    const response = await fetch(baseUrl);
    const dogList = await response.json();
    return dogList;
  } catch (error) {
    console.error(error);
  }
}

export const fetchSingleDog = async (playerId) => {
  try {
    const response = await fetch(`${baseUrl}/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
};

export async function newPlayer(name, breed) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const createPlayer = await response.json();
    return createPlayer;
  } catch (error) {
    console.error(error);
  }
}

export const removeDog = async (playerId) => {
  try {
    console.log("Remove Player ID", playerId);
    const response = await fetch(`${baseUrl}/${playerId}`, {
      method: "Delete",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
