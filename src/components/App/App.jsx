import { useState, useEffect } from 'react';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';

const axios = require('axios');

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [BASE_URL, setBASE_URL] = useState('https://pixabay.com/api');
  const [API_KEY, setAPI_KEY] = useState('27704892-de5059e1c4b826ebc44d6e413');
  const [pageItem, setPageItem] = useState(20);
  const [totalHits, setTotalHits] = useState(0);
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState('');
  const [modalTags, setModalTags] = useState('');

  useEffect(() => {
    fetchImages();
  }, [searchQuery, currentPage]);

  const handlePageNext = () => {
    setCurrentPage(state => state + 1);
  };

  const handleSubmit = ({ searchQueryForm }, { resetForm }) => {
    if (searchQueryForm !== '' && searchQueryForm !== searchQuery) {
      setCurrentPage(1);
      setSearchQuery(searchQueryForm);
    }
    // resetForm();
  };
  const toggleModal = (image, tags) => {
    setShowModal(state => !state);
    setModalImage(image);
    setModalTags(tags);
  };

  async function fetchImages() {
    setShowLoader(true);

    try {
      const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=${pageItem}&page=${currentPage}`;
      const resp = await axios.get(url);

      if (currentPage === 1) {
        setTotalHits(resp.data.totalHits);
        setTotalPage(Math.ceil(resp.data.totalHits / pageItem));
      }
      const imagehttp = resp.data.hits.map(
        ({ id, largeImageURL, webformatURL, tags }) => {
          return {
            id,
            largeImageURL,
            webformatURL,
            tags,
          };
        }
      );

      if (resp.data.totalHits !== 0) {
        setImages(state =>
          currentPage > 1 ? [...state, ...imagehttp] : [...imagehttp]
        );
      } else {
        setImages([]);
      }
    } catch (err) {
      console.error('axiosget error');
    } finally {
      setShowLoader(false);
    }
  }

  return (
    <Box position="relative" as="main">
      <Searchbar onSubmit={handleSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} toggleModal={toggleModal}></ImageGallery>
      )}
      {currentPage < totalPage && (
        <Box textAlign="center">
          <Button onClick={handlePageNext}>Load more</Button>
        </Box>
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          {' '}
          <img src={modalImage} alt={modalTags} />
        </Modal>
      )}
      {showLoader && <Loader />}
    </Box>
  );
}

export default App;
