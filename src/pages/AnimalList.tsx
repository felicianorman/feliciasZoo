import { IAnimalProps } from "./AllAnimals/AllAnimals";
import notFoundImg from '../assets/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.png'

export const AnimalList = ({
  id,
  imageUrl,
  lastFed,
  name,
  shortDescription,
}: IAnimalProps) => {


  return (
    <>
    <div className="animal">
      <h3>{name}</h3>
      <img src={imageUrl} className="animal--img" alt="Bild av djur" onError={(e) => (e.currentTarget.src = notFoundImg)}/>
      <p className="animal--desc">{shortDescription}</p>
      </div>
    </>
  );
};

export default AnimalList;
