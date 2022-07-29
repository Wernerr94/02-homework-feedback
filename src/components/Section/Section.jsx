import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title } = this.props;
    const { children } = this.props;
    return (
      <>
        <h1>{title}</h1>
        {children}
      </>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
