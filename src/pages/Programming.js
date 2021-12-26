import { Link } from "react-router-dom";

const Programming = () => {
  return (
    <>
      <br></br>
      <Link to="/search/?q=java"> Java</Link>
      <br></br>
      <Link to="/search/?q=React"> React</Link>
    </>
  );
};

export default Programming;
