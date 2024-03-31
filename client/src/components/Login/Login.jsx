import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";
import { UserContext, useUserContext } from "../../context/userContext";

const Login = () => {
  // functions
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // state variables
  const [email, setEmail] = useState(""); // form input
  const [password, setPassword] = useState(""); // form input
  const [redirect, setRedirect] = useState(false); // redirect to '/' after successful login
  const [errorMessage, setErrorMessage] = useState(""); // handling error msgs
  const { setUser } = useContext(UserContext);

  const isEmailValid = (email) => {
    return email.includes("@gmail.com");
  };
  const isFormValid = () => {
    return email.trim() !== "" && password.trim() !== "" && isEmailValid(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setUser(data);
      console.log(data);

      alert("User login successful!");
      setRedirect(true);
    } catch (error) {
      if (error.response) {
        setErrorMessage(`Login Failed: ${error.response.data}`);
      } else {
        setErrorMessage("Login Failed. Please check your internet connection.");
      }
    }
  };

  const handleClose = () => {
    navigate("/");
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            width={isSmallScreen ? "300px" : "400px"}
            sx={{ marginRight: "auto" }}
          >
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && (
              <Typography
                variant="body2"
                color="error"
                sx={{
                  mt: 1,
                  textAlign: "center",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "8px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#FFCDD2",
                  },
                }}
              >
                {errorMessage}
              </Typography>
            )}

            <Button
              disabled={!isFormValid()}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: "1rem" }}
            >
              Login
            </Button>
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Don't have a account? <Link to="/register">Register</Link>{" "}
            </p>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
