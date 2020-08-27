import React, { useEffect } from 'react'
import './Logo.scss';

const Logo = () => {
    useEffect(() => {
        document.documentElement.addEventListener('mousemove', eyeMovementAnimation)
        return () => {
          document.documentElement.removeEventListener('mousemove', eyeMovementAnimation);
        }
      }, [])

      const eyeMovementAnimation = event => {
        let eye = document.querySelectorAll('.eye');
        eye.forEach(e => {
          let x = (e.getBoundingClientRect().left) + (e.clientWidth / 2)
          let y = (e.getBoundingClientRect().top) + (e.clientHeight / 2)
          let radian = Math.atan2(event.pageX - x, event.pageY - y)
          let rot = (radian * (180 / Math.PI) * -1) + 270;
          e.style.transform = "rotate(" + rot + "deg)";
        })
      }

    return (
        <div className="face">
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
    )
}

export default Logo;
