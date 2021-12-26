import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <br></br>
      <button
        onClick={() => {
          navigate(+1);
        }}
      >
        Forword
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        GoBack
      </button>
      <br></br>

      <Link exact to="/">
        Home
      </Link>
      <br></br>
      <Link to="/Characters">Characters</Link>
      <br></br>
      <Link to="/Profile">Profile</Link>
      <br></br>
      <Link to="/Programming">Programming</Link>
      <br></br>
    </>
  );
};

export default Navbar;
