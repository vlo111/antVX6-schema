import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Cell, Graph } from '@antv/x6';
import { Options } from '@antv/x6/lib/graph/options';

import { EdgeSvg } from '../../Settings/EdgeSvg';
import { IGraph } from '../../Types/Schema';
import '../../Settings/InitSchema';

import OnEdgeLabelRenderedArgs = Options.OnEdgeLabelRenderedArgs;

const Chart: React.FC<{ data: IGraph[] | undefined }> = ({ data }) => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

  useEffect(() => {
    if (ref?.current != null) {
      const chart: Graph = new Graph({
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
        onEdgeLabelRendered: (args: OnEdgeLabelRenderedArgs) => {
          const { selectors, edge } = args;
          const content = selectors.foContent as HTMLDivElement;

          if (content !== undefined) {
            content.style.display = 'flex';
            content.style.alignItems = 'center';
            content.style.justifyContent = 'center';

            const stroke = data?.find((d: IGraph) => d.id === edge.id)?.attrs.line
              ?.stroke;

            if (stroke !== undefined) {
              const root = createRoot(content);

              root.render(<EdgeSvg id={edge.id} stroke={stroke} />);
            }
          }
        },
        connecting: {
          connector: 'smooth',
          router: {
            name: 'er',
            args: {
              offset: 100,
              direction: 'H'
            }
          }
        }
      });

      const cells: Cell[] = [];

      data?.forEach((item: any) => {
        if (item.shape === 'edge') {
          // const newItem = _.cloneDeep(item);
          // InitPortColors(newItem);

          cells.push(chart.createEdge(item));
        } else {
          cells.push(chart.createNode(item));
        }
      });

      chart.resetCells(cells);
      chart.zoomToFit({ padding: 10, maxScale: 1 });
    }
  }, [data]);

  return (
    <>
      <div id="graph" ref={ref}></div>
    </>)
  ;
};

export default Chart;
