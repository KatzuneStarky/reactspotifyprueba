import React from 'react'
import '../Styles/RightMenu.css'
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from 'react-icons/fa'

function RightMenu() {
    return (
        <div className='rightMenu'>
            <div className="goPro">
                <i>
                    <FaCrown />
                    <p>Hazte <span>Pro</span></p>
                </i>
                <i><FaBell /></i>
                <i><FaRegHeart /></i>
            </div>
            <div className="profile">
                <i><FaSun /></i>
                <i><FaCogs /></i>
                <div className="profileImage"></div>
            </div>
        </div>
    )
}

export { RightMenu }