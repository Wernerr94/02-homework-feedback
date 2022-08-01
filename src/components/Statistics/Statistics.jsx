import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        {total ? (
          <>
            <h2>Statistics</h2>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>Total : {total}</p>
            <p>Positive feedback : {positivePercentage}%</p>
          </>
        ) : null}
      </>
    );
  }
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
