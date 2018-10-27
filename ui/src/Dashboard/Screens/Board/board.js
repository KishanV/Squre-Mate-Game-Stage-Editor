"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("./Menu");
const Card_1 = require("./Card");
const React = require("react");
const react_redux_1 = require("react-redux");
class BoardCmp extends React.Component {
    constructor(props) {
        super(props);
    }
    getCards() {
        const list = [];
        for (let i = 0; i < 11; i++) {
            if (this.props.selectedStage === i + 1) {
                list.push(React.createElement(Card_1.Card, { key: i, sel: true, index: i + 1 }));
            }
            else {
                list.push(React.createElement(Card_1.Card, { key: i, index: i + 1 }));
            }
        }
        return list;
    }
    render() {
        return (React.createElement("div", { className: 'Board' },
            React.createElement(Menu_1.Menu, null),
            React.createElement("div", { className: 'Title' },
                "Level 01",
                React.createElement("span", null, " EASY "),
                "select stage from below"),
            React.createElement("div", { className: 'Grid' }, this.getCards()),
            React.createElement("div", { className: 'Bottom' }, "Developed By Linedeer.")));
    }
}
const mapStateToProps = (state) => {
    return {
        selectedStage: state.selectedStage
    };
};
exports.Board = react_redux_1.connect(mapStateToProps)(BoardCmp);
//# sourceMappingURL=board.js.map