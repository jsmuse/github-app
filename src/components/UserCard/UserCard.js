import React from "react";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./UserCard.module.scss";

export default function UserCard(props) {
  return (
    <div className={styles.card}>
      <Grid container spacing={4}>
        <Grid container item xs={2} justify="flex-end" alignItems="center">
          <Link to="user">
            <Avatar
              className={styles.avatar}
              alt={props.name}
              src={props.imageLink}
            />
          </Link>
        </Grid>
        <Grid container item xs={8} alignItems="center">
          <Link to={props.name}>
            <Typography>{props.name}</Typography>
          </Link>
        </Grid>
        <Grid container item xs={2} alignItems="center">
          <a href={props.link} target="_blank">
            Кнопка
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
