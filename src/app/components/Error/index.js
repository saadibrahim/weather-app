import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function Error({ message }) {
  return (
    <Typography color="textSecondary" gutterBottom>
      {message}
    </Typography>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
