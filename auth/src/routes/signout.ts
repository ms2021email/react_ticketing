import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('signout: Hi there!');
});

export { router as signoutRouter };
