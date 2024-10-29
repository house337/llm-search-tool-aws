import Analysis from '../models/Analysis.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';
import mongoose from 'mongoose';
import moment from 'moment';
const createAnalysis = async (req, res) => {

    const { categories, name, review, summary} = req.body;

    if (!categories || !name || !review || !summary ) {
      throw new BadRequestError('Please provide all values');
    }


  const analyse = await Analysis.create(req.body);
  res.status(StatusCodes.CREATED).json({ analyse });
};
const getAllAnalysis = async (req, res) => {

    
    let result = Analysis.find({});
  
    const res_analysis = await result;
  
    res.status(StatusCodes.OK).json({ res_analysis });
  };

export { createAnalysis, getAllAnalysis};