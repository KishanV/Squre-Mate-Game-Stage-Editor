"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class MenuCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Sel: 1
        };
    }
    getItemMenu() {
        const list = [];
        for (let i = 0; i < 4; i++) {
            let str = 'Sel';
            const num = i + 1;
            if (i + 1 == this.props.selectedMenu) {
                list.push(React.createElement("div", { className: 'Item ' + str, key: i, onClick: event1 => {
                        this.props.setMenu(num);
                    } },
                    "0",
                    i + 1));
            }
            else {
                list.push(React.createElement("div", { className: 'Item ', key: i, onClick: event1 => {
                        this.props.setMenu(num);
                    } },
                    "0",
                    i + 1));
            }
        }
        return list;
    }
    render() {
        console.log(this.props);
        return (React.createElement("div", { className: 'Menu' },
            React.createElement("div", { className: 'Holder' }, this.getItemMenu())));
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMenu: state.selectedMenu
    };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    setMenu: (num) => {
        dispatch({
            selectedMenu: num,
            type: 'OKAY'
        });
    }
});
exports.Menu = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MenuCmp);
//# sourceMappingURL=Menu.js.map