import React from 'react'

const PostCard =({post})=>{
  return (
    <div>
      {post.title}
      {post.except}
    </div>
  )
}
export default PostCard