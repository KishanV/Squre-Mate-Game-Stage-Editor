"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const todos_1 = require("./todos");
const visibilityFilter_1 = require("./visibilityFilter");
exports.default = redux_1.combineReducers({
    todos: todos_1.default,
    visibilityFilter: visibilityFilter_1.default
});
//# sourceMappingURL=index.js.map