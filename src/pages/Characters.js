import { Link } from "react-router-dom";

const Characters = ({ data }) => {
  return (
    <>
      {data.map((character) => {
        return (
          <>
            <Link to={`/CharacterDetails/${character.id}`}>
              {" "}
              <h3>{character.name}</h3>
              <img src={character.img}></img>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Characters;
