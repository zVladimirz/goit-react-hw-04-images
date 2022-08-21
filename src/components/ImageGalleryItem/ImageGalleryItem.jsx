import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, tags, modalImage, modalToggle }) => {
  return (
    <>
      <ImageGalleryItemStyled onClick={() => modalToggle(modalImage, tags)}>
        <ImageGalleryItemImage
          src={imageUrl}
          alt={tags}
        ></ImageGalleryItemImage>
      </ImageGalleryItemStyled>
    </>
  );
};

ImageGalleryItem.propTypes = {

  imageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalImage: PropTypes.string.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
