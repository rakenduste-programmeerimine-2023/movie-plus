

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Registration from "./components/Registration";
import LogIn from "./components/LogIn";

function MoviePlus() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                MoviePlus
              </Link>
            </Typography>
            <Button color="inherit">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LogIn
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/"
              element={
                <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
                  Welcome to MoviePlus
                </Typography>
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default MoviePlus;
