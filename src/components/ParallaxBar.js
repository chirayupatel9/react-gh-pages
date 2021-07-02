import React, { useRef, useState } from "react";
import { Parallax } from "react-parallax";
import img from '../images/_DSC9870.jpg'
import img1 from "../images/DSC_6113.jpg";
import img2 from "../images/DSC_7534.jpg";
import img3 from "../images/DSC_7470.jpg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function ParallaxBar() {
  const [isActive, setIsActive] = React.useState(false);
  const constraintsRef = useRef(null);
  return (
    <div>
      <Parallax bgImage={img} strength='-500'>
        <div style={{ height: 1000 }}>
          <div>


            <motion.div
              className="block"
              onClick={() => setIsActive(!isActive)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spri",
                stiffness: 260,
                damping: 30,

              }}
            >
              <motion.div className="drag-area" ref={constraintsRef} />
              <motion.div drag dragConstraints={{
                top: -15,
                left: -15,
                right: 15,
                bottom: 15,
              }}>
                <div style={{ height: '900px', position: 'relative' }} >
                  <h1 style={{
                    margin: 0, position: 'absolute', top: '50%', left: "50%",
                    transform: 'translate(-50%,-50%)'
                  }}>WELCOME TO MY PAGE</h1></div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Parallax>
      <Parallax bgImage={img1} strength='500'>
        <div style={{ height: 1000 }}>
          <div>


            <motion.div
              className="block"
              onClick={() => setIsActive(!isActive)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spri",
                stiffness: 260,
                damping: 30,

              }}
            ><div style={{ height: '900px', position: 'relative' }} >
                <h1 style={{
                  margin: 0, position: 'absolute', top: '50%', left: "50%",
                  transform: 'translate(-50%,-50%)'
                }}>Some of my images</h1></div>
            </motion.div>

          </div>
        </div>
      </Parallax>
      <Parallax bgImage={img2} strength='250'>
        <div style={{ height: '400px', position: 'relative' }} >
          <h1 style={{
            margin: 0, position: 'absolute', top: '50%', left: "50%",
            transform: 'translate(-50%,-50%)'
          }}>  </h1>
        </div>
      </Parallax>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef}>
        <Parallax bgImage={img3} strength='250' >
          <motion.div>

            <div style={{ height: '400px', position: 'relative' }} >
              <h1 style={{
                margin: 0, position: 'absolute', top: '50%', left: "50%",
                transform: 'translate(-50%,-50%)'
              }}>  </h1>
            </div>
          </motion.div>
        </Parallax>
      </motion.div>

    </div>
  );
}

export default ParallaxBar;
