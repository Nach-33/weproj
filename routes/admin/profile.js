const express = require("express");
const {
  checkAuthorizationHeaders,
  authenticateAdmin,
} = require("../../middlewares/authenticate");
const {
  validateRequestBody,
  checkMongoId,
} = require("../../middlewares/validateRequestBody");
const {
  getAdminProfile,
  checkChangeHandleRequest,
  changeHandle,
  getAllAdmins,
} = require("../../controllers/admin/profile");
const router = express.Router({ mergeParams: true });

router.route("/id/:admin_id").get(
  checkAuthorizationHeaders,
  validateRequestBody,
  authenticateAdmin,
  checkMongoId("admin_id"),

  getAdminProfile
);

router.route("/all").get(
  checkAuthorizationHeaders,
  validateRequestBody,
  authenticateAdmin,

  getAllAdmins
);

router.route("/handle").patch(
  checkAuthorizationHeaders,
  validateRequestBody,
  authenticateAdmin,
  checkChangeHandleRequest,
  validateRequestBody,

  changeHandle
);

module.exports = router;
