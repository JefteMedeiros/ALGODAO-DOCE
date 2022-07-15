import styled from 'styled-components';

export const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style-type: none;

  @media screen and (max-width: 650px) {
    margin-top: 13px;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 5px 0;
  color: #fff;
  background-color: #be80d0;
`;

export const SocialIcon = styled.a`
  svg {
    color: #fff;
    font-size: 2rem;

    &:hover {
      transform: scale(1.15);
      transition: all 200ms ease-in-out;
      color: #de80b0;
    }
  }
`;

export const SocialMedia = styled.h1`
  color: #fff;
  letter-spacing: 1px;
  font-size: 1.2rem;
  margin-right: -0.8rem;

  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const Logo = styled.a`
  display: flex;
  background-color: #fff;
  padding: 5px 10px;
  border: 2px solid #de80b0;
  border-radius: 50px;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.02);
  }
`;

export const FooterLogo = styled.img`
  width: 180px;

  @media screen and (max-width: 650px) {
    width: 150px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;

  background-color: #26c7d9;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
