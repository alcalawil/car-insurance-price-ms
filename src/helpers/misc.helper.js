const executeMany = (functionToExecute, times) => {
  for (let i = 0; i < times; i++) {
    functionToExecute();
  }
};

module.exports = { executeMany };
