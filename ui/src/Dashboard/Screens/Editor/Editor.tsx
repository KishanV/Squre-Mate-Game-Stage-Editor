import * as React from "react";
import {Square, SquareData} from "./Square";
import {connect} from "react-redux";

export class EditorCmp extends React.Component<any, any> {

    state: {
        list: SquareData[]
    } = {
        list: []
    };

    constructor(props: any) {
        super(props);
    }

    updateData() {
        const dataKey = 'StageData:' + this.props.selectedStage + ':' + this.props.selectedLevel;
        let data = localStorage.getItem(dataKey);
        if (data == undefined) {
            localStorage.setItem(dataKey, JSON.stringify([]));
            data = JSON.parse('[]');
        } else {
            data = JSON.parse(data);
        }
        this.setState({
            list: data
        });
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps() {
        this.updateData();
    }

    getBackgroundBoxes() {
        const list = [];
        for (let i = 0; i < 35; i++) {
            list.push(<div className={'Box'} key={i}></div>)
        }
        return list;
    }

    getPlaygroundBoxes() {
        const list = [];
        for (let i = 0; i < 35; i++) {
            let squreData = new SquareData();
            if (this.state.list[i] !== undefined) {
                squreData = this.state.list[i];
            }
            list.push(<Square squreData={squreData} index={i} key={i}/>);
        }
        return list;
    }

    render() {
        return (<div className={'Editor'}>
            <div className={'Title'}>
                <div className={'Play'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                        <path fill="#ffd210" d="M16 10v28l22-14z"/>
                    </svg>
                    <span className={'lable'}>play</span>
                </div>
                <div className={'Menu'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffd210"/>
                    </svg>
                </div>
                <div className={'Lable'}>Lavel 1</div>
            </div>
            <div className={'Boxes'}>
                <div className={'Background'}>
                    {this.getBackgroundBoxes()}
                </div>
                <div className={'Playground'}>
                    {this.getPlaygroundBoxes()}
                </div>
            </div>
            <div className={'Save'}>Save</div>
        </div>);
    }
}

const mapStateToProps = (state: any) => {
    return {
        selectedStage: state.selectedStage,
        selectedLevel: state.selectedLevel
    }
};

export const Editor: any = connect(
    mapStateToProps
)(EditorCmp);