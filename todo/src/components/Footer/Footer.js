import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({count,onClickFooter}) => (
  <footer > Осталось выполнить вот столько дел: {count} </footer>
);


Footer.propTypes = {
  count: PropTypes.number.isRequired
};



export default Footer;
