% Auto-generated: do not edit by hand
\name{''DashboardItemResponsive}

\alias{''DashboardItemResponsive}

\title{DashboardItemResponsive component}

\description{
DashboardItemResponsive is a wrapper that is intended to be used with DraggableDashboard. DashboardItemResponsive specify the position and size of the item on the dashboard.
}

\usage{
''DashboardItemResponsive(children=NULL, id=NULL, x=NULL, y=NULL, w=NULL, h=NULL,
static=NULL, isDraggable=NULL, isResizable=NULL,
isBounded=NULL, maxH=NULL, maxW=NULL, minH=NULL, minW=NULL,
moved=NULL, resizeHandles=NULL, __isDashboardItem=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. The child or list of children wrapped by the component.}

\item{id}{Character | named list. The ID used to identify this component in Dash callbacks.}

\item{x}{Numeric | named list. The position on the x axis in number of columns (by default, the  max is 12).}

\item{y}{Numeric | named list. The position on the y axis (the unit is 30px, by default)}

\item{w}{Numeric | named list. The width of the x axis (default is 6).}

\item{h}{Numeric | named list. The height on the of y axis (default is 4)}

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

\item{__isDashboardItem}{Logical. This is an internal prop used to identify the component, this property default value is True. 
Setting this value to false is equivalent to not using the DashboardItem wrapper.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

