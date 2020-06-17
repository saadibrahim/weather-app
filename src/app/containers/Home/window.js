import React, { useState } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import {
  BarChart,
  Error,
  Loader,
  Pagination,
  Title,
  UnitsToggle,
  WeatherCard,
} from "../../components";

export default function Home({ forecast, toggleDisplayUnits, onChangePage }) {
  const { fetching, data, error, units, page } = forecast;
  const [selectedCard, onCardSelection] = useState(null);

  if (fetching) {
    return <Loader />;
  }

  return (
    <Container maxWidth="sm">
      {error ? (
        <Error message={error} />
      ) : (
        <>
          <Title
            text={`Weather forecast for ${data.city.name}, ${data.city.country}`}
          />

          <UnitsToggle toggleDisplayUnits={toggleDisplayUnits} units={units} />

          <Pagination
            page={page}
            totalPages={data.totalPages}
            onChangePage={onChangePage}
            onCardSelection={onCardSelection}
          />

          <Box mb="1.5em">
            <Grid container spacing={2}>
              {data.results.map((item) => {
                return (
                  <WeatherCard
                    key={item.date}
                    item={item}
                    selectedCard={selectedCard}
                    units={units}
                    onCardSelection={onCardSelection}
                  />
                );
              })}
            </Grid>
          </Box>

          {selectedCard && (
            <BarChart
              data={
                data.results.find((item) => item.date === selectedCard).list
              }
            />
          )}
        </>
      )}
    </Container>
  );
}
