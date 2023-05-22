import React from 'react';
import ReactDOM from "react-dom/client";

import { App } from "./HelloWorld";
import { FirstApp } from "./FirstApp";

import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola, Illika" subtitle={123} />
    </React.StrictMode>
);