const jade = require("jade");
var str = jade.renderFile("./views/11.jade", {
    pretty: true
});
console.log(str);