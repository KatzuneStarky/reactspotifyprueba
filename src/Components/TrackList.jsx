import React from 'react'
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'

function TrackList() {
    return (
        <div className='trackList'>
            <div className="top">
                <img src="https://icon-library.com/images/track-icon/track-icon-21.jpg" alt="" />
                <p className='trackName'>
                    Sample name <span className='trackSpan'>Artist</span>
                </p>
            </div>
            <div className="bottom">
                <i><BsFillVolumeUpFill /></i>
                <input type="range" />
                <i><BsMusicNoteList /></i>
                <i><FaDesktop /></i>
            </div>
        </div>
    )
}

export {TrackList}