import React, { useRef } from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import './Testimonials.css'

function Testimonials() {
    const slider =  useRef();
    let tx = 0;
    console.log("0",tx);
    
    const slideForward =()=>{
        if (tx > -50) {
            tx -= 25;
            console.log("1",tx);
        }
        slider.current.style.transform = `translateX(${tx}%)`
        console.log("2",tx);

    }
    const slideBackward =()=>{
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
         <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truely exceeded my expectaions.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truely exceeded my expectaions.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truely exceeded my expectaions.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truely exceeded my expectaions.</p>
                </div>
            </li>
         </ul>
      </div>

    </div>
  )
}

export default Testimonials
