'use client'
import React, {useEffect, useRef, useState} from 'react'
import { getAll } from '../../api/PostService'
import {usePosts} from '../hooks/usePosts'
import {useFetching} from '../hooks/useFetching'
import {getPageCount} from '../../utils/pages'
import MyButton from '../../components/UI/Button/MyButton'
import MyModal from '../../components/UI/MyModal/MyModal'
import PostForm from '../../components/PostForm'
import PostFilter from '../../components/PostFilter'
import PostList from '../../components/PostList'
import Loader from '../../components/UI/Loader/Loader'
import Pagination from '../../components/UI/Pagination/Pagination'
import MySelect from '../../components/UI/Select/MySelect'


const Posts = () => {

  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
      fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }

  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
      setPage(page)
  }
  return (
    <div className='post_page'>
      <h2>Posts</h2>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Creare Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
      <h1>Errore in corso: ${postError}</h1>
      }
      {!isPostsLoading && <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts'/>}

      {isPostsLoading &&
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      }
      {posts.length && <div className='page_bottom'>
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
        <MySelect
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue='Quantita di elementi sulla paggina!'
          options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'Appri tutto!'},
          ]}
        />
      </div>}
    </div>
  )
}

export default Posts