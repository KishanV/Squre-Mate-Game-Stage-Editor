import {Card} from "./Card";

export class Menu extends React.Component<any, any> {
    state: any = {
        Sel: 1
    };

    constructor(props: any) {
        super(props);
        this.selectMenu = this.selectMenu.bind(this);
    }

    selectMenu(no: number) {
        this.setState({
            Sel: 3
        });
    }

    getItemMenu() {
        const list: any[] = [];
        for (let i = 0; i < 4; i++) {
            let str = 'Sel';
            if (i + 1 == this.state.Sel) {

                list.push(<div className={'Item ' + str} onClick={ event1 => {
                        this.setState({
                            Sel: 1 + i
                        });
                }}>0{i + 1}</div>);

            } else {

                list.push(<div className={'Item '} onClick={event1 => {
                    this.setState({
                        Sel: 1 + i
                    });
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