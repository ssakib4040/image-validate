const ImgValidation = require(".");

const base64Image = require("./base64");

async function test() {
  const isValid = await ImgValidation.base64(base64Image);
  console.log(isValid);
}

test();
