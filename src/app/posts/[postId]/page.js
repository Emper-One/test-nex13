'use client'
import React, {useEffect, useState} from 'react'
import {useFetching} from '../../hooks/useFetching'
import { getCommentsByPostId, getById } from '../../../api/PostService'
import Loader from '../../../components/UI/Loader/Loader'

const PostIdPage = (props) => {
    const { params } = props

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])


    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.postId)
        fetchComments(params.postId)
    }, [])

    return (
        <div className='post_id'>
            <h1>Avete aperto la pagina con post ID = {params.postId}</h1>
            {isLoading
                ? <Loader/>
                :  <div>{params.postId}. {post.title}</div>
            }
            <h1>
                Commenti
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage
