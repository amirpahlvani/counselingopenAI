// backend/app.js
//
// This file initializes an Express application. Middlewares and routes
// should be added in the corresponding folders under `src/`.

const express = require('express');

const app = express();

// TODO: register middleware (e.g. body parsing, authentication) here

// TODO: register API routes here, e.g.:
// const userRoutes = require('./src/routes/userRoutes');
// app.use('/api/users', userRoutes);

module.exports = app;
