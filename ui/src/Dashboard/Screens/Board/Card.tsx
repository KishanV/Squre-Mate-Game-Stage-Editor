export class Card extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'Card'}>
                <div className={'Index'}>{this.props.index}</div>
                <div className={'Stars'}></div>
            </div>
        );
    }

}