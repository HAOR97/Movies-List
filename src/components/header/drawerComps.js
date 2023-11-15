import { Drawer,IconButton,Button,List, ListItem,RadioGroup,FormControlLabel,Radio,Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

function DrawerComps({look,startModal}) {
    const [openDrawer,setOpenDrawer]= useState(false)
    const direction = 'right'

  return (
    <React.Fragment key={direction}>
        <Drawer 
        anchor={direction}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
            >
            <List>
                <nav>
                <ListItemButton style={{background:"#E33967",borderRadius:"35px", margin:'5%'}} onClick={startModal}>
                    <ListItemIcon>
                        <ListItemText>
                            Add Movie
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                </nav>
                <Divider />
                <nav style={{paddingLeft:"20%"}}>
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
                </nav>
            </List>

        </Drawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

    </React.Fragment>
  )
}
export default DrawerComps;