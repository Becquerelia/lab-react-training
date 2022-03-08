import React from 'react'

function Random(props) {

    const {min, max} = props
    const randomNumber = Math.floor(Math.random()*max) //Cómo implemento el mínimo para que no me de nada por debajo de 1?

  return (
    <div>
    <p className='minibox'>Random value between {min} and {max} => {randomNumber}</p>
    </div>
  )
}

export default Random