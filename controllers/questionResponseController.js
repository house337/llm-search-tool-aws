import Response from '../models/Response.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';
import mongoose from 'mongoose';
import moment from 'moment';
const createResponse = async (req, res) => {
    const { questionId, questionText, catId, category, responses, usage} = req.body;

    if (!questionId || !questionText || !catId || !category || !responses || !usage ) {
      throw new BadRequestError('Please provide all values');
    }

  const resp = await Response.create(req.body);
  res.status(StatusCodes.CREATED).json({ resp });
};

const getAllResponse = async (req, res) => {

    
    let result = Response.find({});
  
    const res_questions = await result;
  
    res.status(StatusCodes.OK).json({ res_questions });
  };

export { createResponse, getAllResponse};