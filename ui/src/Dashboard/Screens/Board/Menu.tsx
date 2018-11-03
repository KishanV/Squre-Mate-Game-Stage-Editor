import React = require("react");
import {connect} from 'react-redux';

class MenuCmp extends React.Component<any, any> {
    state: any = {
        Sel: 1
    };

    constructor(props: any) {
        super(props);
    }

    getItemMenu() {
        const list: any[] = [];
        for (let i = 0; i < 4; i++) {
            let str = 'Sel';
            const num = i+1;
            if (i + 1 == this.props.selectedLevel) {
                list.push(<div className={'Item ' + str} key={i} onClick={event1 => {
                    this.props.setMenu(num);
                }}>0{i + 1}</div>);

            } else {
                list.push(<div className={'Item '} key={i} onClick={event1 => {
                    this.props.setMenu(num);
                }}>0{i + 1}</div>);
            }
        }
        return list;
    }

    render() {
        return (
            <div className={'Menu'}>
                <div className={'Holder'}>
                    {this.getItemMenu()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        selectedLevel: state.selectedLevel
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    setMenu: (num: number) => {
        dispatch({
            selectedLevel: num,
            type: 'OKAY'
        });
    }
});

export const Menu: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuCmp);
