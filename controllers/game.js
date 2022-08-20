import Game from '../models/Game.js';

export const createGame = async (req, res, next) => {
  const newGame = new Game(req.body);
  try {
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    next(err)
  }
};

export const deleteGame = async (req, res, next) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.status(201).json({message: 'Game removed successfully'});
  } catch (err) {
    next(err)
  }
};

export const getGame = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id)
    res.status(200).json(game);
  } catch (err) {
    next(err)
  }
};


export const updateGame = async (req, res, next) => {
  try {
    const updateGame = await Game.findByIdAndUpdate(req.params.id,
        {$set: req.body},
        {new: true}
        );
    res.status(200).json(updateGame);
  } catch (err) {
    next(err)
  }
};

export const getGames = async (req, res, next) => {
  try {
    const games = await Game.find().limit(req.query.limit);
    const gamesCount = await Game.countDocuments()
    res.status(200).json({data: games, count:gamesCount});
  } catch (err) {
    next(err)
  }
};



