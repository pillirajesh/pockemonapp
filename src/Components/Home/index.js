import { React, useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import CardDetails from "../CardDetails";
import "./index.css";

const Home = () => {
  const [newData, setNewData] = useState([]);
  const [prevButton, setPrevButton] = useState();

  const [nextButton, setNextButton] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [details, setDetails] = useState([]);

  const getPokemonResults = async () => {
    const response = await axios.get(url);
    setNextButton(response.data.next);
    setPrevButton(response.data.previous);

    setNewData(response.data.results);
  };

  useEffect(() => {
    getPokemonResults();
  }, [url]);

  const goToNext = () => {
    setUrl(nextButton);
  };

  const goToPrev = () => {
    setUrl(prevButton);
  };

  const newPokemonDetails = (data) => {
    setDetails(data.url);
  };

  return (
    <div className="home-container">
      <h1 className="heading">POKEMON SHOW</h1>
      <div className="sepearation-container">
        <ul className="list-container">
          {newData.map((each) => (
            <Card
              eachDetails={each}
              key={each.name}
              newPokemonDetails={newPokemonDetails}
            />
          ))}
        </ul>
        <div className="details-container">
          <CardDetails detail={details} />
        </div>
      </div>
      <button type="button" onClick={goToPrev} className="button">
        Prev
      </button>

      <button type="button" className="button" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Home;
