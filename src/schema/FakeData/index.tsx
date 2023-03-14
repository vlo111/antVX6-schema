import { IGraph } from '../Types/Schema';
import { Markup } from '@antv/x6';

export const data: IGraph[] = [
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
            fill: {
              type: 'linearGradient',
              stops: [
                { offset: '15%', color: `${'#4DC7B5'}B3` },
                { offset: '88%', color: `${'#4DC7B5'}33` }
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
            fill: {
              type: 'linearGradient',
              stops: [
                { offset: '15%', color: `${'#F27281'}B3` },
                { offset: '88%', color: `${'#F27281'}33` }
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
            fill: {
              type: 'linearGradient',
              stops: [
                { offset: '15%', color: `${'#F27281'}B3` },
                { offset: '88%', color: `${'#F27281'}33` }
              ]
            }
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
                { offset: '15%', color: `${'#F5B452'}B3` },
                { offset: '88%', color: `${'#F5B452'}33` }
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
    label: {
      markup: Markup.getForeignObjectMarkup(),
      attrs: {
        fo: {
          width: 120,
          height: 50,
          x: -65,
          y: -21
        }
      }
    },
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
    zIndex: 0
  },
  {
    id: '5',
    shape: 'edge',
    label: {
      markup: Markup.getForeignObjectMarkup(),
      attrs: {
        fo: {
          width: 120,
          height: 50,
          x: -60,
          y: -21
        }
      }
    },
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
    zIndex: 0
  },
  {
    id: '6',
    shape: 'edge',
    label: {
      markup: Markup.getForeignObjectMarkup(),
      attrs: {
        fo: {
          width: 120,
          height: 50,
          x: -65,
          y: -21
        }
      }
    },
    source: {
      cell: '1',
      port: '1-1'
    },
    target: {
      cell: '2',
      port: '2-2'
    },
    attrs: {
      line: {
        stroke: 'red',
        strokeWidth: 2
      }
    },
    zIndex: 0
  }
];
