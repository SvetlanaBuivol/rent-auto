import CarItem from 'components/CarItem/CarItem';
import React from 'react';
import { CardListWrap, LoadMoreBtn } from './CardList.styled';


const CarsList = ({filteredAdverts, isLastPage, handleLoadMore}) => {

  return (
    <>
      <CardListWrap>
        {filteredAdverts.map(advert => (
          <CarItem key={advert.id} car={advert} />
        ))}
          </CardListWrap>
          {isLastPage ? (<LoadMoreBtn type='button' onClick={handleLoadMore} >Load more</LoadMoreBtn>) : (<p>You have loaded all adverts</p>) }
    </>
  );
};

export default CarsList;
