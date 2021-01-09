/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {
    DraggableDashboard,
    DraggableDashboardResponsive,
    DashboardItem,
    DashboardItemResponsive
} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <h1>Not Responsive</h1>
                <DraggableDashboard
                    id="test"
                    setProps={this.setProps}
                    clearSavedLayout={false}
                    className="okok"
                    layout={[
                        {i: 'first-item', w: 5, h: 9, x: 1, y: 1},
                        // {i: 'second-item', w: 4, h: 7, x: 1, y: 1},
                    ]}
                    {...this.state}
                >
                    <DashboardItem
                        setProps={this.setProps}
                        i="second-item"
                        w={4}
                        h={3}
                    >
                        <div>0. Enim sint id adipisicing ullamco sit.</div>
                    </DashboardItem>
                    <div id="first-item">
                        1. Enim sint id adipisicing ullamco sit.
                    </div>
                    2. Enim sint id adipisicing ullamco sit.
                    <div>3. Enim sint id adipisicing ullamco sit.</div>
                    <div>
                        4. Do ipsum mollit ut fugiat culpa non do reprehenderit
                        nostrud do aliqua commodo quis fugiat. Ullamco eiusmod
                        quis dolor culpa reprehenderit. Qui commodo fugiat
                        nostrud eu duis aliquip in nulla aliquip. Non cillum
                        nulla labore magna consectetur consequat mollit fugiat.
                        Consequat deserunt occaecat aute Lorem quis laboris
                        ullamco culpa ex quis laboris ea dolore. Do ipsum mollit
                        ut fugiat culpa non do reprehenderit nostrud do aliqua
                        commodo quis fugiat. Ullamco eiusmod quis dolor culpa
                        reprehenderit. Qui commodo fugiat nostrud eu duis
                        aliquip in nulla aliquip. Non cillum nulla labore magna
                        consectetur consequat mollit fugiat. Consequat deserunt
                        occaecat aute Lorem quis laboris ullamco culpa ex quis
                        laboris ea dolore.
                    </div>
                </DraggableDashboard>

                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'gray',
                    }}
                ></div>

                <h1>Responsive</h1>
                <DraggableDashboardResponsive
                    setProps={this.setProps}
                    clearSavedLayout={false}
                    layouts={{
                        lg: [
                            {i: 'first-item', w: 5, h: 9, x: 1, y: 1},
                            // {i: 'second-item', w: 4, h: 7, x: 1, y: 1}
                        ],
                    }}
                    {...this.state}
                >
                    <DashboardItemResponsive
                        setProps={this.setProps}
                        id="second-item"
                        w={100}
                        h={{lg: 1, md: 2, sm: 3}}
                    >
                        <div>0. Enim sint id adipisicing ullamco sit.</div>
                    </DashboardItemResponsive>
                    <div id="first-item">
                        1. Enim sint id adipisicing ullamco sit.
                    </div>
                    2. Enim sint id adipisicing ullamco sit.
                    <div>3. Enim sint id adipisicing ullamco sit.</div>
                    <div>
                        4. Do ipsum mollit ut fugiat culpa non do reprehenderit
                        nostrud do aliqua commodo quis fugiat. Ullamco eiusmod
                        quis dolor culpa reprehenderit. Qui commodo fugiat
                        nostrud eu duis aliquip in nulla aliquip. Non cillum
                        nulla labore magna consectetur consequat mollit fugiat.
                        Consequat deserunt occaecat aute Lorem quis laboris
                        ullamco culpa ex quis laboris ea dolore. Do ipsum mollit
                        ut fugiat culpa non do reprehenderit nostrud do aliqua
                        commodo quis fugiat. Ullamco eiusmod quis dolor culpa
                        reprehenderit. Qui commodo fugiat nostrud eu duis
                        aliquip in nulla aliquip. Non cillum nulla labore magna
                        consectetur consequat mollit fugiat. Consequat deserunt
                        occaecat aute Lorem quis laboris ullamco culpa ex quis
                        laboris ea dolore.
                    </div>
                </DraggableDashboardResponsive>
            </div>
        );
    }
}

export default App;
