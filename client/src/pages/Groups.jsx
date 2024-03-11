import React from "react";
import { Grid, Tooltip,IconButton } from "@mui/material";
import { orange } from "../constants/color";
const Groups = () => {
    const IconBtns=<>
    <Tooltip title="back">
        <IconButton></IconButton>
    </Tooltip>
    </>
  return (
    <Grid container height={"100vh"}>
      <Grid item sx={{ display: { xs: "none", sm: "block" ,}, }} sm={4} bgcolor={"bisque"}>
        Groups List 
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"cemter",
        position:"relative",
        padding:"1rem 3rem",
      }}>


      </Grid>
    </Grid>
  );

};

export default Groups;
