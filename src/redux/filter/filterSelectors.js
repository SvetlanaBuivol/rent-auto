import { createSelector } from 'reselect';
import {
  selectAllCars,
  selectAllAdverts,
} from 'redux/adverts/advertsSelectors';

const selectFilter = state => state.filter;

export const selectFilteredAdverts = createSelector(
  [selectAllAdverts, selectAllCars, selectFilter],
  (adverts, allAdverts, filter) => {
    const { make, rentalPrice, mileage } = filter;

    if (!make && !rentalPrice && (!mileage.from || !mileage.to)) {
      return adverts;
    }

    return allAdverts.filter(car => {
      const numCarPrice = parseInt(car.rentalPrice.slice(1), 10);
      const numFilterPrice = rentalPrice
        ? parseInt(rentalPrice.value, 10)
        : null;

      const isMakeValid = make ? car.make === make.value : true;
      const isRentalPriceValid = rentalPrice
        ? numCarPrice <= numFilterPrice
        : true;
      const isMileageFromValid =
        mileage.from !== undefined ? car.mileage >= parseInt(mileage.from, 10) : true;
      const isMileageToValid =
            mileage.to !== undefined ? car.mileage <= parseInt(mileage.to, 10) : true;
    
        return (
           (make && rentalPrice && mileage.from && mileage.to) ? 
          (isMakeValid && isRentalPriceValid && isMileageFromValid && isMileageToValid) :
        (make && rentalPrice) ? 
          (isMakeValid && isRentalPriceValid) :
        (make && mileage.from && mileage.to) ?
          (isMakeValid && isMileageFromValid && isMileageToValid) :
        (rentalPrice && mileage.from && mileage.to) ?
          (isRentalPriceValid && isMileageFromValid && isMileageToValid) :
        (make) ? 
          (isMakeValid) :
        (rentalPrice) ?
          (isRentalPriceValid) :
        (mileage.from && mileage.to) ?
          (isMileageFromValid && isMileageToValid) :
        adverts
      );
    });
  }
);
