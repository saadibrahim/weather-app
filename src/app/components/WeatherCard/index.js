import React from "react";
import PropTypes from "prop-types";
import { Grid, Link, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    cursor: "pointer",
  },
});

function WeatherCard({ item, selectedCard, units, onCardSelection }) {
  const classes = useStyles();

  return (
    <Grid key={item.date} item xs={6} sm={4}>
      <Link
        className={classes.card}
        underline="none"
        onClick={() => onCardSelection(item.date)}
      >
        <Card
          raised={selectedCard && item.date === selectedCard ? true : false}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {item.date}
            </Typography>
            <Typography variant="h5" component="h2" color="primary">
              {item.avgTemp.toFixed(1)} &deg;
              {units === "metric" ? "C" : "F"}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

WeatherCard.propTypes = {
  units: PropTypes.oneOf(["metric", "imperial"]).isRequired,
  onCardSelection: PropTypes.func.isRequired,
  selectedCard: PropTypes.string,
  item: PropTypes.shape({
    avgTemp: PropTypes.number,
    date: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        temp: PropTypes.number,
        time: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default WeatherCard;
