import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dragon-news-server-mirza2018.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))


    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'> {
                categories.map(category => <h5 key={category.id}>
                    <Link
                        to={`/category/${category.id}`}
                        className='text-decoration-none text-black'>
                        {category.name}
                    </Link>
                </h5>
                )
            }</div>
        </div>
    );
};

export default LeftNav;