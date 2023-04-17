import { useContext, useState } from "react";
import { places } from "./data.js";
import ImageSizeContext from "./Context.js";
import dog from "../assets/images/dog.jpg";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place}  />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext)
  return (
    <img src={dog} alt={place.name} width={imageSize} height={imageSize} />
  );
}
