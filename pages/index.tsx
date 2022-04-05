import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: ``,
  rideRequestContainer: ``,
  rideRequest: ``
};

const Home: NextPage = () => {
  return <div className={style.wrapper}>
    <Navbar />
    <div className={style.main}>
      {/* <Map /> */}
    </div>
    <div className={style.rideRequestContainer}>
      <div className={style.rideRequest}>
        {/* <LocationSelector />
        <ConfirmRide /> */}
      </div>
    </div>
  </div>;
};

export default Home;
