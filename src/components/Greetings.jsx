import React from 'react'

function Greetings(props) {
    const {lang, children} = props
    let saludo = " "
    if (lang === "de") {
        saludo = "Halo";
    } else if (lang === "en") {
        saludo = "Hello";
    } else if (lang === "es") {
        saludo = "Hola";
    } else if (lang === "fr") {
        saludo = "Bonjour";
    }

  return (
    <div>

        <p className='minibox'>{saludo} {children} </p>
        
    </div>
  )
}

export default Greetings