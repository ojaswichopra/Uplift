import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Resources.css'
import {images} from '../../constants'
const Resources = () => {
    const abouts=[
        {title:'Web Development',description:'Coding the Future: Where Innovation Meets Opportunity!', imgUrl:images.about01},
        {title:'Programming in Python',description:'Decoding Data, Driving Decisions: Where Numbers Shape the Future!', imgUrl:images.about02},
        {title:'Machine Learning',description:'Beyond Boundaries: Crafting Stories, Building Brands.', imgUrl:images.about03},
        {title:'Advanced Excel',description:'Securing Your Success: Where Numbers Translate into Opportunities.', imgUrl:images.about04}
      ]
  return (
    <>
    <h2 className="head-text" id='resources'>Certification Courses <br />Fastest way to build your CV</h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
  </>
  )
}

export default AppWrap(
    MotionWrap(Resources, 'app__about'),
    'about',
    'app__whitebg',
  );
