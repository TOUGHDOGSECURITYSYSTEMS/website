import React from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';
import 'bootstrap'; // Import Bootstrap CSS
import Header from "../components/Header"

function Home() {
  return (
    <div>
        <Header />
    </div>
  );
}

export default Home;
