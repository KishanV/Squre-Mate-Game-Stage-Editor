export class Menu extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'Menu'}>
                <div className={'Holder'}>
                    <div className={'Item Sel'}>01</div>
                    <div className={'Item'}>02</div>
                    <div className={'Item'}>03</div>
                    <div className={'Item'}>04</div>
                </div>
            </div>
        );
    }
}