// Type definitions for React (react-dom) 16.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Josh Rutherford <https://github.com/theruther4d>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6



declare namespace ReactDOM {
        export function findDOMNode(instance: React.ReactInstance): Element | null | Text;
        export function unmountComponentAtNode(container: Element): boolean;

        export function createPortal(children: React.ReactNode, container: Element, key?: null | string): React.ReactPortal;

        export const version: string;
        export const render: Renderer;
        export const hydrate: Renderer;

        export function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
        export function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
        export function unstable_batchedUpdates(callback: () => any): void;

        export function unstable_renderSubtreeIntoContainer<T extends Element>(
            parentComponent: React.Component<any>,
            element: React.DOMElement<React.DOMAttributes<T>, T>,
            container: Element,
            callback?: (element: T) => any): T;
        export function unstable_renderSubtreeIntoContainer<P, T extends React.Component<P, React.ComponentState>>(
            parentComponent: React.Component<any>,
            element: React.CElement<P, T>,
            container: Element,
            callback?: (component: T) => any): T;
        export function unstable_renderSubtreeIntoContainer<P>(
            parentComponent: React.Component<any>,
            element: React.ReactElement<P>,
            container: Element,
            callback?: (component?: React.Component<P, React.ComponentState> | Element) => any): React.Component<P, React.ComponentState> | Element | void;

        export interface Renderer {
            // Deprecated(render): The return value is deprecated.
            // In future releases the render function's return type will be void.

            <T extends Element>(
                element: React.DOMElement<React.DOMAttributes<T>, T>,
                container: Element | null,
                callback?: () => void
            ): T;

            (
                element: Array<React.DOMElement<React.DOMAttributes<any>, any>>,
                container: Element | null,
                callback?: () => void
            ): Element;

            (
                element: React.SFCElement<any> | Array<React.SFCElement<any>>,
                container: Element | null,
                callback?: () => void
            ): void;

            <P, T extends React.Component<P, React.ComponentState>>(
                element: React.CElement<P, T>,
                container: Element | null,
                callback?: () => void
            ): T;

            (
                element: Array<React.CElement<any, React.Component<any, React.ComponentState>>>,
                container: Element | null,
                callback?: () => void
            ): React.Component<any, React.ComponentState>;

            <P>(
                element: React.ReactElement<P>,
                container: Element | null,
                callback?: () => void
            ): React.Component<P, React.ComponentState> | Element | void;

            (
                element: Array<React.ReactElement<any>>,
                container: Element | null,
                callback?: () => void
            ): React.Component<any, React.ComponentState> | Element | void;

            (
                parentComponent: React.Component<any> | Array<React.Component<any>>,
                element: React.SFCElement<any>,
                container: Element,
                callback?: () => void
            ): void;
        }
}
