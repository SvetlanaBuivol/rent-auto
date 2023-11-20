import React from "react";
import { AccText, FeaturesText, HeadRentalCond, ModalCarDescr, ModalCarHeader, ModalCarInfo, ModalImg, ModalImgContainer, ModalTextBtn, RentCar, TextBtnWrapper } from "./ModalAdvertContent.styled";
import { getAddressString } from "helpers/getAddressString";
import checkText from "helpers/textFormatter";

const ModalAdvertContent = ({ car }) => {
    const formattedAddress = getAddressString(car.address);

    return (
        <>
            <ModalImgContainer>
                <ModalImg src={car.img} alt={`${car.make} ${car.model}`} />
                </ModalImgContainer>
            <ModalCarHeader>{`${car.make}, ${car.year}`}</ModalCarHeader>
            <ModalCarInfo>
        {formattedAddress} |{' '}
        {`${car.rentalCompany} | ${car.type} | ${car.id} | ${car.functionalities[0]} | Engine Size: ${car.engineSize}`}
            </ModalCarInfo>
            <ModalCarDescr>{car.description}</ModalCarDescr>
            <AccText>Accessories and functionalities:</AccText>
            <FeaturesText>{`${car.functionalities.join(' | ')} | ${car.accessories.join(' | ')}`}</FeaturesText>
            <HeadRentalCond>Rental Conditions: </HeadRentalCond>
            <TextBtnWrapper>
              {car.rentalConditions?.split("\n").map((word, idx) => (
                  <ModalTextBtn key={idx}>{checkText(word)}</ModalTextBtn>  
              ))}
                <ModalTextBtn>Mileage:<span>{car.mileage && car.mileage / 1000}</span></ModalTextBtn>
                <ModalTextBtn>Price:<span>{ car.rentalPrice && car.rentalPrice.slice(1)}$</span></ModalTextBtn>
            </TextBtnWrapper>
            <RentCar type="button">Rental car</RentCar>
        </>
        
    )
}

export default ModalAdvertContent;