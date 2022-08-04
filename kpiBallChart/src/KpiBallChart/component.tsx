import * as React from "react";
import {map} from "d3";


/**
 * Gegevens weergeven met React
 * U kunt gegevens weergeven met React. Het onderdeel kan gegevens weergeven op basis van de eigen status.
 */
export interface State {
    kpiData: object[]
}

export const initialState: State = {
    kpiData: []
}



export class KpiBolChart extends React.Component<{}> {

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    /**
     * Uw visual instellen om gegevens te verzenden
     * In deze sectie werkt u uw visual bij om updates te verzenden naar exemplaren in het onderdeelbestand .
     */
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof KpiBolChart.updateCallback === 'function') {
            KpiBolChart.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        KpiBolChart.updateCallback = (newState: State): void => {
            this.setState(newState);
        };
    }

    public componentWillUnmount() {
        KpiBolChart.updateCallback = null;
    }

    /**
     * het renderen van het react component
     */
    render() {

        const {kpiData} = this.state;
        console.log(`even kijken ${kpiData}`)
        return (
            <>
                <div className="circleCard">
                    {kpiData.map((kpiData) => {
                        return (
                            <div className="whole-circle" key={kpiData[0]}>
                                <div className="circleCardTop theme-yellow-top"/>
                                <div className="circleCardBottom theme-yellow-bottom"/>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default KpiBolChart;