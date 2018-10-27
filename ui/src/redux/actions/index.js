"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextTodoId = 0;
exports.addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});
exports.setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
exports.toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});
exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
//# sourceMappingURL=index.js.map