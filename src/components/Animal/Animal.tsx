import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import "./Animal.scss";
import { useLoaderData, useParams } from "react-router";
import { Loader } from "../../loaders/animalLoader";
import notFoundImg from "../../assets/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.png";
import { IAnimalProps } from "../AllAnimals/AllAnimals";

export const Animal = ({
  imageUrl,
  name,
  isFed,
  longDescription,
  latinName,
  medicine,
  lastFed,
}: IAnimalProps) => {
  const [isDisabled, setDisabled] = useState(false);
  const [zooAnimal, setZooAnimal] = useState<IAnimalProps>();
  const [feedText, setFeedText] = useState("");

  const { animals } = useLoaderData() as Loader;

  const params = useParams();

  const timestamp = Date.now();
  const currentTime = new Intl.DateTimeFormat("sv-EU", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(timestamp);

  const feedAnimal = () => {
    setFeedText("Djuret matades kl: " + currentTime);
    JSON.parse(localStorage.getItem("animals") || "[]");

    let index = animals.find((animal) => animal.id.toString() === params.id);
    

    let fedAnimals = animals.map((animal) => {
      setZooAnimal({
        ...animal,
        name: name,
        latinName: latinName,
        longDescription: longDescription,
        lastFed: lastFed,
        isFed: isFed,
      });
      if (index?.id === animal.id) {
        return {
          ...animal,
          lastFed: currentTime.toString(),
          isFed: true,
        };
      } else {
        return animal;
      }
    });

    localStorage.setItem("animals", JSON.stringify(fedAnimals));
    JSON.parse(localStorage.getItem("animals") || "[]");
    console.log(fedAnimals);
  };

  const checkFeeding = () => {
  if (isFed === false) {
    setDisabled(true);

    feedAnimal();
  }

  else {
    alert("Du matade djuret kl  " + lastFed)
  }
}

  return (
    <>
    <Navbar></Navbar>
      <div className="eachAnimal">
        <div className="thisAnimal">
          <h2>{name}</h2>
          <img
            src={imageUrl}
            alt={name}
            className="animal--img"
            onError={(e) => (e.currentTarget.src = notFoundImg)}
          />
          <span className="latinName">{latinName}</span>
          <p>{longDescription}</p>
          <span className="medicine">Mediciner: {medicine}</span>
          <button disabled={isDisabled} onClick={checkFeeding} className={isFed === false ? 'notFed' : 'fed'}>
            Mata djuret
          </button>
          <p>{feedText}</p>
        </div>
      </div>
    </>
  );
};
