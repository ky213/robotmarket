import React, { ComponentProps, useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Robot } from "store/models/robot.model";
import { DATE_FORMAT } from "config/constants";
import { ADD_ROBOT } from "store/actions/cart.actions";
import { RootState } from "store/models/redux.model";

export interface RobotCardProps extends ComponentProps<any> {
  robot: Robot;
}

export default function RobotCard({ robot }: RobotCardProps) {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const robotInTheCart = items.find(({ name }) => name === robot.name);
  const [remainingRobots, setRemainingRobots] = useState(0);

  const remaininRobots = () => {
    const rest = robot.stock - (robotInTheCart?.amount || 0);

    if (rest > 0) setRemainingRobots(rest);
    else setRemainingRobots(0);
  };

  const handleAddToCart = () => {
    dispatch({
      type: ADD_ROBOT,
      payload: robot,
    });
  };

    useEffect(() => {
      remaininRobots()
    })
    
  return (
    <Paper elevation={5}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={robot.name} subheader={robot.material} />
        <CardMedia component="img" image={robot.image} alt="Paella dish" />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            in stock: {remainingRobots}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Created at: {moment(new Date(robot.createdAt))?.format(DATE_FORMAT)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button variant="outlined" disabled={remainingRobots === 0} onClick={handleAddToCart}>
                Add to cart
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="GrayText" mr={1}>
                LKJ {robot.price}
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Paper>
  );
}
