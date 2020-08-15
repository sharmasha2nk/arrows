function todo(model) {
    var statements = [];
    model.nodeList().forEach(function (node) {
        if (node.caption())
            statements.push("- " + node.caption());
    });
    if (statements.length == 0) return "";
    return statements.join("\n");
};
if (typeof exports != "undefined") exports.todo = todo
gd.todo = function (model) {
    return todo(model || this.model());
}