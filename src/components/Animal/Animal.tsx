import { useState } from "react";
import { IAnimalProps } from "../AllAnimals/AllAnimals";
import Navbar from "../Navbar/Navbar";
import "./Animal.scss";
import { useLoaderData, useParams } from "react-router";
import { Loader } from "../../loaders/animalLoader";
import notFoundImg from "../../assets/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.png";

export const Animal = ({
  id,
  imageUrl,
  shortDescription,
  name,
  isFed,
  longDescription,
  latinName,
  medicine
}: IAnimalProps) => {
  JSON.parse(localStorage.getItem("animals") || "[]");

  const params = useParams();
  const [isDisabled, setDisabled] = useState(false);
  const { animals } = useLoaderData() as Loader;

  const [feedText, setFeedText] = useState("");

  const timestamp = Date.now();
  const currentTime = new Intl.DateTimeFormat("sv-EU", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(timestamp);
  localStorage.setItem("animals", JSON.stringify(animals));

  const feedAnimal = () => {
    setDisabled(true);
    setFeedText("Djuret matades kl: " + currentTime)

    let index = animals.find((animal) => animal.id.toString() === params.id);

    animals.map((animal) => {
      if (index?.id === animal.id) {
        (animal.isFed = true), (animal.lastFed = currentTime.toString());

        localStorage.setItem("animals", JSON.stringify(animal));
        console.log(animal)
        console.log(animals)
      }
    });
  };

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
          <button onClick={feedAnimal} disabled={isDisabled}>
            Mata djuret
          </button>
          <p>{feedText}</p>
           
        </div>
      </div>
    </>
  );
};
