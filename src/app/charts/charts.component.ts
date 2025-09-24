import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);
import type { ECElementEvent, ECharts, EChartsCoreOption } from 'echarts/core';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';
import type { EChartsType } from 'echarts/core';

@Component({
  selector: 'app-charts',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class ChartsComponent {
  chart?: EChartsType;
  // options: EChartsCoreOption = {};

  // constructor() {}

  // ngOnInit(): void {
  //   const dataAxis = [
  //     'CONSTRUCCIONES',
  //     'ADMINISTRATIVOS',
  //     'INTERVENCIONES PRIORITARIAS',
  //     'GESTION SOCIAL',
  //     'BENEFICIOS A EMPLEADOS',
  //     'GESTION AMBIENTAL',
  //     'G',
  //     'H',
  //     'I',
  //     'J',
  //     'K',
  //     'L',
  //     'M',
  //     'N',
  //     'O',
  //     'P',
  //     'Q',
  //     'R',
  //     'S',
  //     'T',
  //   ];
  //   const data = [
  //     220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125,
  //     220,
  //   ];
  //   const yMax = 500;
  //   const dataShadow = [];

  //   for (let i = 0; i < data.length; i++) {
  //     dataShadow.push(yMax);
  //   }

  //   this.options = {
  //     title: {
  //       text: 'Check Console for Events',
  //     },
  //     xAxis: {
  //       data: dataAxis,
  //       axisLabel: {
  //         inside: true,
  //         color: '#fff',
  //       },
  //       axisTick: {
  //         show: false,
  //       },
  //       axisLine: {
  //         show: false,
  //       },
  //       z: 10,
  //     },
  //     yAxis: {
  //       axisLine: {
  //         show: false,
  //       },
  //       axisTick: {
  //         show: false,
  //       },
  //       axisLabel: {
  //         color: '#999',
  //       },
  //     },
  //     dataZoom: [
  //       {
  //         type: 'inside',
  //       },
  //     ],
  //     series: [
  //       {
  //         // For shadow
  //         type: 'bar',
  //         itemStyle: {
  //           color: 'rgba(0,0,0,0.05)',
  //         },
  //         barGap: '-100%',
  //         barCategoryGap: '40%',
  //         data: dataShadow,
  //         animation: false,
  //       },
  //       {
  //         type: 'bar',
  //         itemStyle: {
  //           color: new LinearGradient(0, 0, 0, 1, [
  //             { offset: 0, color: '#83bff6' },
  //             { offset: 0.5, color: '#188df0' },
  //             { offset: 1, color: '#188df0' },
  //           ]),
  //         },
  //         emphasis: {
  //           itemStyle: {
  //             color: new LinearGradient(0, 0, 0, 1, [
  //               { offset: 0, color: '#2378f7' },
  //               { offset: 0.7, color: '#2378f7' },
  //               { offset: 1, color: '#83bff6' },
  //             ]),
  //           },
  //         },
  //         data,
  //       },
  //     ],
  //   };
  // }

  // onChartEvent(event: ECElementEvent | ECharts, type: string) {
  //   console.log('chart event:', type, event);
  // }
  options: EChartsCoreOption = {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide a set of data.
      source: [
        ['product', '2015', '2016', '2017', '2018', '2019'],
        ['ADMINISTRATIVOS', 43.3, 85.8, 93.7, 78.5, 88.0],
        ['GESTION SOCIAL', 86.4, 65.2, 82.5, 75.0, 80.0],
        ['GESTION AMBIENTAL', 72.4, 53.9, 39.1, 45.0, 50.0,],
        ['COSTOS DE OBRA', 72.4, 53.9, 39.1, 45.0, 50.0],
        ['GESTION PREDIAL', 72.4, 53.9, 39.1, 45.0, 50.0],
        ['INVERSION PREDIAL', 72.4, 53.9, 39.1, 45.0, 50.0],
      ],
    },
    // Declare an x-axis (category axis).
    // The category map the first column in the dataset by default.
    xAxis: { type: 'category' },
    // Declare a y-axis (value axis).
    yAxis: {},
    dataZoom: [
        {
          type: 'inside',
        },
      ],
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };

  mergeOptions: EChartsCoreOption = {};

  RandomDataset() {
    this.mergeOptions = {
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['ADMINISTRATIVOS', ...this.getRandomValues()],
          ['INTERVENCIONES PRIORITARIAS', ...this.getRandomValues()],
          ['GESTION SOCIAL', ...this.getRandomValues()],
          ['BENEFICIOS A EMPLEADOS', ...this.getRandomValues()],
        ],
      },
    };
  }

  private getRandomValues() {
    const res: number[] = [];
    for (let i = 0; i < 3; i++) {
      res.push(Math.random() * 100);
    }
    return res;
  }
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
