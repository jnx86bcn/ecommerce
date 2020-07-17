import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const IconFavorite = styled.img`
  padding: 11px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export function Favorite() {
  useEffect(() => {}, []);

  const [sexIcon, setSexIcon] = useState('../src/branding/img/icons/heart.png');

  function testFunc() {
    sexIcon == '../src/branding/img/icons/heart.png' ? setSexIcon('../src/branding/img/icons/heart_clicked.png') : setSexIcon('../src/branding/img/icons/heart.png');
  }

  return <IconFavorite src={sexIcon} onClick={() => testFunc()} />;
}
