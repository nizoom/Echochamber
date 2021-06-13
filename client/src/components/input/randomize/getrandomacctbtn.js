import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


// instead of seperate fetch then pass the predetermined name from list to the fetch request 
// in app.js

const GetRandomAcctBtn = (props) => {

    const useStyles = makeStyles(theme => ({ //button styling

        root: {
            color: "#89EBCF",
            borderColor: "#89EBCF",
            fontSize: "1.2em",
            borderWidth: "5px",
            height: "70px",
            // [theme.breakpoints.up('xs')]: {
            //     marginTop: '10px',
            // },

            '&:hover': {
                color: "#89EBCF",
                borderColor: "#89EB90",
                fontSize: "1.2em",
                borderWidth: "5px",
            },

        }
    }));




    const classes = useStyles();

    const allNames = [
        "BarackObama", "justinbieber", "katyperry", "rihanna", "Cristiano", "taylorswift13", "ladygaga",
        "ArianaGrande", "KimKardashian", "narendramodi", "cnnbrk", "elonmusk", "britneyspears", "BillGates",
        "ddlovato", "neymarjr", "shakira", "jimmyfallon", "nytimes", "KingJames", "SrBachchan",
        "NASA", "JLo", "Oprah", "BeingSalmanKhan", "Drake", "realmadrid", "espn", "FCBarcelona",
        "Harry_Styles", "KevinHart4real", "BTS_twt", "wizkhalifa", "ChampionsLeague", "JoeBiden",
        "ConanOBrien", "deepikapadukone", "premierleague", "MesutOzil1088", "NatGeo", "TheEconomist",
        "danieltosh", "Reuters", "coldplay", "Eminem", "BernieSanders", "AOC", "KamalaHarris", "chooselove", "amnestyusa"
    ]


    function getRandomArbitrary(min, max) {
        console.log("fired")
        const result = Math.random() * (max - min) + min;
        return Math.floor(result)

    }



    const getRandomName = () => {
        const index = getRandomArbitrary(0, 49);
        const chosenName = allNames[index];
    }

    return (
        <div>
            <Button variant="outlined" color="primary" size="large"

                onClick={getRandomName}
                className={classes.root}
            > Random Account!  </Button>
        </div>
    )
}

export default GetRandomAcctBtn;