import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import axios from "config/axios";
import { FilterRobots, RobotCard, TopBar, Alert } from "components";
import { GET_ROBOTS, RESET_ROBOTS } from "store/actions/robot.actions";
import { RootState } from "store/models/redux.model";
import { Robot } from "store/models/robot.model";

function App() {
  const dispatch = useDispatch();
  const { robotsList, filter } = useSelector((state: RootState) => state.robots);

  useEffect(() => {
    dispatch({
      type: GET_ROBOTS,
      payload: axios.get("/robots"),
    });

    return () => {
      dispatch({
        type: RESET_ROBOTS,
      });
    };
  }, []);

  const filterRobots = (robot: Robot) => {
    if (filter === "All") return robot;
    else if (robot.material === filter) return robot;
  };

  return (
    <Container maxWidth="xl">
      <TopBar />
      <Alert/>
      <FilterRobots />
      <Grid container spacing={2} alignItems="center">
        {robotsList.filter(filterRobots).map((robot: Robot) => (
          <Grid item xs={3} key={robot.name}>
            <RobotCard robot={robot} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
