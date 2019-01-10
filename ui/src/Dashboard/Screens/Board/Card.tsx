import React = require("react");
import {connect} from "react-redux";

export class CardCmp extends React.Component<{ key:number, index:number, selectedStage:number, selected?:boolean, setStage:(stageIndex:number) => void }, any> {

    constructor(props: any) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.selectedStage === this.props.index) {
            this.props.setStage(0);
        } else {
            this.props.setStage(this.props.index);
        }
    }

    render() {
        return (
            <div onClick={this.onClick} className={'Card ' + (this.props.selected === true ? 'Sel' : '')}>
                <div className={'Index'}>{this.props.index}</div>
                <div className={'Stars'}>
                    <div className={'Fixed'}>
                        <div className={'Dot'}></div>
                        <div className={'Dot'}></div>
                        <div className={'Dot'}></div>
                        <div className={'Dot'}></div>
                        <div className={'Dot'}></div>
                    </div>
                    <div className={'Given'}>
                        <div className={'Dot'}></div>
                        <div className={'Dot'}></div>
                        <div className={'Dot'}></div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        selectedStage: state.selectedStage
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    setStage: (num: number) => {
        dispatch({
            selectedStage: num,
            type: 'OKAY'
        });
    }
});

export const Card: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardCmp);