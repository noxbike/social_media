import React from 'react'
import "./profileSide.css"
import Follower from '../follower/Follower'
import LogoSearch from '../logoSearch/LogoSearch'
import Profile from '../profile/Profile'

export default function ProfileSide() {
  return (
    <div className='profile-side'>
      <div className="container">
        <LogoSearch />
        <Profile />
        <Follower />
      </div>
    </div>
  )
}
