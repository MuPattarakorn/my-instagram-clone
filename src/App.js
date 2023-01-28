import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Navbar from './components/Navbar';
import StoryList from './components/StoryList';
import FeedList from './components/FeedList';
import NavFooter from './components/NavFooter';

function App() {
  return (
    <Row>
      <Col span={8}>
      </Col>
      <Col span={8}>
        <Navbar />
        <StoryList />
        <FeedList />
        <NavFooter />
      </Col>
      <Col span={8}></Col>
    </Row>
  );
}

export default App