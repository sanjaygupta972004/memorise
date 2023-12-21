import { User } from "../models/user.model.js";

import {ApiError} from "../utils/ApiError.js";
import  {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";


const register = asyncHandler( async(req,res)=>{
  const {fullName, email, password, phoneNumber} = req.body;

  if(!fullName || !email || !password || !phoneNumber){
    throw new ApiError(400, 'All fields are required');
  };

  const oldUser = await User.findOne({
    $or: [{email}, {phoneNumber}]
  });

  if(oldUser){
    throw new ApiError(400, 'User already exists');
  };

  const user = await User.create({
    fullName,
    email,
    password,
    phoneNumber,
  });

  const tempUser = await user.save()

  const newUser = await User.findById(tempUser._id).select('-password');

  return res
  .status(201)
  .json(new ApiResponse(201, 'User created successfully', newUser));


})



export {
  register
}



