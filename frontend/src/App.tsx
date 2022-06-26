import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";

import axios from "config/axios";
import { TopBar } from "components";
import { GET_ROBOTS } from "store/actions/robot.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ROBOTS,
      payload: axios.get("/robots"),
    });

    return () => {};
  }, []);

  return (
    <Container maxWidth="xl">
      <TopBar />
      //logo //cart //body
    </Container>
  );
}

export default App;
