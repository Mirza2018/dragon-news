import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitterSquare,FaInstagram } from 'react-icons/fa';
import bg from '../../../../../assets/1.png'
import Qzon from '../Qzon/Qzon';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle />   Login with Google</Button>
                <Button className='mb-2' variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            </div>

            <div className='text-center'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item ><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitterSquare />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzon></Qzon>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;