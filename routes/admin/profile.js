const express = require("express");
const {
  checkAuthorizationHeaders,
  authenticateAdmin,
} = require("../../middlewares/authenticate");
const {
  validateRequestBody,
  checkMongoId,
} = require("../../middlewares/validateRequestBody");
const { getAdminProfile } = require("../../controllers/admin/profile");
const router = express.Router({ mergeParams: true });

router.route("/:admin_id").get(
  checkAuthorizationHeaders,
  validateRequestBody,
  authenticateAdmin,
  checkMongoId("admin_id"),

  getAdminProfile
);

module.exports = router;
