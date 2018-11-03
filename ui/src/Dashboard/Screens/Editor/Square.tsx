import * as React from "react";
import {connect} from "react-redux";
import ReactDOM = require("react-dom");
import {ContextMenu} from "./ContextMenu";
import {Element} from "../../../util";
import getPos = Element.getPos;

export class SquareData {
    sticks: {
        top: number
        left: number
        bottom: number
        right: number
    } = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    bgColor: string = 'transparent';
};

class SquareCmp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
    }

    onClick() {
        this.props.setSquare(this.props.index);
    }

    getSticks(no: number) {
        let items: any[] = [];
        for (let i = 0; i < no; i++) {
            items.push(<div className={'Item'} key={i}></div>);
        }
        return <div className={'Holder'}>
            <div className={'Sticks'} style={{width: ((no * 7) - 4) + 'px'}}>
                {items}
            </div>
        </div>;
    }

    onContextMenu(event: MouseEvent | any) {
        const appElm = document.createElement('div');
        appElm.classList.add('Holder');
        document.body.appendChild(appElm);
        ReactDOM.render(
            <ContextMenu cords={getPos(this.refs.content as HTMLElement)} parentElm={appElm} />,
            appElm
        );
        this.props.setSquare(this.props.index);
    }

    getContent() {
        if (this.props.squreData) {
            const squreData: SquareData = this.props.squreData;
            return (
                <div className={'Content'} ref={'content'} onContextMenu={this.onContextMenu} style={{background: squreData.bgColor}}>
                    {this.getSticks(squreData.sticks.top)}
                    {this.getSticks(squreData.sticks.right)}
                    {this.getSticks(squreData.sticks.bottom)}
                    {this.getSticks(squreData.sticks.left)}
                </div>);
        }
    }

    render() {
        return <div onClick={this.onClick}
                    className={'Box Square ' + (this.props.selectedSquare === this.props.index ? 'Sel' : '')}>
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