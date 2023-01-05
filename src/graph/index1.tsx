import { Cell, Graph, Shape } from '@antv/x6';

import React, { useEffect } from 'react';

const data = [
  {
    id: '1',
    height: 40,
    shape: 'er-rect',
    label: 'Person',
    width: 150,
    position: {
      x: 24,
      y: 150
    },
    attrs: {
      body: {
        stroke: '#4DC7B5'
      }
    },
    ports: [
      {
        id: '1-1',
        group: 'list',
        attrs: {
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
    height: 40,
    shape: 'er-rect',
    label: 'University',
    width: 150,
    position: {
      x: 250,
      y: 210
    },
    attrs: {
      body: {
        stroke: '#F27281'
      }
    },
    ports: [
      {
        id: '2-1',
        group: 'list',
        attrs: {
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
    height: 40,
    shape: 'er-rect',
    label: 'Company',
    width: 150,
    position: {
      x: 480,
      y: 350
    },
    attrs: {
      body: {
        stroke: '#F5B452'
      }
    },
    ports: [
      {
        id: '3-1',
        group: 'list',
        attrs: {
          portBody: {
            fill: {
              type: 'linearGradient',
              stops: [
                { offset: '100%', color: '#F2F2F2' }
              ]
            }
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
          portBody: {
            fill: '#F2F2F2'
          },
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
        stroke: '#4DC7B5',
        strokeWidth: 2
      }
    },
    tools: [
      {
        name: 'button',
        args: {
          markup: [
            {
              tagName: 'circle',
              selector: 'icon',
              attrs: {
                r: 18,
                stroke: '#fe854f',
                'stroke-width': 2,
                fill: 'white',
                cursor: 'pointer'
              }
            }
          ],
          distance: -40,
          onClick ({ view }: any) {
            const edge = view.cell;
            const source = edge.getSource();
            const target = edge.getTarget();
            edge.setSource(target);
            edge.setTarget(source);
          }
        }
      }
    ],
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
    attrs: {
      line: {
        stroke: '#F5B452',
        strokeWidth: 2
      }
    },
    tools: [
      {
        name: 'button',
        args: {
          markup: [
            {
              tagName: 'circle',
              selector: 'button',
              attrs: {
                r: 18,
                stroke: '#fe854f',
                'stroke-width': 2,
                fill: 'white',
                cursor: 'pointer'
              }
            },
            {
              tagName: 'text',
              textContent: 'Btn B',
              selector: 'icon',
              attrs: {
                fill: '#fe854f',
                'font-size': 10,
                'text-anchor': 'middle',
                'pointer-events': 'none',
                y: '0.3em'
              }
            }
          ],
          distance: -40,
          onClick ({ view }: any) {
            const edge = view.cell;
            const source = edge.getSource();
            const target = edge.getTarget();
            edge.setSource(target);
            edge.setTarget(source);
          }
        }
      },
      {
        name: 'button',
        args: {
          markup: [
            {
              tagName: 'circle',
              selector: 'button',
              attrs: {
                r: 18,
                stroke: '#fe854f',
                'stroke-width': 2,
                fill: 'white',
                cursor: 'pointer'
              }
            },
            {
              tagName: 'text',
              textContent: 'Btn A',
              selector: 'icon',
              attrs: {
                fill: '#fe854f',
                'font-size': 10,
                'text-anchor': 'middle',
                'pointer-events': 'none',
                y: '0.3em'
              }
            }
          ],
          distance: -100,
          offset: { x: 0, y: 20 },
          onClick ({ view }: any) {
            const edge = view.cell;
            edge.attr({
              line: {
                strokeDasharray: '5, 1',
                strokeDashoffset:
                  (edge.attr('line/strokeDashoffset') | 0) + 20
              }
            });
          }
        }
      }
    ],
    zIndex: 0
  }
];

const LINE_HEIGHT = 30;
const NODE_WIDTH = 150;

Graph.registerPortLayout(
  'erPortPosition',
  (portsPositionArgs) => {
    return portsPositionArgs.map((_, index) => {
      return {
        position: {
          x: 0,
          y: index === 0 ? (index + 1) * 40 : (index + 1) * LINE_HEIGHT + 10
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
        strokeWidth: 6,
        fill: '#F5F5F5',
        filter: {
          name: 'dropShadow',
          args: {
            dx: 0,
            dy: 4,
            blur: 4,
            color: 'rgb(10, 0, 0)',
            opacity: 0.1
          }
        },
        zIndex: 1,
        strokeDasharray: '150,250,219'
      },
      label: {
        fontWeight: '600',
        fill: '#414141',
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
          zIndex: 0,
          attrs: {
            portBody: {
              width: NODE_WIDTH,
              height: LINE_HEIGHT,
              strokeWidth: 0,
              stroke: 'red',
              fill: '#F2F2F2',
              magnet: true
            },
            portNameLabel: {
              ref: 'portBody',
              refX: 6,
              refY: 10,
              fontSize: 10
            },
            portTypeLabel: {
              ref: 'portBody',
              refX: 95,
              refY: 10,
              fill: '#808080',
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
          size: 10,
          visible: true,
          type: 'doubleMesh',
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
        mousewheel: {
          enabled: true,
          zoomAtMousePosition: true,
          modifiers: 'ctrl',
          minScale: 0.5,
          maxScale: 3
        },
        // highlighting: {
        //   magnetAdsorbed: {
        //     name: 'stroke',
        //     args: {
        //       attrs: {
        //         fill: '#5F95FF',
        //         stroke: '#5F95FF'
        //       }
        //     }
        //   }
        // },
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
          const source = data.find(d => d.id === item.source.cell);
          const target = data.find(d => d.id === item.target.cell);

          const sport = source?.ports?.find(p => p.id === item.source.port);
          const tport = target?.ports?.find(p => p.id === item.target.port);

          if (sport !== undefined) {
            sport.attrs.portBody = {
              fill: {
                type: 'linearGradient',
                stops: [
                  { offset: '15%', color: 'rgba(77, 199, 181, 0.7)' },
                  { offset: '88%', color: 'rgba(77, 199, 181, 0.2)' }
                ]
              }
            };
          }

          console.log(sport?.attrs);
          console.log(tport?.attrs);

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
