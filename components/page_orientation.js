"use client"

import { useEffect } from 'react';

export const Orientation = {
  Horizontal: 'horizontal',
  Vertical: 'vertical'
};

export default function PageOrientation({
  orientation = Orientation.Horizontal
}) {
  useEffect(() => {
    console.log('pageOrientation', orientation);

    document.documentElement.setAttribute('orientation', orientation);
  }, []);

  return <></>;
}
