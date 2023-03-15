import "./index.css";

const Card = ({ eachDetails, newPokemonDetails }) => {
  const { name } = eachDetails;

  const getDetails = (details) => {
    newPokemonDetails(details);
  };

  return (
    <button
      type="button"
      className="card"
      onClick={() => getDetails(eachDetails)}
    >
      <li className="card-button">{name}</li>
    </button>
  );
};

export default Card;
