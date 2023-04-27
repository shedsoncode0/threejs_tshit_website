import React from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import CustomButton from '../components/CustomButton'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <m.section className='home' {...slideAnimation('left')}>
          <m.header {...slideAnimation("down")}>
            <img src='./threejs.png' className='w-8 h-8 object-contain'/>
          </m.header>

          <m.div className='home-content' {...headContentAnimation}>
            <m.div {...headTextAnimation}>
              <h1 className='head-text'>LET'S <br className='xl:block hidden' /> DO IT.</h1>
            </m.div>
          <m.div {...headContainerAnimation} className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-gray-600 text-base'>
              Create your unique and exclusive shirt with our
              brand-new 3D customizer tool. <strong>Unleash your imagination</strong>{" "}
              and define your own style
            </p>
            <CustomButton/>
          </m.div>
          </m.div>

        </m.section>
      )}
    </AnimatePresence>
  )
}

export default Home