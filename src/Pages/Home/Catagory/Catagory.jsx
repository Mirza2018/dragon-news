import React from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import NewsCart from '../../NewsCart/NewsCart';
import Test from '../../Test';

const Catagory = () => {
    const {id}=useParams()
    const categoryNews = useLoaderData();
    return (
        <div>
           {id? <h2>This is catagory {categoryNews.length}</h2>:<></>}
          
            {
                categoryNews.map(news =>
                    <NewsCart key={news._id} news={news}></NewsCart>
                )
            }
        </div>
    );
};

export default Catagory;