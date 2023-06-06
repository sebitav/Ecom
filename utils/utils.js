const generateId = () => {
    const idLength = 8;
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < idLength; i++) {
      id += characters[Math.floor(Math.random() * characters.length)];
    }
    return id;
  };
  
  module.exports = {
    generateId,
  };
  