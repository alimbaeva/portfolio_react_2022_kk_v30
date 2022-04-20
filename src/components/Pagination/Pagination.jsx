import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <ul className='pagination'>
            {
                pages.map((page) => (
                    <li
                        key={page}
                        onClick={() => paginate(page)}
                    >
                        {page}
                    </li >
                ))
            }
        </ul >
    )
}

export default Pagination