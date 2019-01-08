module.exports = function (source) {
  console.warn(source)
  return `module.exports = '${console.log(source)}'`;
}