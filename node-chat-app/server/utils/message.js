const generateMessage = (from, text) => ({
  from,
  text,
  createdAt: new Date().getTime(),
});

const generateLocationMessage = (from, latitute, longitude) => ({
  from,
  url: `https://www.google.com/maps?q=${latitute},${longitude}`,
  createdAt: new Date().getTime(),
});

module.exports = { generateMessage, generateLocationMessage };
