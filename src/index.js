import 'dotenv/config'
import express from 'express';
import MongoDB from './utils/MongoDB.js';
import Setup from './utils/Setup.js';
import Hooks from './Hooks/Hooks.js';

const app = express();

Setup(app)

Hooks(app)

MongoDB(app)