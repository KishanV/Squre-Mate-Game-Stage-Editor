import {Menu} from "./Menu";

export class Board extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
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
                <div className={'Grid'}></div>
                <div className={'Bottom'}></div>
            </div>
        );
    }
}