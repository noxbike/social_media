import React from 'react'
import { Typography } from '@mui/material';
import './follower.css'

export default function Follower() {
  return (
    <div className="follower">
      <p>who is following you</p>
      <div className='liste-of-followers'>
        <ul>
          <li>
            <img src="/assets/pictures/moi.png" alt="moi" width="50px" height="50px"/>
            <p className='name-pseudo'>
              <span>Nom Prénom</span>
              <span>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  <small>@NomPrénom</small>
                </Typography>
              </span>
            </p>
            <button>Follow</button>
          </li>
          <li>
            <img src="/assets/pictures/moi.png" alt="moi" width="50px" height="50px"/>
            <p className='name-pseudo'>
              <span>Nom Prénom</span>
              <span>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  <small>@NomPrénom</small>
                </Typography>
              </span>
            </p>
            <button>Follow</button>
          </li>
          <li>
            <img src="/assets/pictures/moi.png" alt="moi" width="50px" height="50px"/>
            <p className='name-pseudo'>
              <span>Nom Prénom</span>
              <span>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  <small>@NomPrénom</small>
                </Typography>
              </span>
            </p>
            <button>Follow</button>
          </li>
          <li>
            <img src="/assets/pictures/moi.png" alt="moi" width="50px" height="50px"/>
            <p className='name-pseudo'>
              <span>Nom Prénom</span>
              <span>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  <small>@NomPrénom</small>
                </Typography>
              </span>
            </p>
            <button>Follow</button>
          </li>
        </ul>
      </div>
      <div className="show-more">
        <a href="#*">Show more</a>
      </div>
    </div>
  )
}
