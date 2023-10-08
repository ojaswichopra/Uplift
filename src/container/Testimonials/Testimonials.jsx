import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  const brands = [
    {name:'ojaswi' ,imgUrl:images.spotify ,_id:0},
    {name:'ojaswi' ,imgUrl:images.skype ,_id:0},
    {name:'ojaswi' ,imgUrl:images.amazon ,_id:0},
    {name:'ojaswi' ,imgUrl:images.graphql ,_id:0},
    
  ]
  const testimonials =[
    {imgurl:images.sass,feedback:'loream sdnwfibenijdnc sm s,m cmdwk fvewjonvvs xcaskjefn nfiewnfejfn hihrwef weiefewijfncswc wkejv wejv ew',name:'Mohak',company:'Google'},
    {imgurl:images.graphql,feedback:'loream sdnwfibenijdnc sm s,m cmdwk fvewjonvvs xcaskjefn nfiewnfejfn hihrwef weiefewijfncswc wkejv wejv ew',name:'Ojaswi',company:'Oracle'},
    {imgurl:images.bolt,feedback:'loream sdnwfibenijdnc sm s,m cmdwk fvewjonvvs xcaskjefn nfiewnfejfn hihrwef weiefewijfncswc wkejv wejv ew',name:'Rudra',company:'PWC'},
    {imgurl:images.css,feedback:'loream sdnwfibenijdnc sm s,m cmdwk fvewjonvvs xcaskjefn nfiewnfejfn hihrwef weiefewijfncswc wkejv wejv ew',name:'Komal',company:'Nvidia'},
    {imgurl:images.typescript,feedback:'loream sdnwfibenijdnc sm s,m cmdwk fvewjonvvs xcaskjefn nfiewnfejfn hihrwef weiefewijfncswc wkejv wejv ew',name:'Pradnya',company:'MotoRola'},
  ]
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex" id='testimonials'>
            <img src={(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
