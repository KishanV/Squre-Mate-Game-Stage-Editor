import {Screens} from "./Screens/screens";
import React = require("react");

export class Dashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div className={'Dashboard'}>
            <Screens/>
        </div>);
    }
}