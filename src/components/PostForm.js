import React, {useState} from 'react'
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/Button/MyButton'

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='Nome dell post'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Descrizione dell post'
            />
            <MyButton onClick={addNewPost}>Aggiungi post</MyButton>
        </form>
    );
};

export default PostForm;
