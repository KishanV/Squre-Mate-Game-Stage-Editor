"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screens_1 = require("./Screens/screens");
const React = require("react");
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'Dashboard' },
            React.createElement(screens_1.Screens, null)));
    }
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.js.map