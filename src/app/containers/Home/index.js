import React, { Component } from "react";
import { connect } from "react-redux";
import forecastActions from "../../actions/forecast";
import forecastSelectors from "../../selectors/forecast";

import HomeView from "./window";

class Home extends Component {
  componentDidMount() {
    const { getForecast } = this.props;
    getForecast();
  }

  render() {
    const { forecast, toggleDisplayUnits, onChangePage } = this.props;

    return (
      <HomeView
        forecast={forecast}
        toggleDisplayUnits={toggleDisplayUnits}
        onChangePage={onChangePage}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  forecast: forecastSelectors.getForecastProcessed(state),
});

const mapDispatchToProps = (dispatch) => ({
  getForecast: () => dispatch(forecastActions.getForecast()),
  toggleDisplayUnits: () => dispatch(forecastActions.toggleDisplayUnits()),
  onChangePage: (page) => dispatch(forecastActions.changePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
