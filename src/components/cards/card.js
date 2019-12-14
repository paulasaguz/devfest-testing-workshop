import React from 'react';
import useToggle from '../../hooks/useToggle';
import Bubble from '../bubble/index';
import VideoModal from '../modals/videoModal';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({
  title,
  netflixTitle = '',
  infoBubble = '',
  videoModalId,
  showBubble = false,
}) => {
  const [value, toggleValue] = useToggle(true);
  const [showModal, setModal] = useToggle(false);

  const activeVideoModal = typeof videoModalId !== 'undefined';
  const getHeader = () => (
    <div className='section-title'>
      <h1 className='title' data-testid='card-title'>
        {title}
      </h1>
      {typeof netflixTitle !== 'undefined' && (
        <span className='subtitle' data-testid='card-subtitle'>
          {netflixTitle}
        </span>
      )}
      <div className='button-actions'>
        {activeVideoModal && (
          <button
            className='button-option'
            onClick={setModal}
            data-testid='open-video'
            aria-hidden
          >
            Ver trailer +
            </button>
        )}
        {!value && (
          <button
            className='button-option'
            data-testid='description-open'
            onClick={toggleValue}
            aria-hidden
          >
            Descripción
            </button>
        )}
      </div>
    </div>
  );

  const getBubble = () => <Bubble onClick={toggleValue} content={infoBubble} />;

  return (
    <div className='card-container'>
      <div className='grid-card'>
        {getHeader()}
        {value && showBubble && getBubble()}
        {activeVideoModal && showModal && <VideoModal onClick={setModal} videoId={videoModalId} title='card_modal' />}
      </div>
    </div>
  );
};

Card.propTypes = {
  /** Title for the header */
  title: PropTypes.node.isRequired,
  /** Subtitle for the header */
  subTitle: PropTypes.string,
  /** Info bubble element */
  infoBubble: PropTypes.node,
  /** Video id */
  videoModalId: PropTypes.string,
};

export default Card;