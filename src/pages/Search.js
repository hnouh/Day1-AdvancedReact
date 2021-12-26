import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {
  const [language, setLanguage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    setLanguage(q);
  }, []);

  function changeLanguage() {
    setLanguage(language);
    navigate(`/search/?q=${language}`);
  }

  return (
    <>
      <div>
        <h1>{language}</h1>
        <p>{language} is the most powerful language</p>
        <input
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          type="text"
          placeholder="your fav language"
        ></input>
        <button
          onClick={(e) => {
            changeLanguage(e);
          }}
        >
          Change language
        </button>
      </div>
    </>
  );
};
export default Search;
