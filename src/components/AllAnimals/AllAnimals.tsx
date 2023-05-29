import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Loader } from "../../loaders/animalLoader";
import "./AllAnimals.scss";
import AnimalList from "../../pages/AnimalList";


export interface IAnimalProps {
  id: number;
  imageUrl: string;
  lastFed: string;
  name: string;
  shortDescription: string;
  isFed: boolean;
  latinName: string;
  yearOfBirth: number;
  longDescription: string;
  medicine: string;
}

const AllAnimals = () => {
  localStorage.getItem("animals");
  const { animals } = useLoaderData() as Loader;

  return (
    <>
      <Navbar></Navbar>
      <h1>Mina djur</h1>
      <div className="container">
        {animals.map((animal, index) => (
          <div className="showAnimals">
            <Link key={index} to={animal.id.toString()} className="animalLink">
              <AnimalList key={animal.id} {...animal}></AnimalList>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllAnimals;
