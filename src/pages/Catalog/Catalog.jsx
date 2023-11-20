import CarsList from 'components/CarsList/CarsList';
import Selects from 'components/Selects/Selects';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllAdvertssAsync,
  fetchCarsAsync,
} from 'redux/adverts/advertsOperations';
import { incrementPage } from 'redux/adverts/advertsSlice';
import { selectFilteredAdverts } from 'redux/filter/filterSelectors';

const Catalog = () => {
  const currentPage = useSelector(state => state.adverts.currentPage);
  const filteredAdverts = useSelector(selectFilteredAdverts);
    const dispatch = useDispatch();
    
    console.log('Filtered in Catalog: ', filteredAdverts)

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchAllAdvertssAsync(currentPage + 1));
  };

  useEffect(() => {
    dispatch(fetchAllAdvertssAsync(currentPage));
    dispatch(fetchCarsAsync());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPage, JSON.stringify(filteredAdverts)]);

  const totalAds = filteredAdverts.length;
  const isLastPage = totalAds % 12 === 0 && totalAds > 0;

  return (
    <div>
      <Selects />
      <CarsList
        filteredAdverts={filteredAdverts}
        isLastPage={isLastPage}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Catalog;
