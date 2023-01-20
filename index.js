const sharp = require("sharp");

class ImgValidation {
  constructor() {
    this.isValid = false;
  }

  static async base64(base64String) {
    try {
      const base64 = Buffer.from(base64String, "base64");
      const metadata = await sharp(base64).metadata();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }
}

module.exports = ImgValidation;
