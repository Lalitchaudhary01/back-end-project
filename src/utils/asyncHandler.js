 const asyncHandler = () => {
    (res, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
}
}
export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//     res.static(err.code || 500).json({
//         success: false,
//         message: err.message
//     })
//     }
//}