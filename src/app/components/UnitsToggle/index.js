import React from "react";
import PropTypes from "prop-types";
import { Box, ButtonGroup, Button } from "@material-ui/core";

function UnitsToggle({ toggleDisplayUnits, units }) {
  return (
    <Box mb="1em">
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={toggleDisplayUnits} disabled={units === "metric"}>
          &deg;C
        </Button>
        <Button onClick={toggleDisplayUnits} disabled={units === "imperial"}>
          &deg;F
        </Button>
      </ButtonGroup>
    </Box>
  );
}

UnitsToggle.propTypes = {
  units: PropTypes.oneOf(["metric", "imperial"]).isRequired,
  toggleDisplayUnits: PropTypes.func.isRequired,
};

export default UnitsToggle;
