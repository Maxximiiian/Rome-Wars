/* eslint-disable linebreak-style */
import express from 'express';
import template from '../template';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});
export default router;
