import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useInputValidation, useFileHandler } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  // validation
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const passward = useInputValidation("");

  const avatar = useFileHandler("single");
  const handleLogin=(e)=>{
    e.preventDefault();
  }
  const handleSignUp=(e)=>{
    e.preventDefault();
  }


  return (
    <div style={{backgroundImage:"linear-gradient(rgba(200,200,200,0.5),rgba(120,120,220,0.5))",}}>

 
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
            <form  style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                label="Password"
                type="passward"
                margin="normal"
                variant="outlined"
                value={passward.value}
                onChange={passward.changeHandler}
              ></TextField>

              <Button
                sx={{
                   marginTop: "1rem" }}
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                // sx={{ marginTop: "1rem" }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                sign
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"7rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "7rem", height: "7rem", objectfit: "contain" }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.3)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.5)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                label="Password"
                type="passward"
                margin="normal"
                variant="outlined"
                value={passward.value}
                onChange={passward.changeHandler}
              ></TextField>

              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Sign up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>

              <Button
                // sx={{marginTop:"1rem",}}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
