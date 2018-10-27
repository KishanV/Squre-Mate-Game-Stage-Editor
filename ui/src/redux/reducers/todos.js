"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => (todo.id === action.id)
                ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
        default:
            return state;
    }
};
exports.default = todos;
//# sourceMappingURL=todos.js.map