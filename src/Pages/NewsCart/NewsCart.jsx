
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
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
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                         placeholderRating={rating.number}
                         readonly
                         emptySymbol={<FaRegStar></FaRegStar>}
                         placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                         fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        {rating.number}
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>

                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsCart;