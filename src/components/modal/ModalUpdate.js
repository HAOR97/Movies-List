import {
  TextField,
  Rating,
  Button,
  Switch,
} from "@mui/material";
import "./Modal.css";
import { useState } from "react";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#E33967",
    "&:hover": {
      backgroundColor: alpha("#E33967", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#E33967",
  },
}));

function ModalUpdate({ closeModal, movie }) {
  const [name, setName] = useState(movie.name);
  const [director, setDirector] = useState(movie.director);
  const [rating, setRating] = useState(movie.rating);
  const [len, setLen] = useState(movie.len);
  const [type, setType] = useState(movie.type);

  function update() {
    if (name === "" || director === "" || rating === "" || len === "") {
      alert("Niste popunili sva polja");
    } else {
      movie.name = name;
      movie.director = director;
      movie.rating = rating;
      movie.len = len;
      movie.type = type;

      closeModal();
    }
  }

  return (
    <div className="modal-box">
      <TextField
        style={{ margin: "10px" }}
        onChange={(e) => setName(e.target.value)}
        label="Title"
        value={name}
      ></TextField>
      <TextField
        style={{ margin: "10px" }}
        onChange={(e) => setDirector(e.target.value)}
        label="Director"
        value={director}
      ></TextField>
      <TextField
        type="number"
        style={{ margin: "10px" }}
        onChange={(e) => setLen(e.target.value)}
        label="Length(min)"
        value={len}
      ></TextField>

      <div className="rating-switch-row">
        <div className="rating-switch">
          <p className="text-rating">Rating:</p>
          <Rating
            style={{ margin: "10px" }}
            onChange={(e) => setRating(e.target.value)}
            value={rating / 1}
          ></Rating>
        </div>
        <div className="rating-switch">
          <span>3D:</span>
          <PinkSwitch onChange={() => setType(!type)} checked={type}>
            {" "}
          </PinkSwitch>
        </div>
      </div>

      <div className="buttons-section">
        <Button onClick={update} className="add">
          Update
        </Button>
        <Button onClick={closeModal} className="cancel">
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default ModalUpdate;
