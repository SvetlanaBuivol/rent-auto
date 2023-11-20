import React, { useState } from 'react';
import Select from 'react-select';
import makes from '../../assets/data/makes.json';
import prices from '../../assets/data/prices.json';
import { useDispatch } from 'react-redux';
import { setMake, setMileage, setRentalPrice } from 'redux/filter/filterSlice';
import {
  FromInput,
  FromToContainer,
  SearchBtn,
  SelectContainer,
  SelectName,
  ToInput,
  customSelectFrom,
  customSelectTo,
} from './Selects.styled';

const Selects = () => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });

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
    console.log(`Changed ${field} to: `, value);
    setMileageRange(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    dispatch(setMake(selectedMake));
    dispatch(setRentalPrice(selectedPrice));
    dispatch(setMileage(mileageRange));
  };

  return (
    <SelectContainer>
      <div>
        <SelectName>Car brand</SelectName>
        <Select
          styles={customSelectFrom}
          options={makesOptions}
          isSearchable
          placeholder="Enter the text"
          value={selectedMake}
          onChange={handleChangeMake}
        />
      </div>
      <div>
        <SelectName>Price/ 1 hour</SelectName>
        <Select
          styles={customSelectTo}
          options={priceOptions}
          isSearchable={false}
          placeholder="To $"
          value={selectedPrice}
          onChange={handleChangePrice}
        />
      </div>
      <div>
        <SelectName>Сar mileage / km</SelectName>
        <FromToContainer>
          <FromInput
            type="number"
            placeholder="From"
            value={mileageRange.from}
            onChange={e => handleMileageChange('from', e.target.value)}
            min="0"
            step="500"
          />
          <ToInput
            type="number"
            placeholder="To"
            value={mileageRange.to}
            onChange={e => handleMileageChange('to', e.target.value)}
            min="0"
            step="500"
          />
        </FromToContainer>
      </div>

      <SearchBtn onClick={handleSearch}>Search</SearchBtn>
    </SelectContainer>
  );
};

export default Selects;
