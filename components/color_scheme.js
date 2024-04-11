"use client"

import LightSwitch from '../public/theme-light-dark.svg';
import { useState, useEffect } from 'react';
import styles from '../styles/ColorScheme.module.css';
import Image from 'next/image';

export default function ColorScheme() {
  const [colorScheme, setColorScheme] = useState(null);

  function getNextColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'light'
      : 'dark';
  }

  useEffect(() => {
    console.log('colorScheme', colorScheme);

    switch (colorScheme) {
      case 'light':
        const isLightMode = window.matchMedia(
          '(prefers-color-scheme: light)'
        ).matches;
        if (isLightMode) {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
        break;

      case 'dark':
        const isDarkMode = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        if (isDarkMode) {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
        break;
    }
  }, [colorScheme]);

  return (
    <Image
      priority
      src={LightSwitch}
      alt="light/dark theme"
      width={30}
      height={30}
      className={styles.lightSwitch}
      onClick={() =>
        setColorScheme(
          colorScheme === null
            ? getNextColorScheme()
            : colorScheme === 'light'
            ? 'dark'
            : 'light'
        )
      }
    />
  );
}

