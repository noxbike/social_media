import React from 'react'
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import './profile.css'

export default function Profile() {
  return (
    <div className='profile'>
      <div className='banniere' style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)"}}></div>
      <div className='basic-info'>
        <div className='profile-picture'>
          <img src="assets/pictures/logo.png" alt="profile" width='100%'/>
        </div>
        <p>Mickael Morel</p>
        <Typography variant="subtitle1" color="text.secondary" component="div">
            Developper FullStack
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className='follower-following'>
        <div className="followers">
          <p>0</p>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Followers
          </Typography>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="following">
          <p>1</p>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Following
          </Typography>
        </div>
      </div>
      <Divider variant="middle" />
      <div className='linkProfile'>
        <a href='/profile'>My profile</a>
      </div>
    </div>
  )
}
