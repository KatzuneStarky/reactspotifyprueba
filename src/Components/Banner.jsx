import React from 'react'
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'

function Banner() {
    return (
        <div className="banner">
            <img src="" alt="" className='bannerImg' />

            <div className="content">
                <div className="breadCrump">
                    <p>
                        Home <span>/Popular Artist</span>
                    </p>
                    <i><FaEllipsisH /></i>
                </div>
                <div className="artist">
                    <div className="left">
                        <div className="name">
                            <h2>A-Ha</h2>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="" />
                        </div>
                        <p><i><FaHeadphones /></i>11, 185, 188 <span>Escuchantes Mensuales</span></p>
                    </div>
                    <div className="right">
                        <a href="#">Reproducir</a>
                        <a href="#">
                            <i>
                                <FaCheck />
                            </i>
                            Siguiendo
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottomLayer">
                
            </div>
        </div>
    )
}

export { Banner }