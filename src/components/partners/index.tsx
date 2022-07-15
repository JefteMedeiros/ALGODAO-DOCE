import React from 'react';

import { PartnersContainer, PartnersBox, TitlePartner } from '../../templates/home/styles';

const partners: React.FC = () => {
  return (
    <>
      <TitlePartner>Nossos Parceiros</TitlePartner>
      <PartnersContainer>
        <PartnersBox>
          <img src="/images/parceiro2.png" alt="Box to partner 2" />
        </PartnersBox>
        <PartnersBox>
          <img src="/images/parceiro1.png" alt="Box to partner 1" />
        </PartnersBox>
      </PartnersContainer>
    </>
  );
};

export default partners;
