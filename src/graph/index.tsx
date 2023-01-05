import React, { useEffect } from 'react';
import { Graph, Cell, Shape } from '@antv/x6';

const data = [
  {
    id: '1',
    shape: 'er-rect',
    label: 'Company',
    width: 150,
    height: 24,
    position: {
      x: 24,
      y: 150
    },
    attrs: {
      group: {
        fill: '#2ECC71'
      },
      body: {
        fill: '#F8F8F8'
      },
      label: {
        fill: '#414141',
        fontSize: 13
      }
    },
    ports: [
      {
        id: '1-1',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'ID'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '1-2',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Name'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '1-3',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Class'
          },
          portTypeLabel: {
            text: 'NUMBER'
          }
        }
      },
      {
        id: '1-4',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Gender'
          },
          portTypeLabel: {
            text: 'BOOLEAN'
          }
        }
      }
    ]
  },
  {
    id: '2',
    shape: 'er-rect',
    label: 'University',
    width: 150,
    height: 24,
    position: {
      x: 250,
      y: 210
    },
    ports: [
      {
        id: '2-1',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'ID'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '2-2',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Name'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '2-3',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'StudentID'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '2-4',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'TeacherID'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '2-5',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Description'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      }
    ]
  },
  {
    id: '3',
    shape: 'er-rect',
    label: 'Person',
    width: 150,
    height: 24,
    position: {
      x: 480,
      y: 350
    },
    ports: [
      {
        id: '3-1',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'ID'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '3-2',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Name'
          },
          portTypeLabel: {
            text: 'STRING'
          }
        }
      },
      {
        id: '3-3',
        group: 'list',
        attrs: {
          portNameLabel: {
            text: 'Age'
          },
          portTypeLabel: {
            text: 'NUMBER'
          }
        }
      }
    ]
  },
  {
    id: '4',
    shape: 'edge',
    connector: 'smooth',
    source: {
      cell: '1',
      port: '1-1'
    },
    target: {
      cell: '2',
      port: '2-3'
    },
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2
      }
    },
    zIndex: 0
  },
  {
    id: '5',
    shape: 'edge',
    source: {
      cell: '3',
      port: '3-1'
    },
    target: {
      cell: '2',
      port: '2-4'
    },
    connector: 'smooth',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2
      }
    },
    zIndex: 0
  }
];

const LINE_HEIGHT = 24;
const NODE_WIDTH = 150;

Graph.registerPortLayout(
  'erPortPosition',
  (portsPositionArgs) => {
    return portsPositionArgs.map((_, index) => {
      return {
        position: {
          x: 0,
          y: (index + 1) * LINE_HEIGHT
        },
        angle: 0
      };
    });
  },
  true
);

Graph.registerNode(
  'er-rect',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'text',
        selector: 'label'
      }
    ],
    attrs: {
      rect: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#5F95FF'
      },
      label: {
        fontWeight: 'bold',
        fill: '#ffffff',
        fontSize: 12
      }
    },
    ports: {
      groups: {
        list: {
          markup: [
            {
              tagName: 'rect',
              selector: 'portBody'
            },
            {
              tagName: 'text',
              selector: 'portNameLabel'
            },
            {
              tagName: 'text',
              selector: 'portTypeLabel'
            }
          ],
          attrs: {
            portBody: {
              width: NODE_WIDTH,
              height: LINE_HEIGHT,
              strokeWidth: 1,
              stroke: '#5F95FF',
              fill: '#EFF4FF',
              magnet: true
            },
            portNameLabel: {
              ref: 'portBody',
              refX: 6,
              refY: 6,
              fontSize: 10
            },
            portTypeLabel: {
              ref: 'portBody',
              refX: 95,
              refY: 6,
              fontSize: 10
            }
          },
          position: 'erPortPosition'
        }
      }
    }
  },
  true
);

const GraphComponent: React.FC = () => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const graph: Graph | null = null;

  useEffect(() => {
    if (graph == null && ref !== null && ref.current !== null) {
      const graph = new Graph({
        container: ref.current,
        width: window.innerWidth,
        height: window.innerHeight,
        background: { color: '#f0f0f0' },
        grid: {
          visible: true,
          type: 'doubleMesh',
          size: 10,
          args: [
            {
              color: '#DBDBDB',
              thickness: 1
            },
            {
              color: '#C3C3C3',
              thickness: 2,
              factor: 10
            }
          ]
        },
        connecting: {
          router: {
            name: 'er',
            args: {
              offset: 25,
              direction: 'H'
            }
          },
          createEdge () {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: '#A2B1C3',
                  strokeWidth: 2
                }
              }
            });
          }
        }
      });

      const cells: Cell[] = [];

      data.forEach((item: any) => {
        if (item.shape === 'edge') {
          cells.push(graph.createEdge(item));
        } else {
          cells.push(graph.createNode(item));
        }
      });

      graph.resetCells(cells);
      graph.zoomToFit({ padding: 10, maxScale: 1 });
    }
  }, []);

  return <div id="graph" ref={ref}></div>;
};

export default GraphComponent;
