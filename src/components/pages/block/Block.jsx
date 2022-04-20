import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Posts from '../posts/Posts';
import './block.scss';

function Block() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data)
        };
        getPosts();
    }, [])
    return (
        <section className='block'>
            <h1 style={{ textAlign: "center" }}>My Block</h1>
            <div className="container">
                <Posts posts={posts} />
            </div>
        </section>
    )
}

export default Block