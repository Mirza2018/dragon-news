import React, { useContext } from 'react';

import logo from '../../../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            {/* <Link to='/'>Home</Link>
            <Link to='/'></Link>
            <Link to='/'></Link> */}

            <div className="text-center"><img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, Do MMMM ,LTS ')}</p>
          

            </div>
            <div className='d-flex'>
                {/* <Button variant="danger">Latest</Button> */}
                <Link to='/'><Button variant="danger">Latest</Button></Link> 
                <Marquee className='text-danger' speed={100}>
                Nation Shall Speak Peace Unto Nation
                </Marquee>
            </div>


            {/* NAbber */}


            

        </Container>
    );
};

export default Header;