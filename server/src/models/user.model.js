import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
   fullName:{
         type: String,
         required: true,
         trim: true,
         min: 3,
         max: 20

   },
   email:{
         type: String,
         required: true,
         trim: true,
         unique: true,
   },
   password:{
         type: String,
         required: false,
         trim: true,
         unique: true,
   },
   googleId:{
         type: String,
         required: false,
   },
   refreshToken:{
         type: String,
   },
   id:{
         type: String,
   }
},{timestamps: true});

userSchema.pre('save', async function(next){
   if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10);
   next();
   });

   userSchema.methods.comparePassword =  async function(password){
        try {
            return  await bcrypt.compare(password, this.password);
        } catch (error) {
            console.log(error.message);
            throw error;
        }
   }

userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
      {_id: this._id,
      name: this.name,
      email: this.email,},
       process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
        )
       };

userSchema.methods.generateRefreshToken = function(){
   return jwt.sign(
      {_id: this._id},
       process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
        )
}
   

 export const User = new mongoose.model('user', userSchema);