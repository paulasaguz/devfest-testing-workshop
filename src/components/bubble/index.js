import React from 'react';

const Bubble = ({ content, onClick }) => (
  <div className='section-information-bubble' data-testid='header-bubble'>
    <React.Fragment>{content}</React.Fragment>
    <button
      className='section-information-bubble-close'
      data-testid='header-bubble-close'
      onClick={onClick}
      aria-hidden
    >
      Ver menos...
    </button>
  </div>
);

export default Bubble;