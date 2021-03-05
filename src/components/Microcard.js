import React from 'react'

const MicroCard = ({ user }) => {
  return (
    <div className="section microcard">
      
      <div>
        <h3 className="bold">{user.username}</h3>
        <p>{user.name}</p>
      </div>
    </div>
  )
}
  
export default MicroCard