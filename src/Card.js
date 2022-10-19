import React from 'react';


const Card = () => {
  return (
    <div className="card">
            <img src="./female.webp" width={500} className="card--image" />
            <div className="card--stats">
                <img src="./star.png" width={25} />
                <span>5.0</span> 
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p className='jee'>Life Lessons with Katie Zaferes</p>
            <p className='jee'>From $136 / person</p>
        </div>
  )
}






export default Card
