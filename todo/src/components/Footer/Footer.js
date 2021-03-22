import React from 'react';

const Footer = ({count,onClickFooter}) => (
  <footer > Осталось выполнить вот столько дел: {count} </footer>
);

Footer.defaultProps = {
  count: 0
};



export default Footer;
