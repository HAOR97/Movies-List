import {
  Box,
  Button,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
  useMediaQuery,
  useTheme
} from "@mui/material";
import "./header.css";
import { useState } from "react";
import ModalScreen from "../modal/ModalScreen";
import DrawerComps from './drawerComps'

function Header({ addMovie, look }) {
  const [modalState, setModalState] = useState(false);
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))


  function startModal() {
    setModalState(!modalState);
  }

  return (
    <header>
      
      <Modal
        open={modalState}
        onClose={startModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "max-content",
          }}
        >
          <ModalScreen addMovie={addMovie} closeModal={startModal} />
        </Box>
      </Modal>
      {!isMatch ? 
      <>
        <div className="add-section">
          <Button onClick={startModal}>Add Movie</Button>
        </div>

        <h1 style={{textAlign:'center'}}>Filmovi</h1>
        
        <RadioGroup defaultValue="all" name="radio-buttons-group" onChange={look}>
          <FormControlLabel
            value="all"
            control={<Radio sx={{ "&, &.Mui-checked": { color: "#E33967" } }} />}
            label="All"
          ></FormControlLabel>
          <FormControlLabel
            value="top"
            control={<Radio sx={{ "&, &.Mui-checked": { color: "#E33967" } }} />}
            label="Top"
          ></FormControlLabel>
        </RadioGroup>

      </>
      
      :<>
        <h2>Filmovi</h2>
      <DrawerComps startModal={startModal} look={look}/>
      </>
      }
    </header>
  );
}
export default Header;
