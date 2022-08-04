import * as React from "react";
/**
 * Gegevens weergeven met React
 * U kunt gegevens weergeven met React. Het onderdeel kan gegevens weergeven op basis van de eigen status.
 */
export interface State {
    kpiData: object[];
}
export declare const initialState: State;
export declare class KpiBolChart extends React.Component<{}> {
    constructor(props: any);
    /**
     * Uw visual instellen om gegevens te verzenden
     * In deze sectie werkt u uw visual bij om updates te verzenden naar exemplaren in het onderdeelbestand .
     */
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    /**
     * het renderen van het react component
     */
    render(): JSX.Element;
}
export default KpiBolChart;
