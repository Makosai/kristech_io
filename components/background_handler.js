"use client"

import { useEffect } from 'react';

export default function BackgroundHandler() {
  useEffect(() => {
    console.log('backgroundHandler', 'done');

    setTimeout(() => {
      document.getElementsByClassName('background')[0].classList.add('done');
      document.getElementsByClassName('background_dot')[0].classList.add('done');
    }, 1500);
  }, []);

  return <></>;
}

