import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore, ThemeOption } from 'ngx-echarts';
import * as echarts from 'echarts';
// import { BarChart } from 'echarts/charts';
// import { GridComponent } from 'echarts/components';
// import { CanvasRenderer } from 'echarts/renderers';
// echarts.use([BarChart, GridComponent, CanvasRenderer]);
import type { ECElementEvent, ECharts, EChartsCoreOption } from 'echarts/core';
import { CommonModule } from '@angular/common';
import type { EChartsType } from 'echarts/core';

@Component({
  selector: 'app-charts-2',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './charts-2.component.html',
  styleUrl: './charts-2.component.css',
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class Charts2Component {
  chart?: EChartsType;
  theme: string | ThemeOption = 'macarons';
  coolTheme = CoolTheme;
  options: EChartsCoreOption = {
    title: {
      left: '50%',
      text: 'Nightingale Rose Diagram',
      subtext: 'Mocking Data',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8', 'rose9', 'rose10'],
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' },
          { value: 5, name: 'rose9' },
          { value: 25, name: 'rose10' },
        ],
      },
    ],
  };
  onChartInit(ec: EChartsType) {
    this.chart = ec;
  }
  exportarSVG() {
  if (!this.chart) return;

  const dataUrl = this.chart.getDataURL({
    type: 'svg',
    backgroundColor: 'transparent', // opcional
  });

  // Descarga el blob desde la data URL y guarda como .svg
  fetch(dataUrl)
    .then(res => res.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = 'grafico.svg';
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
    })
    .catch(err => console.error('Error exportando SVG:', err));
  }
}
const CoolTheme = {
  color: [
    '#b21ab4',
    '#6f0099',
    '#2a2073',
    '#0b5ea8',
    '#17aecc',
    '#b3b3ff',
    '#eb99ff',
    '#fae6ff',
    '#e6f2ff',
    '#eeeeee',
  ],

  title: {
    fontWeight: 'normal',
    color: '#00aecd',
  },

  visualMap: {
    color: ['#00aecd', '#a2d4e6'],
  },

  toolbox: {
    color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd'],
  },

  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
      // Axis indicator, coordinate trigger effective
      type: 'line', // The default is a straight line： 'line' | 'shadow'
      lineStyle: {
        // Straight line indicator style settings
        color: '#00aecd',
        type: 'dashed',
      },
      crossStyle: {
        color: '#00aecd',
      },
      shadowStyle: {
        // Shadow indicator style settings
        color: 'rgba(200,200,200,0.3)',
      },
    },
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: '#eee', // Data background color
    fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
    handleColor: '#00aecd', // Handle color
  },

  timeline: {
    lineStyle: {
      color: '#00aecd',
    },
    controlStyle: {
      color: '#00aecd',
      borderColor: '00aecd',
    },
  },

  candlestick: {
    itemStyle: {
      color: '#00aecd',
      color0: '#a2d4e6',
    },
    lineStyle: {
      width: 1,
      color: '#00aecd',
      color0: '#a2d4e6',
    },
    areaStyle: {
      color: '#b21ab4',
      color0: '#0b5ea8',
    },
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: '#b21ab4',
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.5)',
    },
    lineStyle: {
      color: 'rgba(128, 128, 128, 0.5)',
    },
    areaStyle: {
      color: '#0b5ea8',
    },
  },

  graph: {
    itemStyle: {
      color: '#b21ab4',
    },
    linkStyle: {
      color: '#2a2073',
    },
  },

  map: {
    itemStyle: {
      color: '#c12e34',
    },
    areaStyle: {
      color: '#ddd',
    },
    label: {
      color: '#c12e34',
    },
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dddddd'],
          [0.8, '#00aecd'],
          [1, '#f5ccff'],
        ],
        width: 8,
      },
    },
  },
};