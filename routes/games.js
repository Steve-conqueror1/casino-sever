import express from 'express';
import { createGame, getGames, getGame, updateGame, deleteGame } from '../controllers/game.js';

const router = express.Router();

router.post('/', createGame);
router.get('/', getGames);
router.get('/:id', getGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
