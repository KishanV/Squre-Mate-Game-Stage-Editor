import * as React from "react";
import {connect} from "react-redux";

class SquareData {

}

class SquareCmp extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.setSquare(this.props.index);
    }

    getContent(){
        if (this.props.selectedSquare === this.props.index){
            return <div className={'Content'}></div>;
        }
    }

    render() {
        return <div onClick={this.onClick} className={'Box Square ' + (this.props.selectedSquare === this.props.index ? 'Sel' : '')}>
            <div className={'Border'}></div>
            {this.getContent()}
        </div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        selectedSquare: state.selectedSquare
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    setSquare: (num: number) => {
        dispatch({
            selectedSquare: num,
            type: 'OKAY'
        });
    }
});

export const Square: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(SquareCmp);