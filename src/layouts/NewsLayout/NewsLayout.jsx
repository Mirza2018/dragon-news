import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../Pages/Home/Home/Shared/Header/Header';
import Footer from '../../Pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Pages/Home/Home/Shared/LeftNav/LeftNav';
import RightNav from '../../Pages/Home/Home/Shared/RightNav/RightNav';
import EditorInside from '../../Pages/News/EditorInside';

const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;