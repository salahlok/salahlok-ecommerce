import React from 'react'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
    return (
<div className="body">
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-left-side">
                    <div className="left-adress details">
                        <FaMapMarkerAlt className="fa-icon"/>
                        <div className="topic">Address</div>
                        <div className="text-one">city cadate 557/17</div>
                        <div className="text-two">Bousaada, Algeria</div>
                    </div>
                    <div className="left-phone  details">
                        <BsFillTelephoneForwardFill className="fa-icon" />
                        <div className="topic">Phone</div>
                        <div className="text-one">+213 777 638 737</div>
                    </div>
                    <div className="left-email  details">
                        <MdEmail className="fa-icon"/>
                        <div className="topic">Email</div>
                        <div className="text-one">salahlok@gmail.com</div>
                    </div>
                </div>
                <div className="contact-right-side">
                    <div className="topic-text">Send me a message</div>
                    <p>If you have any work from me or any type of quries related to my services, you can send me message from here, It's my pleasure to help you .</p>
                
                <form>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your Name" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your Email" />
                    </div>
                    <div className="input-box message-box">
                        <textarea  placeholder='Please enter your Message'></textarea>
                    </div>
                    <div className="button">
                        <input type="button" value="Send Now" />
                    </div>
                </form>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Contact
