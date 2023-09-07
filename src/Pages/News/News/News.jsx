import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaArrowLeft, FaRegBookmark } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInside from '../EditorInside';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, author, total_view, rating, category_id } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex  align-items-center'>
                    <Image style={{ height: 40 }} src={author.img} roundedCircle />

                    <div className='p-2 flex-grow-1'>
                        <p className='mb-0'>{author.name}</p>
                        <p><small>{moment(author?.published_date).format('yyyy-MM-DD')} </small></p>
                    </div>

                    <div className=''>
                        <FaRegBookmark />
                        <AiOutlineShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft/> All News In this Category</Button>
                    </Link>
            </Card.Body>
        </Card>
        <EditorInside></EditorInside>
        </div >
    );
};

export default News;