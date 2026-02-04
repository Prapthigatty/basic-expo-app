import axios from "axios";

export const getRandomActivity = async () => {
  const response = await axios.get(
    "https://bored-api.appbrewery.com/random"
  );
  return response.data;
};

export const getRandomDog = async () => {
  const response = await axios.get(
    "https://dog.ceo/api/breeds/image/random"
  );
  return response.data;
};
