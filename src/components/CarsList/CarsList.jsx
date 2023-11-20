import CarItem from 'components/CarItem/CarItem';
import React from 'react';
import { CardListWrap, LoadMoreBtn, NotifyMessage } from './CardList.styled';


const CarsList = ({filteredAdverts, isLastPage, handleLoadMore}) => {

  return (
    <>
      <CardListWrap>
        {filteredAdverts.map(advert => (
          <CarItem key={advert.id} car={advert} />
        ))}
          </CardListWrap>
          {isLastPage ? (<LoadMoreBtn type='button' onClick={handleLoadMore} >Load more</LoadMoreBtn>) : (<NotifyMessage>That's all adverts</NotifyMessage>) }
    </>
  );
};

export default CarsList;
