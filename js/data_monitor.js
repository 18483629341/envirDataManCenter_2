$(function () {
    initSelectlist('.polSelct');
    selectToggle('.polSelct');
    
})

$("body").on('click','.tabSpan',function(){
    $('.tabSpan').removeClass('active');
	$(this).addClass('active');
})
var isFirst=true;
$("body").on('click','.timeTypeSpan',function(){
	$('.timeTypeSpan').removeClass('active');
	$(this).addClass('active');
    var type=$(this).attr('data-name');
    console.log(type);
	if(type==='hour'){
	
	}else{
     
	}
})
var pollNameList=[{
    pollId: 21,
    pollName: "排污口1"
}, {
    pollId: 22,
    pollName: "排污口2"
}, {
    pollId: 23,
    pollName: "排污口3"
}];
function initSelectlist(elementClass) { //初始化某个弹幕的选框的dom                                  //待完善
    var innerHtml = '';
    innerHtml = '<span class="selectSpan ">' +
        '<span class="spanInner active" data-key="'+pollNameList[0].pollId+'" >' + pollNameList[0].pollName + '</span>' +
        '<i class="icon dropIcon"></i>' +
        '</span>' +
        '<ul class="TreeList" >';
    var listArr = '';
    for (var i = 0; i < this.pollNameList.length; i++) {
        var lihtml = '';
        if (i === 0) {
            lihtml = '<li class="treeLi active" data-index="'+pollNameList[0].pollId+'" >' + pollNameList[i].pollName + '</li>'
        } else {
            lihtml = '<li class="treeLi" data-index="'+pollNameList[i].pollId+'">' + pollNameList[i].pollName + '</li>'
        }
        listArr += lihtml;
    }
    innerHtml += listArr;
    innerHtml += '</ul>';
    $(elementClass + ' .selectLi').html(innerHtml);
}
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
		getData = { //这个是假设的数据，
			'wasteGasArr': [40, 60, 55, 55, 55, 40, 60, 55, 140, 55, 40, 60],
			'wasteWaterArr': [90, 60, 80, 70, 160, 80, 90, 60, 80, 90, 60, 80],
			'SO2Arr': [140, 60, 55, 55, 55, 40, 55, 140, 55, 140, 60, 60],
			'nitOxiArr': [120, 70, 60, 80, 80, 90, 160, 90, 60, 90, 60, 80], //溶解氧
			'smokeArr': [88, 66, 50, 60, 155, 40, 60, 155, 60, 60, 40, 56]
		}
		postCallback();


		//post请求后的回调函数
		function postCallback() {
			var newPopupObj = null;
			//根据排污口渲染数据；
			newPopupObj = initPopupObjByData2.setPopupObj(getData); //根据i值变化数据源
		
		}
	})
}