import React from 'react'

function IdCard(props) {
    const {firstName, lastName, gender, height, picture} = props
    const style = {
      width: "500px",
      height: "150px"
    }
  return (
    <div className="card mb-3" style={style}>
      <div className="row g-0">
        <div className="col-md-4">
            <img src={picture} className="img-fluid rounded-start" alt={firstName} />
        </div>

        <div className="col-md-8">
          <div >
            <p id='margin-card'><b>First Name:</b> {firstName}</p>
            <p id='margin-card'><b>Last Name:</b> {lastName}</p>
            <p id='margin-card'><b>Gender:</b> {gender}</p>
            <p id='margin-card'><b>Height:</b> {height}</p>
            <p id='margin-card'><b>Birth:</b> </p> {/* No sé cómo ponerlo, me rompe el código*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdCard