import * as React from "react";

/**Gegevens weergeven met React
 *
 * U kunt gegevens weergeven met React. Het onderdeel kan gegevens weergeven op basis van de eigen status.*/
export interface State {
    kpiData: object[],

    size: number
}

export const initialState: State = {
    kpiData: [],

    size: 0
}

export class KpiBolChart extends React.Component<{}> {

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    /**Uw visual instellen om gegevens te verzenden
     *
     * In deze sectie werkt u uw visual bij om updates te verzenden naar exemplaren in het onderdeelbestand .*/
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

    /** hier sorteren van de status op kleur? of aparte variabele / kolommen maken van uit de data base?*/
    /** het renderen van het react component */
    render() {
        const {kpiData, size} = this.state;
        console.log(`even kijken ${kpiData}`)

        const style: React.CSSProperties = { width: size, height: size };

        return (
            <>
                <div className="container" style={style}>
                    <div className="wrapper">
                        <h1>Overall - (datum)</h1>
                        <p>(totaal) KPI's require your attention.</p>
                        <div className="circle-card">
                            {kpiData.map((kpiData) => {
                                return (
                                    <div className="whole-circle" key={kpiData[0]}>
                                        <div className={`circle-card-top theme-${kpiData[1]}-top`}/>
                                        <div className={`circle-card-bottom theme-${kpiData[1]}-bottom`}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default KpiBolChart;