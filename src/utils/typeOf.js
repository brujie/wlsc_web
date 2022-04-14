// 数据类型判断
[
    "Array",
    "Object",
    "Arguments",
    "Error",
    "Date",
    "RegExp",
    "Function",
    "Null",
    "Undefined",
    "String",
    "Number",
    "Boolean",
].forEach((action) => {
    const handleTypeOf = function (val) {
        return Object.prototype.toString.call(val);
    };
    Vue.prototype["is" + action] = function (nval) {
        console.log(handleTypeOf(nval));
        return handleTypeOf(nval) == [`object ${action}`];
    };
});