import {Board} from "./Board/board";
import React = require("react");
import {connect} from "react-redux";
import {Editor} from "./Editor/Editor";

class ScreensCmp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div className={'Screens ' + (this.props.selectedStage !== 0 ? 'OpenEditor' : '')}>
            <Editor/>
            <Board/>
        </div>);
    }
}

const mapStateToProps = (state: any) => {
    return {
        selectedStage: state.selectedStage
    }
};

export const Screens: any = connect(
    mapStateToProps
)(ScreensCmp);