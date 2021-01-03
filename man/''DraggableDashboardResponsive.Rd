% Auto-generated: do not edit by hand
\name{''DraggableDashboardResponsive}

\alias{''DraggableDashboardResponsive}

\title{DraggableDashboardResponsive component}

\description{
DraggableDashboard is a component for building dashboards with draggable and resizable items. It takes a list of children and display them in div elements that can be moved around the page. The initial size of each element can either be defined with the layout argument or by wrapping each element with the DashboardItem component. By default, DraggableDashboard will saved the position of the elements on client side, when moved on the page. But you can also save it on server side by defining a callback with : `Input("<my-id>", "layout")`.
}

\usage{
''DraggableDashboardResponsive(children=NULL, id=NULL, layouts=NULL, breakpoints=NULL,
cols=NULL, margin=NULL, containerPadding=NULL,
saveToClient=NULL, clearLayoutOnClient=NULL,
items_by_row=NULL, nrows=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. Children is a list of the elements to drag and resize on the dashboard.
It can be a list(Pytyhon)/vector(R) of dash Components and/or DashboardItem.}

\item{id}{Character. (string) The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.}

\item{layouts}{Named list. Layout is a list(python)/vector(R) of dictionnary(Python)/list(R) with the format:
{x: number, y: number, w: number, h: number}
The index into the layout must match the id used on each item component with DashboardItem.
If you choose to use custom keys, you can specify that key in the layout
array objects like so:
{i: string, x: number, y: number, w: number, h: number}
The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.}

\item{breakpoints}{Named list. }

\item{cols}{Named list. }

\item{margin}{Named list | list of named lists. }

\item{containerPadding}{Named list | list of named lists. }

\item{saveToClient}{Logical. (bool) It specify if the layout should automatically be saved.}

\item{clearLayoutOnClient}{Logical. (bool) If set to true, then the layout saved in the client browser
will be cleared in the next page load.}

\item{items_by_row}{Named list. (number) the default number of item by row.
Default is {lg: 2, md: 2, sm: 2, xs: 1, xxs: 1}}

\item{nrows}{Numeric. (number) the default number of rows for an item with no predefined size.
The size of items can either be defined in the layout argument or in DashboardItem.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

