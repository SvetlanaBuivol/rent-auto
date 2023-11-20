// import { getAddressString } from "helpers/getAddressString";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from 'redux/adverts/advertsSlice';
import {
  AdvertCard,
  CarHeader,
  CarImg,
  CarInfo,
  CarHeadWrap,
  Price,
  LearnMoreBtn,
  HeartBtn,
} from './CarItem.styled';
import { getAddressString } from 'helpers/getAddressString';
import { ReactSVG } from 'react-svg';
import heart from '../../assets/svg/heart.svg';
import blueHeart from '../../assets/svg/blueHeart.svg';
import { selectFavoriteAdverts } from 'redux/adverts/advertsSelectors';
import ModalWrapper from 'components/Modal/ModalWrapper/ModalWrapper';
import ModalAdvertContent from 'components/Modal/ModalAdvertContent/ModalAdvertContent';
// import { useDispatch, useSelector } from "react-redux";
// import { favoritesSelector } from "redux/favorites/favoritesSelector";

const CarItem = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    // accessories,
    address,
    // mileage,
    } = car;
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteAdverts);
  const isFavorite = favorites.some(advert => advert.id === id);

  const handleToggleFavorites = car => {
    dispatch(toggleFavorites(car));
    };
    
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const formattedAddress = getAddressString(address);
    

  return (
    <AdvertCard>
      <CarImg src={img} alt={`${make} ${model}`} />
      <HeartBtn type="button" onClick={() => handleToggleFavorites(car)}>
        {isFavorite ? (
          <ReactSVG src={blueHeart} style={{ fill: 'blue' }} />
        ) : (
          <ReactSVG src={heart} style={{ fill: 'blue' }} />
        )}
      </HeartBtn>

      <CarHeadWrap>
        <CarHeader>{`${make}, ${year}`}</CarHeader>
        <Price>{rentalPrice}</Price>
      </CarHeadWrap>
      <CarInfo>
        {formattedAddress} |{' '}
        {`${rentalCompany} | ${type} | ${id} | ${functionalities[0]}`}
      </CarInfo>

          <LearnMoreBtn type="button" onClick={openModal}>Learn more</LearnMoreBtn>
          
          <ModalWrapper isOpen={modalIsOpen} onClose={closeModal}>
              <ModalAdvertContent car={car} />
          </ModalWrapper>
    </AdvertCard>
  );
};

export default CarItem;
