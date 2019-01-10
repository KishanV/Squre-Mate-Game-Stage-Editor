import {Menu} from "./Menu";
import {Card, CardCmp} from "./Card";
import React = require("react");
import {connect} from "react-redux";

class BoardCmp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    getCards() {
        const list:any[] = [];
        for (let i = 0;i < 11;i++){
            if(this.props.selectedStage === i+1){
                list.push(<CardCmp setStage={this.props.setStage} selectedStage={this.props.selectedStage} key={i} selected={true} index={i+1}/>);
            } else {
                list.push(<CardCmp setStage={this.props.setStage} selectedStage={this.props.selectedStage}  key={i}  index={i+1}/>);
            }
        }
        return list;
    }

    render() {
        return (
            <div className={'Board'}>
                <Menu/>
                <div className={'Title'}>
                    Level 01
                    <span> EASY </span>
                    select stage from below
                </div>
                <div className={'Grid'}>
                    {this.getCards()}
                </div>
                <div className={'Bottom'}>Developed By Linedeer.</div>
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

export const Board: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardCmp);
