import Image from 'next/image';
import styles from '../styles/AboutMe.module.css';
import ColorScheme from '../components/color_scheme';
import PageOrientation, { Orientation } from '../components/page_orientation';
import BackgroundHandler from '../components/background_handler';
import ImageBubble from '../components/image_bubble';
import { Card, CardContent, Typography } from '@mui/material';
import ArtstationIcon from '../components/icons/artstation_icon';
import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

export default function AboutMe() {
  return (
    <>
      <BackgroundHandler />
      <PageOrientation orientation={Orientation.Vertical} />
      <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.profile}>
            <ImageBubble>
              <Image
                src="/imgs/itsame.jpeg"
                width={200}
                height={200}
                alt="Profile"
              />
            </ImageBubble>
            <div className={styles.profileName}>Kristopher Ali</div>
            <div className={styles.profileLocation}>Tampa, FL</div>
          </div>
          <Card className={styles.profileCard}>
            <CardContent className={styles.profileContent}>
              <div className="sections">
                <GitHub />
                <sectiondiv />
                <LinkedIn />
                <sectiondiv />
                <ArtstationIcon />
                <sectiondiv />
                <Instagram />
                <sectiondiv />
                <YouTube/>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={styles.bottom}>
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
        </div>
        <ColorScheme />
      </main>
    </>
  );
}
