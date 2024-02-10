import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/AppError.js";
import { User } from "../models/user.model.js";
const ragisterUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // if user already exisrs
  //check for images , check for avatar
  // upload them to cloudinary, avatar
  // create user objects - create entry in db
  // remove password and refresh token field from response
  // return res

  const { fullName, email, username, password } = req.body;
  console.log("emails: ", email);
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
});

export { ragisterUser };
