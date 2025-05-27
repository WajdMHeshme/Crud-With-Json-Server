import { IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    handleUpdate();
  }, [id]);

  const handleUpdatedFrom = async (event) => {
    event.preventDefault();
    try {
       await axios.put(`http://localhost:8000/users/${id}`, {
        name: userName,
        email: userEmail,
      });
    } catch (error) {
      console.log(error);
    }
    handleUpdate();
    navigate("/");
  };

  const handleUpdate = async () => {
    try {
      let res = await axios.get(`http://localhost:8000/users/${id}`);
      setUserName(res.data.name);
      setUserEmail(res.data.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="title">Update User Info Here !</div>
      <div className="container">
        <form
          className="updateForm"
          onSubmit={handleUpdatedFrom}
        >
          <p>Name</p>
          <input
            type="text"
            placeholder="User Name.."
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
          />

          <p>Email</p>
          <input
            type="email"
            placeholder="email.."
            onChange={(event) => setUserEmail(event.target.value)}
            value={userEmail}
          />

          <input type="submit" value="Update" />
          <div className="back-btn" onClick={() => navigate("/")}>
            <a>
              <IoMdArrowRoundBack /> Back
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
