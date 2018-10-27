import * as React from "react";

export  class Editor extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    getBackgroundBoxes() {
        const list = [];
        for (let i = 0;i < 35; i++) {
            list.push(<div className={'Box'}></div>)
        }
        return list;
    }

    getPlaygroundBoxes() {
        const list = [];
        for (let i = 0;i < 35; i++) {
            list.push(<div className={'Box'}></div>)
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
                <div className={'Menu'}></div>
            </div>
            <div className={'Boxes'}>
                <div className={'Playground'}>
                    {this.getPlaygroundBoxes()}
                </div>
                <div className={'Background'}>
                    {this.getBackgroundBoxes()}
                </div>
            </div>
        </div>);
    }

}