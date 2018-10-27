"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    getBackgroundBoxes() {
        const list = [];
        for (let i = 0; i < 35; i++) {
            list.push(React.createElement("div", { className: 'Box' }));
        }
        return list;
    }
    getPlaygroundBoxes() {
        const list = [];
        for (let i = 0; i < 35; i++) {
            list.push(React.createElement("div", { className: 'Box' }));
        }
        return list;
    }
    render() {
        return (React.createElement("div", { className: 'Editor' },
            React.createElement("div", { className: 'Title' },
                React.createElement("div", { className: 'Play' },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", viewBox: "0 0 48 48" },
                        React.createElement("path", { fill: "#ffd210", d: "M16 10v28l22-14z" })),
                    React.createElement("span", { className: 'lable' }, "play")),
                React.createElement("div", { className: 'MenuIcon' },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        React.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z", fill: "#ffd210" }))),
                React.createElement("div", { className: 'Menu' })),
            React.createElement("div", { className: 'Boxes' },
                React.createElement("div", { className: 'Playground' }, this.getPlaygroundBoxes()),
                React.createElement("div", { className: 'Background' }, this.getBackgroundBoxes()))));
    }
}
exports.Editor = Editor;
//# sourceMappingURL=Editor.js.map