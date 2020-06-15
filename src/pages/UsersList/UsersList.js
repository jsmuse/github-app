import React, { useState, useEffect } from "react";
import { Pagination } from "@material-ui/lab";
import { CircularProgress, Grid } from "@material-ui/core";

import UserCard from "../../components/UserCard/UserCard";
import styles from "./UsersList.module.scss";

export default function UsersList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    fetch(`https://api.github.com/users?since=${pagination}00`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [pagination]);

  const handleChange = (event, page) => {
    setPagination(page);
  };

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularProgress disableShrink />;
  } else {
    return (
      <>
        <Grid container item xs={10}>
          {items.map(({ login, avatar_url, html_url }) => (
            <UserCard
              key={login}
              name={login}
              imageLink={avatar_url}
              link={html_url}
            />
          ))}
        </Grid>

        <Pagination
          size="large"
          count={4}
          page={pagination}
          onChange={handleChange}
          className={styles.pagination}
        />
      </>
    );
  }
}
