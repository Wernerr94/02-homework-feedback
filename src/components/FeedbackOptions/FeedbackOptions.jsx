import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    const { options } = this.props;

    return (
      <>
        {Object.keys(options).map(el => (
          <Button key={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        ))}
      </>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
