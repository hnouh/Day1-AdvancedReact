import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ login }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <>
      <h3>Edit your profile</h3>
      <input type="text" placeholder="name"></input>
      <button>Save</button>
    </>
  );
};

export default Profile;
