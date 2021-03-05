import React, { useState, useEffect } from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

const Home = () =>  {

let descendingUsers
let topFiveNotFollowing
let topFiveFollowing
const [users, setUsers] = useState(null)
const [userToToggle, setUserToToggle] = useState(null)

const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

const fetchData = async () => {
    const results = await axios.get('./netlify/functions/posts')
    console.log(results.data)
    setUsers(results.data);
}
if (userToToggle) {
    const newValue = userToToggle.is_followed ? false : true
    const data = {is_followed: newValue}
  
     axios.put('/.netlify/functions/edit', {userId: userToToggle.id, data: data })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err))
      .then(() => fetchData())
        setUserToToggle(null)
    }

useEffect(() => {
    addData()
    fetchData()
   
}, [])

if (users)
{
    descendingUsers = users.sort((a,b) => a.id < b.id ? 1 : -1)
}

console.log(descendingUsers)

return (
    <>
    {descendingUsers && (
      <div className='container'>
        <FollowersColumn users={topFiveFollowing} />
        <div className='feed'>
          {descendingUsers.map((descendingUser, index) => (
            <Card
              key={index}
              user={descendingUser}
              toggleFollow={userToToggle => setUserToToggle(userToToggle)}
            />
          ))}
        </div>
        <div className="suggested-box">
          <div className="section">
            <div className="suggested">
              <h2 className="bold">Suggested accounts</h2>
              <div className="break" />
              {topFiveNotFollowing.map((notFollowingUser, index) => (
                <MiniCard 
                  key={index} user={notFollowingUser}
                  toggleFollow={userToToggle => setUserToToggle(userToToggle)}
		  	        />)
		  	      )}
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Home;