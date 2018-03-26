const figlet = require('figlet');
const chalk = require('chalk');

//Dar color a una String
const colorize = (msg, color) => {
  if(typeof color !== "undefined"){
    msg = chalk[color].bold(msg);
  }
  return msg;
};

//Escribe un mensaje de log
const log = (socket, msg, color) => {
  socket.write(colorize(msg, color) + "\n");
};

//Escribe un mensaje grande de log
const biglog = (socket, msg, color) => {
  log(socket, figlet.textSync(msg,{horizontalLayout: 'full'}), color);
};

//Escribe el mensaje de error
const errorlog = (socket, emsg) => {
  socket.write(`${colorize("Error", "red")}: ${colorize(colorize(emsg, "red"), "bgYellowBright")}\n`);
};

exports = module.exports = {
	colorize,
	log,
	biglog,
	errorlog
};