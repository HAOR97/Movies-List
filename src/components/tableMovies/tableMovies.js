import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import ModalUpdate from "../modal/ModalUpdate";
import { useState } from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function TableMovies({ sviFilmovi, izbrisi }) {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState();
  const [filter, setFilter] = useState("");

  function startModal() {
    setOpen(!open);
  }

  function openModal(m) {
    setOpen(true);
    setMovie(m);
  }

  const styleBtn = {
    background: "#E33967",
    fontSize: "small",
    color: "black",
    borderRadius: "30px",
  };

  function sortNaziv() {
    sviFilmovi.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <>

        <div style={{width:"max-content",margin:"auto",paddingTop:"50px"}}>
          <TextField
            style={{width:"max-content",margin:"auto"}}
            label="filter"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
      <div style={{ paddingTop: "10px" }}>
        <TableContainer
          sx={{ borderRadius: "20px" }}
          style={{ width: "80%", margin: "5px auto" }}
          component={Paper}
        >
          <Table arial-label="movie table">
            <TableHead>
              <TableRow style={{ background: "#E33967" }}>
                <TableCell style={{ textAlign: "center" }}>Title</TableCell>
                <TableCell style={{ textAlign: "center" }}>Director</TableCell>
                <TableCell style={{ textAlign: "center" }}>Length</TableCell>
                <TableCell style={{ textAlign: "center" }}>Rating</TableCell>
                <TableCell style={{ textAlign: "center" }}>3D</TableCell>
                <TableCell style={{ textAlign: "center" }}>Update</TableCell>
                <TableCell style={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sortNaziv()}
              {sviFilmovi.map((movie) => {
                if (
                  movie.name.includes(filter) ||
                  movie.director.includes(filter)
                ) {
                  return (
                    <TableRow key={movie.id}>
                      <TableCell style={{ textAlign: "center" }}>
                        {movie.name}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {movie.director}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {movie.len}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "'Brush Script MT', cursive",
                          textAlign: "start",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          {movie.rating}
                          <StarIcon
                            sx={{ color: "#ffcd3c", fontSize: "medium" }}
                          ></StarIcon>
                        </div>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {movie.type ? (
                          <CheckIcon sx={{ color: "#34b233" }} />
                        ) : (
                          <CloseIcon sx={{ color: "red" }} />
                        )}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        <Button
                          onClick={() => openModal(movie)}
                          style={styleBtn}
                        >
                          Update
                        </Button>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        <Button onClick={() => izbrisi(movie)} style={styleBtn}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open}
          onClose={startModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              width: "max-content",
            }}
          >
            <ModalUpdate movie={movie} closeModal={startModal} />
          </Box>
        </Modal>
      </div>
    </>
  );
}
export default TableMovies;
