import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define a styled button
const Button = styled.button`
    background: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

const Home = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Goutham! A passionate developer from Chennai. 🚀</p>
        <Button>Click Me</Button>
    </motion.div>
);

export default Home;
