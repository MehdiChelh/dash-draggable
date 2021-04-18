.. dash_draggable documentation master file, created by
   sphinx-quickstart on Wed Dec 30 15:51:58 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Dash Draggable
==========================================

.. toctree::
   :maxdepth: 2

   index


.. Indices and tables
.. ==================

.. * `Installation`_
.. * `Quickstart <quickstart.html>`_
.. * `Reference <reference.html>`_
.. * :ref:`search`

Description
==================

Dash draggable is a collection of dash_ component for building dashboards with drag and resize functionnalities.

.. _dash: https://dash.plotly.com/

Dash draggable comes with the following components:

- A responsive or fixed layout with draggable and resizable elements:

.. image:: ./assets/img/draggable_dashboard_1.gif

- *(upcoming)* components to drag freely (without grid)
- *(upcoming)* components to drag and drop items in lists (trello-like)

Under the hood Dash Draggable is an interface (with some wrapping) to the following React component:

- `STRML/react-grid-layout`_

.. _`STRML/react-grid-layout`: https://github.com/STRML/react-grid-layout

Installation
==================

.. code-block:: bash

      pip install dash-draggable

Note: This library requires dash_.


Your first dashboard (fixed size)
==================

The following code will give you a simple dashboard with an item containing a chart that you can drag and resize.

You can refer to the `Quickstart <quickstart.html>`_ section for more details on how to build dashboard using ``dash-draggable``.

::

   import dash
   from dash.dependencies import Input, Output
   import dash_core_components as dcc
   import dash_html_components as html

   import plotly.express as px
   import pandas as pd

   import dash_draggable


   external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

   app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

   server = app.server

   df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv')

   app.layout = html.Div([
      html.H1("Dash Draggable"),
      dash_draggable.GridLayout(
         id='draggable',
         children=[
               html.Div(children=[
                  dcc.Graph(
                     id='graph-with-slider',
                     responsive=True,
                     style={
                           "min-height":"0",
                           "flex-grow":"1"
                     }),
                  dcc.Slider(
                     id='year-slider',
                     min=df['year'].min(),
                     max=df['year'].max(),
                     value=df['year'].min(),
                     marks={str(year): str(year) for year in df['year'].unique()},
                     step=None)
                  ],
                  style={
                     "height":'100%',
                     "width":'100%',
                     "display":"flex",
                     "flex-direction":"column",
                     "flex-grow":"0"
                  }),
         ]
      ),
   ])





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

   if __name__ == '__main__':
      app.run_server(debug=True, port='5080')

   
