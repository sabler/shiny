var _ = require('lodash');

console.log("shiny!")


var layoutTemplate = {
    isTemplate: true,
    brand: "not set",
    experiment: true
}
var newLayoutComponent = Object.create(layoutTemplate);

Object.defineProperty(layoutTemplate, "components", {
    value:{},
    writable:true
});

layoutTemplate.components.builtin = [{foo:"bar"}];

console.log(layoutTemplate.components.builtin[0].foo);
console.log(Object.keys(layoutTemplate))
console.log(layoutTemplate);
