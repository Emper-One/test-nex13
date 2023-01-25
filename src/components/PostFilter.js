'use client'
import React from 'react'
import MyInput from "./UI/Input/MyInput"
import MySelect from "./UI/Select/MySelect"

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Cerca..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Ordina"
                options={[
                    {value: 'title', name: 'Per nome'},
                    {value: 'body', name: 'Per descrizione'},
                ]}
            />
        </div>
    );
};

export default PostFilter
