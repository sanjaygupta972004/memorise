
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const validateUserAuth =  (schema) => asyncHandler(async (req, _, next) => {
   try {
      const parseBody = await schema.parseAsync(req.body);
   if (!parseBody) {
      throw new ApiError(400, "All fields are required");
   }
   req.body = parseBody;
   next();
      
   } catch (error) {
      throw new ApiError(400, error.message || error.details[0].message);

      }

      
   });


export {
   validateUserAuth
}

