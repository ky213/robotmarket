import React from "react";
import moment from "moment";
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

export default function RobotCard(props: Robot) {
  return (
    <Paper elevation={5}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={props.name} subheader={props.material} />
        <CardMedia component="img" image={props.image} alt="Paella dish" />
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            Created at: {moment(new Date(props.createdAt))?.format(DATE_FORMAT)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Button variant="outlined" disabled={props.stock == 0}>
                Add to cart
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h6" color='GrayText' mr={1}>
                LKJ {props.price}
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Paper>
  );
}
