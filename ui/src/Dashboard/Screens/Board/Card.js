"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class CardCmp extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        if (this.props.selectedStage === this.props.index) {
            this.props.setStage(0);
        }
        else {
            this.props.setStage(this.props.index);
        }
    }
    render() {
        return (React.createElement("div", { onClick: this.onClick, className: 'Card ' + (this.props.sel === true ? 'Sel' : '') },
            React.createElement("div", { className: 'Index' }, this.props.index),
            React.createElement("div", { className: 'Stars' },
                React.createElement("div", { className: 'Fixed' },
                    React.createElement("div", { className: 'Dot' }),
                    React.createElement("div", { className: 'Dot' }),
                    React.createElement("div", { className: 'Dot' }),
                    React.createElement("div", { className: 'Dot' }),
                    React.createElement("div", { className: 'Dot' })),
                React.createElement("div", { className: 'Given' },
                    React.createElement("div", { className: 'Dot' }),
                    React.createElement("div", { className: 'Dot' }),
                    React.createElement("div", { className: 'Dot' })))));
    }
}
const mapStateToProps = (state) => {
    return {
        selectedStage: state.selectedStage
    };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    setStage: (num) => {
        dispatch({
            selectedStage: num,
            type: 'OKAY'
        });
    }
});
exports.Card = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardCmp);
//# sourceMappingURL=Card.js.map