import React from 'react';
import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from 'redux/adverts/advertsSelectors';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';

const Favorites = () => {
  const favoritesAdverts = useSelector(selectFavoriteAdverts);

  return (
    <>
      <HeaderTitle title={'Favorites'} />
      <CarsList filteredAdverts={favoritesAdverts} />
    </>
  );
};

export default Favorites;
