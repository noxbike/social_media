import React from 'react'
import CreatePost from '../createPost/CreatePost'
import Posts from '../posts/Posts'
import './postSide.css'

export default function PostSide() {
  return (
    <div>
        <CreatePost />
        <Posts />
    </div>
  )
}
