import {Screens} from "./Screens/screens";

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