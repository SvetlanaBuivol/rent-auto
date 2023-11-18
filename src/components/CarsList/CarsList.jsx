import CarItem from 'components/CarItem/CarItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllAdverts,
} from 'redux/adverts/advertsSelectors';
import { CardListWrap, LoadMoreBtn } from './CardList.styled';
import { incrementPage } from 'redux/adverts/advertsSlice';
import { fetchAllAdvertssAsync } from 'redux/adverts/advertsOperations';

const CarsList = () => {
    const currentPage = useSelector(state => state.adverts.currentPage)
    const allAdverts = useSelector(selectAllAdverts);
    const dispatch = useDispatch()

    const handleLoadMore = () => {
        dispatch(incrementPage())
        dispatch(fetchAllAdvertssAsync(currentPage + 1))
    }

     useEffect(() => {
        if (allAdverts.length === 0) {
            dispatch(fetchAllAdvertssAsync(currentPage))
        }
     }, [dispatch, allAdverts, currentPage])
    
    const totalAds = allAdverts.length;
    const isLastPage = totalAds % 12 === 0 && totalAds > 0;
    console.log(allAdverts.length)
  return (
    <>
      <CardListWrap>
        {allAdverts.map(advert => (
          <CarItem key={advert.id} car={advert} />
        ))}
          </CardListWrap>
          {isLastPage ? (<LoadMoreBtn type='button' onClick={handleLoadMore} >Load more</LoadMoreBtn>) : (<p>You have loaded all adverts</p>) }
    </>
  );
};

export default CarsList;
