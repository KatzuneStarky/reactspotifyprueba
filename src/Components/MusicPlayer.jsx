import React, { useEffect, useRef, useState } from "react";
import "../Styles/MusicPlayer.css";
import {
    FaRegHeart,
    FaHeart,
    FaStepBackward,
    FaBackward,
    FaStepForward,
    FaForward,
    FaPlay,
    FaPause,
    FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc }) {
    console.log(song);
    const [isLove, setIsLove] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef()

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMin}:${returnSec}`;
    };

    const changeLoved = () => {
        setIsLove(!isLove);
    };

    const changePlayPause = () => {
        const prevValue = isPlaying;
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
        setIsPlaying(!prevValue);
    };

    const changeProgres = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        progressBar.current.style.setProperty('--player-played', `${(progressBar.current.value / duration) *100}%`)
        setCurrentTime(progressBar.current.value)
    }

    const whilePlaying = () => {        
    }
    return (
        <div className="musicPlayer">
            <div className="songImage">
                <img src={imgSrc} alt="" />
            </div>
            <div className="songAttributes">
                <audio src={song} preload="metadata" ref={audioPlayer}></audio>
                <div className="top">
                    <div className="left">
                        <div className="loved" onClick={changeLoved}>
                            {isLove ? (
                                <i>
                                    <FaHeart />
                                </i>
                            ) : (
                                <i>
                                    <FaRegHeart />
                                </i>
                            )}
                        </div>
                        <div className="download">
                            <i>
                                <BsDownload />
                            </i>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="back">
                            <i>
                                <FaStepBackward />
                            </i>
                            <i>
                                <FaBackward />
                            </i>
                        </div>
                        <div className="playPause" onClick={changePlayPause}>
                            {isPlaying ? (
                                <i>
                                    <FaPause />
                                </i>
                            ) : (
                                <i>
                                    <FaPlay />
                                </i>
                            )}
                        </div>
                        <div className="forward">
                            <i>
                                <FaStepForward />
                            </i>
                            <i>
                                <FaForward />
                            </i>
                        </div>
                    </div>
                    <div className="right">
                        <i>
                            <FaShareAlt />
                        </i>
                    </div>
                </div>
                <div className="bottom">
                    <div className="currentTime">{CalculateTime(currentTime)}</div>
                    <input type="range" className="progressBar" onChange={changeProgres} />
                    <div className="duration">
                        {(duration && !isNaN(duration) && CalculateTime(duration)) ?
                            CalculateTime(duration) : "00:00"
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export { MusicPlayer };
