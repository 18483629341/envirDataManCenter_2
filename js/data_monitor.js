$(function () {
	var pollNameList=[{
		pollId: 21,
		pollName: "监测中心站1"
	}, {
		pollId: 22,
		pollName: "监测中心站2"
	}, {
		pollId: 23,
		pollName: "监测中心站3"
	}];
	//根据数据 渲染HTML
	initSelectlist(pollNameList,'.polSelct');
	//选择框的所有交互
	selectToggle('.polSelct');
	
	var echartsBar=echarts.init(document.getElementById('ServiceMonitor'));
    echartsBar.setOption(optionBar);
})
var optionBar = {
	color:['#00ffcc','#ff7e00'],
    tooltip : {
		show: true,
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
   
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
		type: 'value',
		axisTick:{show:false},
		axisLine:{
			lineStyle:{color:'white'}
		}
    },
    yAxis: {
        type: 'category',
		data: ['空气自动监控数据','地表水水质','饮用水源地','功能区噪声','道路噪声','空气预量','空气质量评价'],
		axisTick:{show:false},
		axisLine:{
			lineStyle:{color:'white'}
		},
		inverse:true
    },
    series: [
        {
            name: '正常',
            type: 'bar',
			stack: '总量',
			barWidth:"30%",
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '异常',
            type: 'bar',
			stack: '总量',
			barWidth:"30%",
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
			},
			itemStyle:{
				barBorderRadius:9
			},
            data: [120, 132, 101, 134, 90, 230, 210]
        }
       
    ]
};

//顶部主题切换  tab点击切换事件
$("body").on('click','.TabsDiv .TabSpan',function(){
    $('.TabsDiv .TabSpan').removeClass('active');
	$(this).addClass('active');
	var themeName=$(this).attr('data-theme');
	$('.CardListDiv[data-theme=' + themeName + ']').css({display:'block'});
    $('.CardListDiv[data-theme=' + themeName + ']').siblings('.CardListDiv').css({display:'none'});

})

//主题数据。服务  tab点击切换事件
$("body").on('click','.HeaderDiv .TabSpan',function(){
	$('.HeaderDiv .TabSpan').removeClass('active');
	$(this).addClass('active');
	var themeName=$(this).attr('data-theme');
	$('.ServiceCanvas[data-theme=' + themeName + ']').css({display:'block'});
    $('.ServiceCanvas[data-theme=' + themeName + ']').siblings('.ServiceCanvas').css({display:'none'});

})


$("body").on('click','.TimeTypeSpan',function(){
	$('.TimeTypeSpan').removeClass('active');
	$(this).addClass('active');
    var type=$(this).attr('data-theme');
    console.log(type);
	if(type==='hour'){
	
	}else{
     
	}
})

/*初始化某个弹幕的选框的dom  
*{arr}   需要渲染的数据来源
*{elementClass}   徐然的目标大容器的选择器
*/  
function initSelectlist(arr,elementClass) {                               //待完善
    var innerHtml = '';
    innerHtml = '<span class="selectSpan ">' +
        '<span class="spanInner active" data-key="'+arr[0].pollId+'" >' + arr[0].pollName + '</span>' +
        '<i class="icon dropIcon"></i>' +
        '</span>' +
        '<ul class="TreeList" >';
    var listArr = '';
    for (var i = 0; i < arr.length; i++) {
        var lihtml = '';
        if (i === 0) {
            lihtml = '<li class="treeLi active" data-index="'+arr[0].pollId+'" >' + arr[i].pollName + '</li>'
        } else {
            lihtml = '<li class="treeLi" data-index="'+arr[i].pollId+'">' + arr[i].pollName + '</li>'
        }
        listArr += lihtml;
    }
    innerHtml += listArr;
    innerHtml += '</ul>';
    $(elementClass + ' .selectLi').html(innerHtml);
}


/*选择框的所有交互 
*{elementClass}   徐然的目标大容器的选择器
*/  
function selectToggle(elementClass) {
	$("body").on('click', elementClass + ' .selectLi', function (e) {
		//stopBubble(e);
		$(elementClass + ' .TreeList').toggleClass('show');
		$(elementClass + ' .dropIcon.icon').toggleClass('rotatel');
	})
	$("body").on('click', elementClass + ' .treeLi', function (e) {
		//stopBubble(e);
		var name = $(this).html();
		var index = $(this).attr('data-key');
		$(elementClass + ' .spanInner').attr('data-key', index);
		$(elementClass + ' .spanInner').html(name);
		$(elementClass + ' .treeLi').removeClass("active");
		$(this).addClass("active");
		$(elementClass + ' .spanInner').addClass("active");
		setTimeout(function () {
			$(elementClass + ' .TreeList').removeClass('show');
			$(elementClass + ' .dropIcon.icon').removeClass('rotatel');
		}, 1000);
		var getData = null;
		//发送数据请求             !!!!!!!!!!!!!!!需要后台根据'data-key'来发送请求
		//$.getJSON("words.json", {pollId: index}, function (data) {
		//var getData=data;  
		//postCallback();
		//});
		
	})
}