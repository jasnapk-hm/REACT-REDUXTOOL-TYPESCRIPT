import React from 'react';
import { Container, LogoContainer, TitleContainer } from './style';

const Header = () => {
    return (
        <div>
            <Container>
            <LogoContainer>
                <img src="https://dog.ceo/img/dog-api-logo.svg" alt='dog-img'></img>
            </LogoContainer>
            <TitleContainer>Dog image find App</TitleContainer>
            </Container>
        </div>
    );
}

export default Header;
