% Auto-generated: do not edit by hand
\name{''DashboardItem}

\alias{''DashboardItem}

\title{DashboardItem component}

\description{
DashboardItem is a wrapper that is intended to be used with DraggableDashboard  to specify the position and size of the wrapped components.
}

\usage{
''DashboardItem(children=NULL, i=NULL, x=NULL, y=NULL, w=NULL, h=NULL,
static=NULL, isDraggable=NULL, isResizable=NULL,
isBounded=NULL, maxH=NULL, maxW=NULL, minH=NULL, minW=NULL,
moved=NULL, resizeHandles=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. The child or list of children wrapped by the component.}

\item{i}{Character. The ID used to identify this component in layout definition.}

\item{x}{Numeric. The position on the x axis in number of columns (by default, the  max is 12).}

\item{y}{Numeric. The position on the y axis (the unit is 30px, by default)}

\item{w}{Numeric. The width of the x axis (default is 6).}

\item{h}{Numeric. The height on the of y axis (default is 4)}

\item{static}{Logical. If true, equal to `isDraggable: false, isResizable: false`.}

\item{isDraggable}{Logical. If false, will not be draggable. Overrides `static`.}

\item{isResizable}{Logical. If false, will not be resizable. Overrides `static`.}

\item{isBounded}{Logical. }

\item{maxH}{Numeric. }

\item{maxW}{Numeric. }

\item{minH}{Numeric. }

\item{minW}{Numeric. }

\item{moved}{Logical. }

\item{resizeHandles}{Character. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

