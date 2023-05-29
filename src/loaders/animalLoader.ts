import { useLoaderData } from "react-router";
import { IAnimalProps } from "../pages/AllAnimals/AllAnimals";
import axios from "axios";

export interface Loader {
  animals: IAnimalProps[];
}

export const animalLoader = async () => {
  let animals: IAnimalProps[] = [];
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals") || "[]");
  } else {
    axios
      .get<IAnimalProps[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        localStorage.setItem("animals", JSON.stringify(response.data));
        animals = response.data;
      });
  }

  const data: Loader = { animals: animals };

  return data;
};
