import * as React from "react";

export class ContextMenu extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if (this.refs.contextMenuRef) {
            let elmDown: boolean = false;
            const elm = this.refs.contextMenuRef as HTMLElement;
            elm.addEventListener('mousedown', () => {
                elmDown = true;
            });
            const self = this;
            const winDownFn = () => {
                if (elmDown === false) {
                    window.removeEventListener('mousedown', winDownFn);
                    if (elm.parentElement) {
                        elm.parentElement.remove();
                    }
                }
                elmDown = false;
            };
            window.addEventListener('mousedown', winDownFn);
        }
    }

    render() {
        return <div ref={'contextMenuRef'} style={{top: this.props.cords.top + 58, left: this.props.cords.left}}
                    className={'ContextMenu'}></div>;
    }

}