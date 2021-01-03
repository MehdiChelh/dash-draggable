import dash_draggable
import dash
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd

app = dash.Dash(__name__)

df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv')

app.layout = html.Div([
    dcc.Store(id='memory'),
    dcc.Store(id='memory-output', storage_type='local'),
    dcc.Store(id='local', storage_type='local'),
    # Same as the local store but will lose the data
    # when the browser/tab closes.
    dcc.Store(id='session', storage_type='session'),
    html.Div(id='placeholder'),
    html.Button(id="test-btn"),
    dash_draggable.DashDraggable(
        id='draggable',
        children=[
            "jijijj",
            dcc.Graph(
                id='graph-with-slider',
                responsive=True,
                style=dict(height='100%', width='100%')),
            dcc.Slider(
                id='year-slider',
                min=df['year'].min(),
                max=df['year'].max(),
                value=df['year'].min(),
                marks={str(year): str(year) for year in df['year'].unique()},
                step=None
            ),
            dash_draggable.DashDraggable(
                id='draggableee',
                children=[
                    "jijijj",
                    dcc.Graph(
                        id='graph-with-sliderrr',
                        responsive=True,
                        style=dict(height='100%', width='100%')),
                    dcc.Slider(
                        id='year-sliderrr',
                        min=df['year'].min(),
                        max=df['year'].max(),
                        value=df['year'].min(),
                        marks={str(year): str(year) for year in df['year'].unique()},
                        step=None
                    )
                ]
            )
        ]
    ),


    html.Table([
        html.Thead([
            html.Tr(html.Th('Click to store in:', colSpan="3")),
            html.Tr([
                html.Th(html.Button('memory', id='memory-button')),
                html.Th(html.Button('localStorage', id='local-button')),
                html.Th(html.Button('sessionStorage', id='session-button'))
            ]),
            html.Tr([
                html.Th('Memory clicks'),
                html.Th('Local clicks'),
                html.Th('Session clicks')
            ])
        ]),
        html.Tbody([
            html.Tr([
                html.Td(0, id='memory-clicks'),
                html.Td(0, id='local-clicks'),
                html.Td(0, id='session-clicks')
            ])
        ])
    ]),

    html.Div(id='output')
])


# Create two callback for every store.
for store in ('memory', 'local', 'session'):

    # add a click to the appropriate store.
    @app.callback(Output(store, 'data'),
                  Input('{}-button'.format(store), 'n_clicks'),
                  State(store, 'data'))
    def on_click(n_clicks, data):
        if n_clicks is None:
            # prevent the None callbacks is important with the store component.
            # you don't want to update the store for nothing.
            raise PreventUpdate

        # Give a default data dict with 0 clicks if there's no data.
        data = data or {'clicks': 0}

        data['clicks'] = data['clicks'] + 1
        return data

    # output the stored clicks in the table cell.
    @app.callback(Output('{}-clicks'.format(store), 'children'),
                  # Since we use the data prop in an output,
                  # we cannot get the initial data on load with the data prop.
                  # To counter this, you can use the modified_timestamp
                  # as Input and the data as State.
                  # This limitation is due to the initial None callbacks
                  # https://github.com/plotly/dash-renderer/pull/81
                  Input(store, 'modified_timestamp'),
                  State(store, 'data'))
    def on_data(ts, data):
        if ts is None:
            raise PreventUpdate

        data = data or {}

        return data.get('clicks', 0)


# @app.callback(
#     Output('draggable', 'children'),
#     Input('test-btn', 'value'))
# def add_figure(_):
#     return [
#         dcc.Graph(
#                 id='graph-with-slider',
#                 responsive=True,
#                 style=dict(height='100%', width='100%')),
#                 dcc.Graph(
#                 id='graph-with-slider',
#                 responsive=True,
#                 style=dict(height='100%', width='100%'))
#     ]


@app.callback(
    Output('graph-with-slider', 'figure'),
    Input('year-slider', 'value'))
def update_figure(selected_year):
    filtered_df = df[df.year == selected_year]

    fig = px.scatter(filtered_df, x="gdpPercap", y="lifeExp",
                     size="pop", color="continent", hover_name="country",
                     log_x=True, size_max=55)

    fig.update_layout(transition_duration=500)

    return fig
  
@app.callback(
    Output('placeholder', 'children'),
    Input('draggable', 'layout'))
def update_layout(layout):
    return str(layout)  # str('<br />'.join([str(e) for e in layout]))

# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


def demo():
    app.run_server(debug=True)
