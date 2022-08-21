import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            tags={image.tags}
            modalImage={image.largeImageURL}
            modalToggle={toggleModal}
          />
        );
      })}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,

  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
