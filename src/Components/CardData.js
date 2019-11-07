import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    card: {
      maxWidth: 500,
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
  });

    export default function SimpleCard(props) {
    const classes = useStyles();
    const { title, date, description, src } = props;

    return (
        <Card className={classes.card}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
             {date}
            </Typography>
            <Typography variant="h5" component="h2">
            {title}
            </Typography>
            <CardMedia
                className={classes.media}
                image={src}
                title={title}
            />
            <Typography variant="body2" component="p">
            {description}
            </Typography>
        </CardContent>
        </Card>
    );
    }

