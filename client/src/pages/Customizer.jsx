import { motion as m, AnimatePresence } from 'framer-motion'
import React, {useState, useEffect} from 'react'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { AiPicker, ColorPicker, FilePicker, Tab, CustomButton} from '../components'
import { useSnapshot } from 'valtio'


const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <m.div
          key="custom"
          className='absolute top-0 left-0 z-10'
          {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tab'>
                {EditorTabs.map((tab) => (
                  <Tab 
                  key={tab.name}
                  tab={tab}
                  handleClick={() => {}}
                  />
                ))}
              </div>

            </div>
          </m.div>

          <m.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </m.div>

          <m.div className='filtertabs-container' {...slideAnimation("up")}>
          {FilterTabs.map((tab) => (
                  <Tab 
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab=""
                  handleClick={() => {}}
                  />
                ))}
          </m.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer