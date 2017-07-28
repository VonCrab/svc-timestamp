'use strict';

const error_response = { unix: null, natural: null };
const format_options = { year: 'numeric', month: 'long', day: 'numeric' }

function buildResponse(time) {
  const decoded_time = decodeURI(time);
  var parsed_time;

  if (parsed_time = parseInt(decoded_time)) {
    var date = new Date(parsed_time * 1000);

    if (parsed_time < 0) {
      return error_response;
    }

    return { unix: date.getTime() / 1000, natural: date.toLocaleDateString("en-US", format_options) };

  } else {
    var date = new Date(decoded_time);

    if (date === 'Invalid Date') {
      return error_response;
    }

    return { unix: date.getTime() / 1000, natural: date.toLocaleDateString("en-US", format_options) };
  }
}

module.exports = (time) => {
  return {
    response: buildResponse(time)
  };
};
