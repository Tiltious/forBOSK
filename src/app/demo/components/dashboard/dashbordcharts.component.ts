import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashoardchartsService } from './dashoardcharts.service';

@Component({
  selector: 'app-dashbordcharts',
  template: `<div echarts [options]="options" class="echart" (chartInit)="chartInit($event)"  [loadingOpts]="loadingOpts"></div>`,
})
export class DashbordchartsComponent implements OnInit  {

  @Input() chartname:any;
  @Output() predmaintenance = new EventEmitter<any>();

  options: any = {};
  chart:any;
  themeSubscription: any;
  loading: any;
  loadingOpts: any = {};
  data:any = {xdata:[],ydata:[]};
  constructor(private chartsdata:DashoardchartsService){}
  // ngOnInit(): void { 
  //   // console.log(this.chartname)
  //   // this.setValues()
  // }
  chartInit(chart:any){
    this.chart= chart;
    this.loadingOpts = {
      text: 'Loading...',
      color: '#4a9599',
      textColor: '#000',
      maskColor: '#ffffff',
      zlevel: 3,
      showSpinner: true,
      spinnerRadius: 20,
      lineWidth: 10,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'sans-serif'
    }
    this.chart.showLoading('default',this.loadingOpts);
  }

  ngOnInit():void{

    this.options = {
      // backgroundColor: echarts.bg,
      color: ['rgba(96, 162, 121, 0.4)','rgba(255, 61, 113, 0.4)'],
      title: {
        top:0,
        subtextStyle: {
          fontSize: 12
        },
      },
      grid:{
        show:false,
        height:'80%',
        left:'2%',
        right:'0%',
        bottom:0,
        containLabel: true
      },
      toolbox: {
        show: true,
        top:0,
        feature: {
          // dataZoom: {
          //   title:{zoom:'Zoom', back:'Restore'},
          //   yAxisIndex: "none"
          // },
          dataView: {
            title:'Data View',
            lang:['Data View', 'Back'],
            readOnly: true,
            optionToContent:()=>{
              var dataview ='<table class="table table-hover"style="width:100%;text-align:center"><thead><tr><th scope="col">Product</th><th scope="col">Value</th></tr></thead><tbody>';
              for(let i in this.data.xdata){
                dataview+='<tr><td>'+`${this.data.xdata[i]}`+'</td><td>'+`${this.data.ydata[i]}`+'</td></tr>'
              }
              dataview+='</tbody></table>';
              return dataview;
            }
          },
          magicType: {
            title: {line:'Line',bar:'Bar'}, show: true,
            type: ["line", "bar"]
          },
          saveAsImage: {title: 'Save', show: true}
        }
      },
      tooltip: {trigger: 'axis', axisPointer: { type: 'cross'}},
      legend: { align: 'left', textStyle: { color: '#333' },top:0},
      xAxis: [{
          data: [],
          silent: true,
          axisTick: {alignWithLabel: true,},
          // axisLine: {lineStyle:{ color: '#333'}},
          axisLabel: {fontSize:11},
        }],
      yAxis: [{ 
          // maxInterval: 'auto',
          name:'',
          nameLocation: "middle",
          nameTextStyle: {
            fontWeight: "bold",
            fontStyle: "italic",
          },
          type:'value',
          silent: false,
          axisLine: {  show:true, lineStyle: { color: '#333',type:'solid'}},
          splitLine: { lineStyle: { color: '#ddd' ,width:0.5}},
        }],
      dataZoom: [{
        type: 'inside',
        xAxisIndex: [0],
        zoomOnMouseWheel: "ctrl",
        moveOnMouseWheel: "shift"
      },
      {
        type: 'inside',
        yAxisIndex: [0],
        zoomOnMouseWheel: "ctrl",
      }
    ]
    };
    this.setValues();
  }  
  setValues(){
    this.chartsdata.getChartData().subscribe(
      (res:any)=>{        
        setTimeout(
          ()=>{
            console.log(res,'resss')
            this.data.xdata = res.xdata
            this.data.ydata = res.ydata
            this.chart?.setOption({
              // color:color,
              title:{text:this.chartname},
              xAxis:[{data:this.data.xdata}],
              yAxis:{
                name:'units',
                // nameTextStyle:{padding: padding}
              },
              series:[{
                name:this.chartname,
                data:this.data.ydata,type:'bar',
                barWidth: "30%",                    
                borderColor: "rgba(176, 52, 52, 1)",
                borderWidth: 5,
                borderType: "solid",
                color: "rgba(96, 162, 121, 0.4)",
                markPoint: {
                  symbolSize: 1,
                  symbolOffset: [0, '50%'],
                  label: {
                    formatter: '{b|{b}}\n{c|{c}}',
                    // backgroundColor: 'rgb(242,242,242)',
                    // borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: [4, 10],
                    lineHeight: 26,
                    // shadowBlur: 5,
                    // shadowColor: '#000',
                    // shadowOffsetX: 0,
                    // shadowOffsetY: 1,
                    position: 'top',
                    // position: [0, 0], //absolute
                    // position: ['50%', '50%'],
                    distance: 20,
                    rich: {
                      a: {
                        align: 'center',
                        color: '#fff',
                        fontSize: 18,
                        textShadowBlur: 2,
                        textShadowColor: '#000',
                        textShadowOffsetX: 0,
                        textShadowOffsetY: 1,
                        textBorderColor: '#333',
                        textBorderWidth: 2
                      },
                      b: {
                        color: '#333'
                      },
                      c: {
                        // color: '#ff8811',
                        textBorderColor: '#000',
                        textBorderWidth: 1,
                        fontSize: 22
                      }
                    }
                  },
                  data: [
                    { type: 'max', name: 'Max: ' ,y:'25%'},
                    { type: 'min', name: 'Min: ',y:'25%' },
                    { type: 'average', name: 'Average: ',y:'25%' }
                  ]
                }
              }],
            })  
            this.chart?.hideLoading();
            // this.predmaintenance.emit(metricsData)
          }
          ,1000)        
      })
    
  }

  ngOnDestroy(): void {}

  ngOnChanges(){}

}
