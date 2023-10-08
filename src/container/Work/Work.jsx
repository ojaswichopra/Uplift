import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import {images} from '../../constants'
import './Work.css';

const Work = () => {


  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const filterWork=[
  {title:'Digital Media Marketing',description:'Aam Aadmi Party',projectLink:'https://internshala.com/internship/detail/digital-media-marketing-work-from-home-job-internship-at-aam-aadmi-party1696669383?referral=homepage',imgUrl: images.nb},
  {title:'Academic Scholar',description:'BrightChamps Tech PVT',projectLink:'https://internshala.com/job/detail/academic-counsellor-fresher-jobs-in-bangalore-at-brightchamps-tech-private-limited1696340083?referral=homepage',imgUrl: images.node},
  {title:'Administration Manager',description:'Reliance Capital Limited',projectLink:'https://internshala.com/job/detail/administration-manager-fresher-jobs-in-patna-at-reliance-capital-limited1696491855?referral=homepage',imgUrl: images.javascript},
  {title:'Business Developer',description:"BYJU's The Learning App",projectLink:'https://internshala.com/internship/detail/business-development-work-from-home-job-internship-at-across-the-globe-atg1696573183?referral=homepage',imgUrl: images.vue},
  {title:'Sales Associate',description:'Across The Globe',projectLink:'https://internshala.com/internship/detail/sales-work-from-home-job-internship-at-across-the-globe-atg1696573313?referral=homepage',imgUrl: images.cpp},
  {title:'Youtube Marketing',description:'Saregama India Limited',projectLink:'https://internshala.com/internship/detail/sales-work-from-home-job-internship-at-across-the-globe-atg1696573313?referral=homepage',imgUrl: images.api},
];

  return (
    <>
      <h2 className="head-text" id='listings'>Find Your Fit, Fuel Your Future.</h2>

      <div className="app__work-filter">
        {['SDE', 'Analytics', 'Consulting', 'Finance', 'All'].map((item, index) => (
          <div
            key={index}
            
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex">
              <img src={work.imgUrl} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
               
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

             
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);