"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./Board/board");
const React = require("react");
const react_redux_1 = require("react-redux");
const Editor_1 = require("./Editor/Editor");
class ScreensCmp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'Screens ' + (this.props.selectedStage !== 0 ? 'OpenEditor' : '') },
            React.createElement(Editor_1.Editor, null),
            React.createElement(board_1.Board, null)));
    }
}
const mapStateToProps = (state) => {
    return {
        selectedStage: state.selectedStage
    };
};
exports.Screens = react_redux_1.connect(mapStateToProps)(ScreensCmp);
//# sourceMappingURL=screens.js.map