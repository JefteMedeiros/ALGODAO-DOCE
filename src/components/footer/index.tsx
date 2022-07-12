import React from "react";

import {
  Container,
  Logo,
  Icons,
  SocialIcon,
  FooterLogo,
  SocialMedia,
  FooterBottom,
} from "./styles";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const footer: React.FC = () => {
  return (
    <>
      <Container>
        <Logo title="Voltar ao topo" href="#">
          <FooterLogo src="/images/logo.webp" alt="" />
        </Logo>
        <Icons>
          <SocialMedia>Redes sociais:</SocialMedia>
          <li>
            <SocialIcon
              href="https://web.facebook.com/escolainfantilalgodaodoceemcanoas"
              target="_blank"
            >
              <FaFacebookF />
            </SocialIcon>
          </li>
          <li>
            <SocialIcon
              href="https://www.instagram.com/escolaalgodaodocecanoas"
              target="_blank"
            >
              <FaInstagram />
            </SocialIcon>
          </li>
          <li>
            <SocialIcon
              href="https://api.whatsapp.com/send?phone=555551982599753&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20visita%21"
              target="_blank"
            >
              <FaWhatsapp />
            </SocialIcon>
          </li>
        </Icons>
      </Container>
      <FooterBottom>&copy; 2022 Algodão Doce Canoas</FooterBottom>
    </>
  );
};

export default footer;
