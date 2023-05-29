import { createBrowserRouter } from "react-router-dom";

import { animalLoader } from "./loaders/animalLoader";

import App from "./App";
import AnimalView from "./pages/AnimalView";
import AllAnimals from "./components/AllAnimals/AllAnimals";


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
