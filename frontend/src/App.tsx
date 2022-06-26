import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import axios from "config/axios";
import { RobotCard, TopBar } from "components";
import { GET_ROBOTS, RESET_ROBOTS } from "store/actions/robot.actions";
import { RootState } from "store/models/redux.model";
import { Robot } from "store/models/robot.model";

function App() {
  const dispatch = useDispatch();
  const { robotsList } = useSelector((state: RootState) => state.robots);

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

  return (
    <Container maxWidth="xl">
      <TopBar />
      <Grid container spacing={2} alignItems='center' style={{marginTop: '20px'}}>
        {robotsList.map((robot: Robot) => (
          <Grid item xs={3}>
            <RobotCard
              key={robot.name}
              name={robot.name}
              image={robot.image}
              stock={robot.stock}
              price={robot.price}
              createdAt={robot.createdAt}
              material={robot.material}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
