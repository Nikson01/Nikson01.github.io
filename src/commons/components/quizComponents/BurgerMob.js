import React from 'react'

function BurgerMob({toggleScore, toggledScore}) {
  return (
    <div className={`burger ${toggledScore ? "burger__open" : ""}`} onClick={() => toggleScore()}>
        <span className='burger-span'></span>
    </div>
  )
}

export default BurgerMob