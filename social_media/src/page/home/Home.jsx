import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/rightSide/RightSide'
import './home.css'

export const Home = () => {
  return (
    <div className="home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  )
}