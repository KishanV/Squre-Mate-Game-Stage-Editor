import {Board} from "./Board/board";

export class Screens extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div className={'Screens'}>
            <Board/>
        </div>);
    }
}