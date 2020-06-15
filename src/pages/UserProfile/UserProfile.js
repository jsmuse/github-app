import React, { useState, useEffect } from "react";
import { Avatar, Grid, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

import styles from "./UserProfile.module.scss";

export default function UserProfile() {
  const { user } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`, { method: "GET" })
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

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularProgress disableShrink />;
  } else {
    return (
      <Grid container item xs={10} className={styles.card}>
        <Avatar
          className={styles.avatar}
          alt={userInfo.name}
          src={userInfo.avatar_url}
        />
        <Grid container item xs direction="column" alignItems="flex-start">
          <p className={styles.name}>{userInfo.name}</p>
          <p className={styles.about}>
            {userInfo.company} {userInfo.location}
          </p>
          <p className={styles.date}>
            From{" "}
            {userInfo &&
              new Date(userInfo.created_at).toLocaleDateString("en-US")}
          </p>
        </Grid>
      </Grid>
    );
  }
}
