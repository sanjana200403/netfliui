import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner_contents">
            <h1 className='banner_title'>Money Heist</h1>
            <div className="banner_buttons">
                <button className="banner_button">
                    Play
                </button>
                <button className="banner_button">
                    My List
                </button>
            </div>
            <div className="banner_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure fuga necessitatibus accusamus soluta voluptatibus obcaecati quis, inventore id a unde in exercitationem adipisci!
            </div>

        </div>
        <div className="fade-bottom">
            
        </div>
      
    </div>
  )
}

export default Banner
