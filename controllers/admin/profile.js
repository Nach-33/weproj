const { admin } = require("googleapis/build/src/apis/admin");
const asyncHandler = require("../../middlewares/asyncHandler");
const ErrorResponse = require("../../utils/ErrorResponse")
const Admin = require("../../models/Admin");

exports.getAdminProfile = asyncHandler(async(req, res) => {
    const {admin_id} = req.params;
    
    const admin_profile = await Admin.findOne({_id: admin_id});

    if(!admin_profile) throw new ErrorResponse("No Such Admin Found");

    return res.status(200).json({
        message: "Admin Found Successfully",
        data: admin_profile
    })
})