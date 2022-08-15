import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

export default router;
