'use strict';

const i2b = require('imageurl-base64');
const miniponic = require('../../../config/miniponic.json');

function takePicture() {
  return new Promise((resolve, reject) => {
    // resolve('photo');
    i2b(miniponic.PHOTO_CALL, (error, photo) => {
      if (error) resolve(error);
      resolve(photo.base64);
    });
  });
}

module.exports = takePicture;
