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

function ModalScreen({ closeModal, addMovie }) {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState(1);
  const [len, setLen] = useState("");
  const [type, setType] = useState(false);

  function setStandard() {
    setName("");
    setDirector("");
    setRating(1);
    setLen("");
    setType(false);
  }

  return (
    <div className="modal-box">
      <TextField
        value={name}
        style={{ margin: "10px" }}
        onChange={(e) => setName(e.target.value)}
        label="Name"
      ></TextField>
      <TextField
        value={director}
        style={{ margin: "10px" }}
        onChange={(e) => setDirector(e.target.value)}
        label="Director"
      ></TextField>
      <TextField
        value={len}
        type="number"
        style={{ margin:"10px"}}
        onChange={(e) => setLen(e.target.value)}
        label="Length(min)"
      ></TextField>
      <div className="rating-switch-row">
        <div className="rating-switch">
          <p className="text-rating">Rating:</p>
          <Rating
            value={rating}
            style={{ margin: "10px" }}
            onChange={(e) => setRating(e.target.value / 1)}
          ></Rating>
        </div>
        <div className="rating-switch">
          <span>3D:</span>
          <PinkSwitch value={type} onChange={() => setType(!type)}>
            {" "}
          </PinkSwitch>
        </div>
      </div>
      <div className="buttons-section">
        <Button
          onClick={() => {
            addMovie(name, director, rating, len, type);
            setStandard();
          }}
          className="add"
        >
          Add
        </Button>
        <Button onClick={closeModal} className="cancel">
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default ModalScreen;
