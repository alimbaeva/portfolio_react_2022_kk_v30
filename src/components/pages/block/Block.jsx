import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Posts from '../posts/Posts';
import Pagination from '../../Pagination/Pagination';
import './block.scss';

function Block() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6)

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data)
        };
        getPosts();
    }, []);


    const indexLastOfPost = currentPage * postsPerPage;
    const indexOfFierstPost = indexLastOfPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFierstPost, indexLastOfPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

    }

    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
        <section className='block'>

            <h1 style={{ textAlign: "center" }}>My Block</h1>
            <div className="container" >
                <Posts posts={currentPosts} />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />

            </div>
            <div className="btns">

                <button onClick={prevPage}>налево</button>
                <button onClick={nextPage}>направо</button>

            </div>
        </section>
    )
}

export default Block