import React, { useEffect } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteAdverts } from 'redux/adverts/advertsSelectors';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';

const Favorites = () => {
  const favoritesAdverts = useSelector(selectFavoriteAdverts)

  return (
    <>
      <HeaderTitle title={'Favorites'} />
      <CarsList
        filteredAdverts={favoritesAdverts}
      />
    </>
    )
};

export default Favorites;
