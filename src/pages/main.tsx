import React, { useState, SyntheticEvent } from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputForm from "../components/InputForm";
import WhetherInfo from "../components/WhetherInfo";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  //   heroContent: {
  //     backgroundColor: theme.palette.background.paper,
  //     padding: theme.spacing(8, 0, 6),
  //   },
  //   heroButtons: {
  //     marginTop: theme.spacing(4),
  //   },
  //   cardGrid: {
  //     paddingTop: theme.spacing(8),
  //     paddingBottom: theme.spacing(8),
  //   },
  //   card: {
  //     height: "100%",
  //     display: "flex",
  //     flexDirection: "column",
  //   },
  //   cardMedia: {
  //     paddingTop: "56.25%", // 16:9
  //   },
  //   cardContent: {
  //     flexGrow: 1,
  //   },
  //   footer: {
  //     backgroundColor: theme.palette.background.paper,
  //     padding: theme.spacing(6),
  //   },
  //   textField: {
  //     width: "100%",
  //   },
}));

const Main = () => {
  const classes = useStyles();
  const [word, setWord] = useState("");
  const apiKey = 'a10e2b304a8e0f35736d1e73132248eb';

  function handleSubmit(value: string) {
    console.log("valor del input", value);
    setWord(value);
    getWeather();
  }

  //* Funcion asincrona que hace la peticion a openweather
  async function getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${word}`;
    const response = await fetch(URI);
    const data = await response.json();
    console.log(data);
    return data;
  }

  console.log("word :", word);
  // console.log("setWord :", setWord);
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Whether App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <InputForm onSubmit={handleSubmit} />
        <WhetherInfo wordSearch={word} />
      </main>
    </>
  );
};

export default Main;
