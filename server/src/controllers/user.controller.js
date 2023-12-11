import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
   const { fullName, email, password } = req.body;
try {

  if ([fullName, email, password].some((field) => field?.trim() === "")) {
    res.status(400).json({ message: "all fields are required" });
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { fullName }],
  });

  if (existedUser) {
    res.status(409).json({ message: "User already exists" });
  }

  const createUser = await User.create({
    fullName,
    email,
    password,
  });

  const newUser = await User.findById(createUser._id).select("-password");

  if(!newUser){
      res.status(503).json({message: "something went wrong while creating a new user"})
  }

  const token = newUser.generateAccessToken()  ;
  res.status(201).json({
      newUser,
      message: "User created successfully",
       token,
   });

  
} catch (error) {
  console.log(error.message);
}
}


 export const Login = async (req, res) => {
    const { email, password } = req.body;

    try {

      if ([email, password].some((field) => field?.trim() === "")) {
        res.status(400).json({ message: "all fields are required" });
      }

      const oldUser =  await User.findOne({ email });

   
      if (!oldUser) {
        res.status(404).json({ message: "User does not exist" });
      }
      const isPasswordCorrect =  await oldUser.comparePassword(password);

      if (!isPasswordCorrect) {
        res.status(403).json({ message: "Invalid credentials" });
      }
      
      const accessToken = oldUser.generateAccessToken();
      res.status(200).json({ 
        oldUser,
         accessToken,
          message: "User logged in successfully",
       });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }

}