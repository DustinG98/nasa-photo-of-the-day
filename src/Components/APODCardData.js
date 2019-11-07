import React, { useState, useEffect, useRef, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import MyApp from './DatePicker'
import axios from "axios";
import Button from '@material-ui/core/Button';

let ApodCurrentDate;
window.addEventListener('load', function () {
    ApodCurrentDate = document.getElementsByClassName("currentDate")[0].textContent;
})

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: '30vw'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    date: {
      fontSize: 10,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 300,
        margin: '10px 10px',
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

    export default function SimpleCard(props) {
    const classes = useStyles();
    const { title } = props;
    const [cards, setCards] = useState({});
    const [isSending, setIsSending] = useState(false)
    const isMounted = useRef(true)
    
    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=87hNAagthnGAhl8upa8HuDVjX2oNSbfl18FsyPLu&`)
        .then(response => {
          setCards(response.data)
        })
      return () => {
        isMounted.current = false
        
      }
    }, [])

    const sendRequest = useCallback(() => {
        if(isSending) return
        setIsSending(true);
        setCards({});
        ApodCurrentDate = document.getElementsByClassName("currentDate")[0].textContent;
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=87hNAagthnGAhl8upa8HuDVjX2oNSbfl18FsyPLu&date=${ApodCurrentDate}`)
        .then(response => {
            setCards(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
        if(isMounted.current)
          setIsSending(false)
    }, [isSending])
    return (
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h3" component="h2">
              APOD Pictures
            </Typography>
            <MyApp />
            <Button variant="contained" color="primary" className={classes.button} onClick={sendRequest}>
              Refresh
            </Button>
            <Typography variant="h5" component="h2">
            {cards.title}
            </Typography>
            <CardMedia
                className={classes.media}
                image={cards.url}
                title={title}
            />
            <Typography variant="body2" component="p">
            {cards.explanation}
            </Typography>
        </CardContent>
        </Card>
    );
    }

