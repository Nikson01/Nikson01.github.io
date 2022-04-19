import React from 'react'

function BurgerMob({toggleScore}) {
  return (
    <div className='burger' onClick={() => toggleScore()}>
        <span className='burger-span'></span>
    </div>
  )
}

export default BurgerMob