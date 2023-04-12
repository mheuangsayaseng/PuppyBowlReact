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
