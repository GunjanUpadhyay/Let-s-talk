import React, { useState } from "react";
import { Container, Paper, TextField, ToggleButton, Typography } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin=()=>setIsLogin(false);

  return (
    <Container component={"main"} maxWidth="sx">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>

              <TextField
                required
                fullWidth
                label="Password"
                type="passward"
                margin="normal"
                variant="outlined"
              ></TextField>

              <Button sx={{marginTop:"1rem",}} variant="contained" fullWidth color="primary" type="submit">
                Login
              </Button>

              <Typography>Or</Typography>

              <Button sx={{marginTop:"1rem",}} variant="text" fullWidth  onClick={toggleLogin}>sign</Button>

            </form>
          </>
        ) : (
          <span>Register</span>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
