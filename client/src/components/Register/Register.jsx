import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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

const Register = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState(""); // form input
  const [email, setEmail] = useState(""); // form input
  const [password, setPassword] = useState(""); // form input
  const [confirmPassword, setConfirmPassword] = useState(""); // form input
  const [errorMessage, setErrorMessage] = useState(""); // handling error msgs
  const [redirect, setRedirect] = useState(false); // redirecting to login after successful registration

  const isEmailValid = (email) => {
    return email.includes("@gmail.com");
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      isEmailValid(email)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    setErrorMessage("");
    try {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords does not match!");
        return;
      }

      await axios.post("/register", {
        name,
        email,
        password,
      });
      setRedirect(true);
      alert("User Registered, Now Login!");
    } catch (error) {
      if (error.response) {
        setErrorMessage(`Registration Failed: ${error.response.data}`);
      } else {
        setErrorMessage("User registration failed. Please try again later!");
      }
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
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
            Register
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
              id="name"
              label="Name"
              name="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="confirmPassword"
              name="confirmPassword"
              type="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </Button>
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Already have an account? <Link to="/login">Login</Link>{" "}
            </p>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
