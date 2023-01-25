'use client'
import React from 'react'
import MyButton from './UI/Button/MyButton'
import { useRouter } from 'next/navigation'

const PostItem = (props) => {
    const router = useRouter()

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                    Apri
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Elimina
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem
