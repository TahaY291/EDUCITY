import React, { useRef } from 'react'
import video from '../../assets/video.mp4'
import './VideoPlayer.css'
function VideoPlayer({ videoHide, videoDisplay }) {
    const player = useRef(null)
    const closePlayer = (e) => {
        if (e.target === player.current) {
            videoDisplay()
        }
    }
    return (
        <div onClick={closePlayer} ref={player} className={`video-player ${videoHide ? 'hide' : ""}`}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
