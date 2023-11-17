// import { getAddressString } from "helpers/getAddressString";
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorites } from 'redux/adverts/advertsSlice';
import { AdvertCard, CarHeader, CarImg, CarInfo, CarHeadWrap, Price, LearnMoreBtn } from './CarItem.styled';
import { getAddressString } from 'helpers/getAddressString';
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
    
  const dispatch = useDispatch();

  const handleToggleFavorites = carId => {
    dispatch(toggleFavorites(carId));
    };
    
    const formattedAddress = getAddressString(address);

  return (
    <AdvertCard>
      <CarImg src={img} alt={`${make} ${model}`} />
      <button type="button" onClick={() => handleToggleFavorites(car)}>
        Fav
      </button>

        <CarHeadWrap>
          <CarHeader>{`${make}, ${year}`}</CarHeader>
          <Price>{rentalPrice}</Price>
        </CarHeadWrap>
        <CarInfo>{formattedAddress} | {`${rentalCompany} | ${type} | ${id} | ${functionalities[0]}`}
        </CarInfo>

      <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
    </AdvertCard>
  );
};

export default CarItem;
