import CarItem from "components/CarItem/CarItem";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllAdverts, selectFavoriteAdverts } from "redux/adverts/advertsSelectors";
import { CardListWrap } from "./CardList.styled";

const CarsList = () => {
    const allAdverts = useSelector(selectAllAdverts);
    const favorites = useSelector(selectFavoriteAdverts);


    console.log(favorites);


    return (
        <CardListWrap>
            {allAdverts.map(advert => (<CarItem key={advert.id} car={advert} /> ))}
        </CardListWrap>
    )
}

export default CarsList;