import { Graph } from '@antv/x6';

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
              magnet: false
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
