import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";

function Pagination({ page, totalPages, onChangePage, onCardSelection }) {
  return (
    <Box my="1.5em" justifyContent="space-between" display="flex">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          onCardSelection(null);
          onChangePage(page - 1);
        }}
        disabled={page === 1}
      >
        &lt;
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          onCardSelection(null);
          onChangePage(page + 1);
        }}
        disabled={page === totalPages}
      >
        &gt;
      </Button>
    </Box>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onCardSelection: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
