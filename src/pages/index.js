import moon from '../moon.png'
import land from '../land.png'
import cat from '../assets/cat.gif'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Image from 'next/image'
import { useRef } from 'react'


export default function Home() {
  const ref = useRef();
  return (
    <div className='bg-black'>
    <Parallax pages={4} ref={ref} className='bg-black'>
      {/* <ParallaxLayer speed={1}>
          <h2>Welcome to my website</h2>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
          <h2>Web development is fun!</h2>
      </ParallaxLayer> */}

      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${moon.src})`,
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={1}
        factor={4}
        style={{
          backgroundImage: `url(${land.src})`,
          backgroundSize: 'cover',
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0.9, end: 2.5 }}
        className='flex flex-row justify-center'
      >
        <Image src={cat} alt='cat' />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}
        speed={0.05}
        onClick={() => ref.current.scrollTo(3)}
      >
        <div className='flex flex-row justify-center'>

        <h2 className='text-9xl font text-white font-cubano'>Welcome to my website</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}
        
      >
        <div className='flex flex-col text-center '>
        <h2 className='text-9xl font text-white font-cubano'>Hi Mom!</h2>
        </div>
      </ParallaxLayer>
    </Parallax>
  </div>
  )
}
