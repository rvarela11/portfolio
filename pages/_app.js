import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particlesConfig } from '../src/config/particles-config';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  console.log(particlesConfig);

  return (
    <>
      <Particles id='tsparticles' init={particlesInit} options={particlesConfig} />
      {/* <Particles width='100vw' height='100vh' options={particlesConfig} /> */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
