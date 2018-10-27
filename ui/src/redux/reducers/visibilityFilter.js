"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const visibilityFilter = (state = actions_1.VisibilityFilters.SHOW_ALL, action) => {
    console.trace();
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};
exports.default = visibilityFilter;
//# sourceMappingURL=visibilityFilter.js.map