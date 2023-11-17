import CarsList from "components/CarsList/CarsList";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllAdvertssAsync } from "redux/adverts/advertsOperations";

const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllAdvertssAsync()).unwrap().catch(error => console.log(error.message))
    }, [dispatch])
    return (
        <div>
            <CarsList/>
        </div>
    )
}

export default Catalog;