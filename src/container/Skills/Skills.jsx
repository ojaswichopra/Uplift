
import './Skills.css'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import {images} from '../../constants'
const Skills = () => {
  
  const skills =[
    {name: 'Amazon',icon:images.flutter},
    {name: 'Meta',icon:images.asus},
    {name: 'PWC',icon:images.bolt},
    {name: 'Oracle',icon:images.graphql},
    {name: 'Rubrik',icon:images.react},
    {name: 'MotoRola',icon:images.typescript},
]
const experiences=[
  {year:'300K+',works:[{name:'companies hiring',company:'google'}]},
  {year:'100K+',works:[{name:'new openings everyday',company:'google'}]},
  {year:'21Mn+',works:[{name:'active students',company:'google'}]},
  {year:'600K+',works:[{name:'learners',company:'google'}]},
]
  return (
    <>
    <h2 className="head-text" id='companies'>Top Companies Trust Us</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience.year}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                  </motion.div>
                  
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
  )
}
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);