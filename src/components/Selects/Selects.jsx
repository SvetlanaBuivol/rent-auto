import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makes from '../../assets/data/makes.json';
import prices from '../../assets/data/prices.json';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Selects = ({adverts}) => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
    const [filterStatus, setFilterStatus] = useState(null);
    const [mileageRange, setMileageRange] = useState({ from: '', to: '' });
    const [isFiltering, setIsFiltering] = useState(false);

  const dispatch = useDispatch();

  const makesOptions = makes.map(make => ({
    value: make,
    label: make,
  }));

  const priceOptions = prices.map(price => {
    return {
      value: price,
      label: price.toString(),
    };
  });
    
    useEffect(() => {
        if (isFiltering) {
            filterAdverts();
         setIsFiltering(false)   
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMake, selectedPrice, mileageRange, isFiltering, ]);

  const filterAdverts = () => {
    let filteredAdverts = [...adverts];

    if (selectedMake) {
      filteredAdverts = filteredAdverts.filter(
        advert => advert.make === selectedMake.value
      );
    }

    if (selectedPrice) {
      filteredAdverts = filteredAdverts.filter(
        advert => advert.rentalPrice <= `$${selectedPrice.value}`
      );
      }
      
    //   if (mileageRange.from !== '' || mileageRange.to !== '') {
    //       const from = parseFloat(mileageRange.from);
    //       const to = parseFloat(mileageRange.to);

    //       if (!isNaN(from) && !isNaN(to)) {
    //           filteredAdverts = filteredAdverts.filter(advert => advert.mileage >= from && advert.mileage <= to)
    //       }
      //   }
      
      const from = mileageRange.from !== '' ? parseInt(mileageRange.from, 10) : 0;
      const to = mileageRange.to !== '' ? parseInt(mileageRange.to, 10) : 1000000;

      filteredAdverts = filteredAdverts.filter(advert => advert.mileage >= from && advert.mileage <= to)

    if (filteredAdverts.length === 0) {
      setFilterStatus('No adverts match your criteria');
    } else {
      setFilterStatus(null);
    }

    dispatch(setFilter(filteredAdverts));
  };

  const handleChangeMake = selectedOption => {
    setSelectedMake(selectedOption);
    console.log(
      `Selected Make: ${selectedOption ? selectedOption.label : 'null'}`
    );
  };

  const handleChangePrice = selectedOption => {
    setSelectedPrice(selectedOption);
    };
    
    const handleMileageChange = (field, value) => {
        console.log(`Changed ${field} to: `, value)
        setMileageRange(prevState => ({
            ...prevState,
            [field]: value,
        }))
    }

    const handleSearch = () => {
        console.log('From: ', mileageRange.from)
        console.log('To: ', mileageRange.to)
        setIsFiltering(true);
    }

  return (
    <div>
      <p>Car brand</p>
      <Select
        options={makesOptions}
        isSearchable
        placeholder="Enter the text"
        value={selectedMake}
        onChange={handleChangeMake}
      />
      <p>Price/ 1 hour</p>
      <Select
        options={priceOptions}
        isSearchable={false}
        placeholder="To $"
        value={selectedPrice}
        onChange={handleChangePrice}
          />
          <div>
              <input
                  type='number'
                  placeholder='From'
                  value={mileageRange.from}
                  onChange={e => handleMileageChange('from', e.target.value)}
              />
              <input
                  type='number'
                  placeholder='To'
                  value={mileageRange.to}
                  onChange={e => handleMileageChange('to', e.target.value)}
              />
          </div>

          <button onClick={handleSearch}>Search</button>
      {filterStatus && selectedMake !== null && selectedPrice !== null && (
        <p>{filterStatus}</p>
      )}
    </div>
  );
};

export default Selects;
