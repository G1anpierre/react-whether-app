import React, { useState, SyntheticEvent } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textField: {
    width: "100%",
  },
}));

interface InputProps {
  onSubmit: (value: string) => void;
}

const InputForm: React.FC<InputProps> = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  function handleChange(event: SyntheticEvent) {
    event.preventDefault();
    console.log("sear >:", search);
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  }

  return (
    <>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Wheather App
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Overdrop is one of the newer weather apps on the list,
            comparatively. It features a sleek design that is mostly minimal but
            just flashy enough to be enjoyable.
            {/* The app also features
              real-time weather data, a 24-hour forecast, a seven day forecast,
              severe weather alerts, six themes, various widgets, and more. */}
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={2}>
                <Button variant="contained" color="secondary">
                  Talk
                </Button>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  label="Search City"
                  variant="outlined"
                  className={classes.textField}
                  value={search}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => props.onSubmit(search)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      {/* End hero unit */}
    </>
  );
};

export default InputForm;
