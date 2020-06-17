import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function Title({ text }) {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {text}
    </Typography>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
