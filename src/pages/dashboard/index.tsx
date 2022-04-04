import React from 'react';

import Head from "next/head";

import LayoutDashboard from '../../components/dashboard/layout'

import Card from '../../components/dashboard/card'

const dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Algodão Doce Canoas | Dashboard</title>
        <link rel="shortcut icon" href="icons/logo.ico"/>    
      </Head>
      <LayoutDashboard>
        <Card Title="Cardápio Berçário" Date="03/03/2022" Link="menus/cardapio.xlsx"/>
        <Card Title="Cardápio Março" Date="03/03/2022" Link="menus/cardapiobercario.xlsx"/>
      </LayoutDashboard>
    </>
  );
}

export default dashboard;