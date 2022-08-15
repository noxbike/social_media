import React from 'react'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import './logoSearch.css'
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const ariaLabel = { 'aria-label': 'description' };

export default function LogoSearch() {
  return (
    <div className="logo-search">
      <img src="assets/pictures/logo.png" alt="logo" />
      <Input placeholder="Search" inputProps={ariaLabel}
       endAdornment={
        <InputAdornment position="end">
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <Search />
              </IconButton>
        </InputAdornment>
        }
              />
      
    </div>
  )
}
