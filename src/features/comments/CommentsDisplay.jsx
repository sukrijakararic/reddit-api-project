import React from 'react'
import { useSelector } from 'react-redux'

export const CommentsDisplay = () => {
    const comments = useSelector((state) => state.redditPosts.comments);

  return (
    <div>
      {comments.map((comment) => (
        <p key={comment.data.id}>{comment.data.body}</p>
      ))}
    </div>
  )
}
