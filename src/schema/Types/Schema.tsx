interface ILine {
  sourceMarker?: { name: string }
  stroke: string
  strokeWidth: number
}

interface IBody {
  stroke: string
}

interface IPosition {
  x: number
  y: number
}

interface IConnection {
  cell: string
  port?: string
}

interface ILabel {
  name?: string
  markup: any
  attrs: {
    fo: {
      width: number
      height: number
      x: number
      y: number
    }
  }
}

interface IPortFill {
  type: string
  stops: Array<{ offset: string, color: string }>
}

interface IPortAttribute {
  portBody: {
    fill: IPortFill | string
  }
  portNameLabel: {
    text: string
  }
  portTypeLabel: {
    text: string
  }
}

interface IPort {
  id: string
  group: string
  attrs: IPortAttribute
}

export interface IGraph {
  id: string
  height?: number
  shape: string
  label: string | ILabel
  width?: number
  position?: IPosition
  attrs: {
    line?: ILine
    body?: IBody
  }
  ports?: IPort[]
  source?: IConnection
  target?: IConnection
  zIndex?: number
}
