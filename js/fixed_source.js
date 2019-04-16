$(function () {

    var echartsBar = echarts.init(document.getElementById('FixedResCanvas'));
    echartsBar.setOption(optionBar);
})

var fixedSrcData = { //！！！！！！！！！！！！！！！！！需要后台传输的数据
    xData: ['环境统计', '环境统计', '环境统计', '环境统计', '环境统计', '环境统计', '环境统计', '环境统计'],
    yData: [
        [280, 250, 295, 320, 280, 190, 260, 300], //匹配数量
        [380, 350, 395, 420, 380, 290, 360, 400],//企业总数数组
        []
    ],
    totalDirectoriesNumber:600,
}
for(var i=0;i<fixedSrcData.yData[0].length;i++){
    fixedSrcData.yData[2].push(fixedSrcData.totalDirectoriesNumber);
}

var optionBar = { //样式设置相关
    title: {
        text: '各业务数据与固定源名录匹配整合情况',
        textStyle: {
            color: '#010d1f',
            fontFamily: "Microsoft YaHei",
        },
        x: 'center', //水平居中
        top: 20
    },
    color: ['#1e90ff', '#1e90ff', "#00ccff", "#fd4800", "#f1ec3f", "#72e75e", "#cc00ff", '#1e90ff', "#00ccff", "#fd4800", '#00ff00', "#00ccff"],
    //['#1e90ff', '#1e90ff', "#00ccff", "#fd4800", "#f1ec3f", "#72e75e", "#cc00ff", '#1e90ff', "#00ccff", "#fd4800", '#00ff00', "#00ccff"], //调色板
    tooltip: {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        //formatter:'{b}<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#48e0e4;margin:0 6px;"></span>{a0}等效声级:{c0}<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e40475;margin:0 6px;"></span>{a1}等效声级:{c1}',
        //formatter: '{b1}<br/>{a1}等效声级:{c1}'
    },
    legend: {
       // selectedMode: false,
        data: [{
            name: '匹配数量',
        },
        {
            name: '名录总数',
            icon: 'image://./img/second_period/all_num_icon.png'
        }],
        top: 36,
        right:50,
        itemGap: 75,
        itemWidth: 40,
        // textStyle: {
        //     fontSize: 14,
        //     color: '#999',
        // }
    },
    grid: {
        top: 80,
        left: 41,
        right: 30,
        bottom: 41,
        containLabel: true,
        show: false
    },
    xAxis: {
        type: 'category',
        data: fixedSrcData.xData,
        onZero: true,
        axisLine: { //X轴线的设置
            show: true,
            lineStyle: {
                color: "#e9e9e9",
                align: 'right',
                padding: [6, 4, 10, 10]
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#413a3a',
                fontSize: 16,
            }
        },
        boundaryGap: true
    },
    yAxis: {
        type: 'value',
        //name: this._obj.Yname,
        nameLocation: 'end',
        nameTextStyle: {
            color: '#413a3a',
            align: 'left',
            padding: [0, 0, 5, 0],
            fontSize: 16
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#413a3a',
                fontSize: 16,
            },
            // formatter: function (y) {
            // }
        },
        axisLine: { //Y轴线的设置
            show: true,
            lineStyle: {
                color: "#e9e9e9",
                align: 'right',
                padding: [3, 4, 10, 10]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: { //Y轴线的设置
            show: true,
            lineStyle: {
                color: ["#e9e9e9"],
            }
        },
        max:parseInt(fixedSrcData.totalDirectoriesNumber*1.2),
        min: 0,
        boundaryGap: ['0%', '0%']
    },
    series: [
        {
            name: '企业总数',
            type: 'bar',
            data: fixedSrcData.yData[1],
            barWidth:'6%',
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            
        },
        {
            name: '名录总数',
            type: 'bar',
            data:  fixedSrcData.yData[2],//fixedSrcData.totalDirectoriesNumber
            barWidth:'.1%',
            legendHoverLink: true,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    barBorderRadius: 6.5,
                   // marginleft:'5%'
                   borderColor:"#ff9000",
                   borderType:"dashed",
                }
            },
            cursor:"pointer",
            barGap: '-100%',
            progressive: 5000,
            label:{
                show: true,
                type:"rect",
                padding:5,
                position:'top',
                textStyle:{
                    color:"#ff9000",
                    padding:4,
                },
                backgroundColor:"#ff9000",
            
            }
        },
        {
            name: '匹配数量',
            type: 'bar',
            data: fixedSrcData.yData[0],
            barWidth:'6%',
            legendHoverLink: true,
            itemStyle: {
                normal: {
                    color: '#0096ff',
                    barBorderRadius: 6.5
                }
            },
            cursor:"pointer",
            barGap: '-100%',
            progressive: 5000,
        }
    ]
};