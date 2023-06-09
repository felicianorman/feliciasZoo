import { useParams } from "react-router";
import { Animal } from "../components/Animal/Animal";
import { IAnimalProps } from "../components/AllAnimals/AllAnimals";

const AnimalView = () => {
  const params = useParams();

  const animals: IAnimalProps[] = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );

  const currentAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  if (currentAnimal === undefined) {
    return <h2>Finns ej</h2>;
  } else {
    return <Animal {...currentAnimal}>
    </Animal>;
  }
};

export default AnimalView;
