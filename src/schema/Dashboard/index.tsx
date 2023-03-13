import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Cell, Graph } from '@antv/x6';
import { Options } from '@antv/x6/lib/graph/options';

import { InitPortColors } from '../Settings/Schema';
import '../Settings/InitSchema';
import { data } from '../FakeData';

import OnEdgeLabelRenderedArgs = Options.OnEdgeLabelRenderedArgs;
import { EdgeSvg } from '../Settings/EdgeSvg';

const Dashboard: React.FC = () => {
  let graph: any = null;

  const cells: Cell[] = [];

  useEffect(() => {
    if (graph === null) {
      graph = new Graph({
        container: document.getElementById('graph') as HTMLElement,
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
        onEdgeLabelRendered: (args: OnEdgeLabelRenderedArgs) => {
          const { selectors, edge } = args;
          const content = selectors.foContent as HTMLDivElement;

          if (content !== undefined) {
            content.style.display = 'flex';
            content.style.alignItems = 'center';
            content.style.justifyContent = 'center';

            const stroke = data.find((d: any) => d.id === edge.id)?.attrs.line
              ?.stroke;

            if (stroke !== undefined) {
              const root = createRoot(content);

              root.render(<EdgeSvg id={edge.id} stroke={stroke} />);
            }
          }
        }
      });

      data.forEach((item: any) => {
        if (item.shape === 'edge') {
          InitPortColors(item);

          cells.push(graph.createEdge(item));
        } else {
          cells.push(graph.createNode(item));
        }
      }
      );

      graph.resetCells(cells);
      graph.zoomToFit({ padding: 10, maxScale: 1 });
    }
  }, []);

  return (
    <>
      <div id="graph"></div>
      <div style={{ zIndex: 99999, position: 'absolute', left: 0, top: 10, width: '100px', background: 'red' }} onClick={() => {
        if (graph !== null) {
          graph.addNode({
            id: '55',
            height: 40,
            shape: 'er-rect',
            label: 'Person',
            width: 150,
            position: {
              x: 100,
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
          });
        }
      }}>create node</div>
    </>)
  ;
};

export default Dashboard;
