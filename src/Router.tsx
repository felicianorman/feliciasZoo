import { createBrowserRouter } from "react-router-dom";
import AllAnimals from "./components/AllAnimals/AllAnimals";
import { animalLoader } from "./loaders/animalLoader";
import AnimalView from "./components/AnimalView";
import App from "./App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: "",
    },
    {
      path: "/animals",
      element: <AllAnimals></AllAnimals>,
      loader: animalLoader,
    },
    {
      path: "/animals/:id",
      element: <AnimalView></AnimalView>,
      loader: animalLoader,
    },
  ]);