require("dotenv").config();

const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.ADMIN_AUTH_REDIRECT_URI
);

const scopes = ["email", "profile"];

exports.getAdminURL = () => {
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
  });

  return authorizationUrl;
};
