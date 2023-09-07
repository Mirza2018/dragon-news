import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../Pages/Home/Home/Shared/Header/Header';
import Footer from '../../Pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Pages/Home/Home/Shared/LeftNav/LeftNav';
import RightNav from '../../Pages/Home/Home/Shared/RightNav/RightNav';
import NavigationBar from '../NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;