import React, { useState, useEffect } from "react";
import { Avatar, Grid, CircularProgress, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

import styles from "./UserProfile.module.scss";

export default function UserProfile(props) {
  const { user } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUserInfo(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [user]);

  console.log("!", user, userInfo);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularProgress disableShrink />;
  } else {
    return (
      <Grid container item xs={10} className={styles.card}>
        <Grid container item xs={2} justify="flex-end" alignItems="center">
          <Avatar
            className={styles.avatar}
            alt={userInfo}
            src={userInfo.avatar_url}
          />
        </Grid>
        <Grid container item xs={8} alignItems="center">
          <Typography>{userInfo.name}</Typography>
          <Typography>{userInfo.company}</Typography>
          <Typography>{userInfo.location}</Typography>
          <Typography>{userInfo.created_at}</Typography>
        </Grid>
      </Grid>
    );
  }
}
