import React, { useState } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen, faSmileWink } from '@fortawesome/free-solid-svg-icons'


import EditProfileForm from './EditProfileForm'
import ProfilrBio from './ProfilrBio'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avtar/Avtar'
// import { useState } from 'react'
import './UsersProfile.css'

const UserProfile = () => {
  
  const { id } = useParams()
  const users = useSelector((state) => state.usersReducer)      // now users contain the array of users 
  const currentProfile = users.filter((user) => user._id === id)[0]
  const currentUser = useSelector((state) => state.currentUserReducer)
  
  const [Switch, setSwitch] = useState(false)

  return (
    <div className='home-container-1'>
     <LeftSidebar/>
     <div className="home-container-2">
      <section>
        <div className="user-detail-container">
          <div className="user-detail">
            <Avatar backgroundColor="purpule" color="white" fontSize='50x' px='40px' py='30px'>
               {currentProfile?.name.charAt(0).toUpperCase()}
            </Avatar>
            <div className="user-name">
              <h1>{currentProfile?.name}</h1>
              <p><FontAwesomeIcon icon={faBirthdayCake} />Joined {moment(currentProfile?.joinesOn).fromNow()}</p>
            </div>
          </div>
          {
            currentUser?.result._id === id && (
              <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )
          }
        </div>
        <>
        {
          Switch ? (
            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
          ) : (
            <ProfilrBio currentProfile={currentProfile}/>
          )
        }
        </>
      </section>
     </div>
    </div>
  )
}

export default UserProfile
