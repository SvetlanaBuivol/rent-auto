import React from "react";
import { NavContainer, NavLinkStyled, StyledLink } from "./Navigation.styled";

const Navigation = () => {
    return (
        <NavContainer>
            <NavLinkStyled>
                <StyledLink to="/">Home</StyledLink>
            </NavLinkStyled>
            <NavLinkStyled>
                <StyledLink to="/catalog">Catalog</StyledLink>
            </NavLinkStyled>
            <NavLinkStyled>
                <StyledLink to="/favorites">Favorites</StyledLink>
            </NavLinkStyled>
        </NavContainer>
    )
}

export default Navigation; 