import React from "react";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";

import styles from "./UserCard.module.scss";

export default function UserCard(props) {
  return (
    <div className={styles.card}>
      <Grid container spacing={4}>
        <Grid container item xs={2} justify="flex-end" alignItems="center">
          <Avatar
            className={styles.avatar}
            alt={props.name}
            src={props.imageLink}
          />
        </Grid>
        <Grid container item xs={8} alignItems="center">
          <Typography>{props.name}</Typography>
        </Grid>
        <Grid container item xs={2} alignItems="center">
          <Button variant="contained" color="primary">
            Кнопка
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
