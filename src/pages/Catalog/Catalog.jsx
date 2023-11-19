import CarsList from 'components/CarsList/CarsList';
import Selects from 'components/Selects/Selects';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAdvertssAsync } from 'redux/adverts/advertsOperations';
import { selectAllAdverts } from 'redux/adverts/advertsSelectors';
import { incrementPage } from 'redux/adverts/advertsSlice';
import { selectFilteredAdverts } from 'redux/filter/filterSelectors';

const Catalog = () => {
  const currentPage = useSelector(state => state.adverts.currentPage);
  const allAdverts = useSelector(selectAllAdverts);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const dispatch = useDispatch();

  console.log(filteredAdverts);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchAllAdvertssAsync(currentPage + 1));
  };

  useEffect(() => {
    dispatch(fetchAllAdvertssAsync(currentPage));
  }, [dispatch, currentPage]);

  const totalAds = allAdverts.length;
  const isLastPage = totalAds % 12 === 0 && totalAds > 0;

  return (
    <div>
      <Selects adverts={allAdverts} />
      <CarsList
        filteredAdverts={filteredAdverts.length > 0 ? filteredAdverts : allAdverts}
        isLastPage={isLastPage}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Catalog;
