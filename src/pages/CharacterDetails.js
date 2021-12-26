import { useParams } from "react-router-dom";
const Characters = ({ data }) => {
  const { id } = useParams();
  return (
    <>
      {data
        .filter((character) => character.id == id)
        .map((character) => {
          return (
            <>
              <h3>{character.name}</h3>
              <img src={character.img}></img>
              <img src={character.avatarImg}></img>
              <p>{character.details}</p>
            </>
          );
        })}
    </>
  );
};

export default Characters;
