const { cloudName, cloudApiKey, cloudSecretKey } = require("../src/secret");

const cloudinary = require("cloudinary").v2

cloudinary.config({ 
  cloud_name: cloudName, 
  api_key: cloudApiKey, 
  api_secret: cloudSecretKey
});

module.exports = cloudinary