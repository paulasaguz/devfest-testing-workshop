import React from 'react';
import Modal from './modal';

const VideoModal = ({ onClick, videoId, title }) => {
  return (
    <Modal onClick={onClick}>
      <div className='modalContainer video-modal'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?showinfo=0&modestbranding=1&version=3&loop=1&controls=2&rel=0&vq=hd1080&autoplay=1&origin=${window.location.origin}`}
          title={title}
          width='650'
          height='550'
          frameBorder='0'
          allowFullScreen
          allow='autoplay'
        />
      </div>
    </Modal>
  );
}

export default VideoModal;