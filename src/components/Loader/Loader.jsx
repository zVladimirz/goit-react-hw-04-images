import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Audio } from 'react-loader-spinner';
import { LoaderBackdrop, LoaderContent } from './Loader.styled';

const modalRoot = document.querySelector('#loader-root');

export default class Loader extends Component {


  render() {
    return createPortal(
      <LoaderBackdrop>
        <LoaderContent>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
          />
        </LoaderContent>
      </LoaderBackdrop>,
      modalRoot
    );
  }
}
