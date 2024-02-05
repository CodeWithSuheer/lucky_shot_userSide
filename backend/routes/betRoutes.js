import express from "express";
import {
  createBet,
  createBetWinners,
  getAllBets,
  getBetWinners,
} from "../controllers/betController.js";

const betRouter = express.Router();

betRouter.post("/createBet", createBet);
betRouter.post("/getAllBets", getAllBets);
betRouter.post("/createBetWinners", createBetWinners);
betRouter.post("/getBetWinners", getBetWinners);

export default betRouter;
