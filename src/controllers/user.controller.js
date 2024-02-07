import { asyncHandler } from "../utils/asyncHandler";

const ragisterUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { ragisterUser };
