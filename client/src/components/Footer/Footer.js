import React from 'react';

import TextButton from '../Button/TextButton/TextButton';
import Icon from '../Icon/Icon';

const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <TextButton bold small darkBlue>
        ABOUT
      </TextButton>
      <TextButton bold small darkBlue>
        HELP
      </TextButton>
      <TextButton bold small darkBlue>
        PRESS
      </TextButton>
      <TextButton bold small darkBlue>
        API
      </TextButton>
      <TextButton bold small darkBlue>
        JOBS
      </TextButton>
      <TextButton bold small darkBlue>
        PRIVACY
      </TextButton>
      <TextButton bold small darkBlue>
        TERMS
      </TextButton>
    </div>
    <div className="footer__right">
      <h4
        className="heading-4 color-grey font-bold"
        style={{ display: 'flex', alignItems: 'center' }}>
        Red Integral Cannábica
        
      </h4>
    </div>
  </footer>
);

export default Footer;
