/*header��js*******/
$(".person").on("mouseover",function(){
    $(".select_box1").show();
    $(".person").css('background','#fff')
}).on("mouseout",function(){
    $(".select_box1").hide();
    $(".person").css('background','#F2F2F2')
});
$(".server").on("mouseover",function(){
    $(".select_box2").show();
    $(".server").css('background','#fff')
}).on("mouseout",function(){
    $(".select_box2").hide();
    $(".server").css('background','#F2F2F2')
});
$(".more").on("mouseover",function(){
    $(".select_box3").show();
    $(".more").css('background','#fff')
}).on("mouseout",function(){
    $(".select_box3").hide();
    $(".more").css('background','#F2F2F2')
});

/*���з���*/
$(".first_one").on("mouseover",function(){
    $(".selectBox4").show();
    }).on("mouseout",function(){

              $(".selectBox4").hide();

})
$(".selectBox4").find("li").each(function(){
    $(this).on("mouseover",function(){
        $(this).children("div").show();

    }).on("mouseout",function(){
        $(this).children("div").hide();
    })
})




/*********�ֲ�js   jquery���뵭��*/
$("#lunbo").hover(function(){

    $("#toLeft,#toRight").show();
    //$("#toRight").show();
},function(){
    $("#toLeft,#toRight").hide();
   // $("").hide();
});

$(function(){
    var size=$(".imgBox>li").size();
    //console.log(size);
    var i=0;
    $(".imgBox>li:gt(0)").hide();
    $(".imgIndex>li").eq(0).addClass('showIndex');
    $(".imgIndex>li").on("mouseover",function(){
        $(this).addClass("showIndex").siblings().removeClass("showIndex");
        var index=$(this).index();
        i=index;
        $(".imgBox>li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    })

    function moveLeft(){
        i--;
        if(i==-1){
            i=size-1;
        }
        $(".imgIndex>li").eq(i).addClass("showIndex").siblings().removeClass("showIndex");
        $(".imgBox>li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
    }

    function moveRight(){
        i++;
        if(i==size){
            i=0;
        }
        $(".imgIndex>li").eq(i).addClass("showIndex").siblings().removeClass("showIndex");
        $(".imgBox>li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
    }
    var timer=setInterval(moveRight,3000);
    $("#toLeft").click(function(){
        moveLeft();
    });
    $("#toRight").click(function(){
        moveRight();
    });

    $("#lunbo").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(moveRight,3000);

    })





});







/*¥�㵼������*********/

    /* var floor=document.getElementById("floor");
    var floors=floor.getElementsByTagName("div");
    var floorLead=document.getElementById("floor_leading");
    var liList=floorLead.getElementsByTagName("li");
    var toTop=document.getElementById("toTop");
window.onload=window.scroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var height=document.documentElement.clientHeight||document.body.clientHeight;
    if(scrollTop>=floors[0].offsetTop){
        $(floorLead).show();
    }else{
        $(floorLead).hide();
    }
    var num=0;
    for(var i=0;i<floors.length;i++){
        if(scrollTop>=floors[i].offsetTop){
            num=i;
        }
        //floors[i].className="";

    }
    floors[num].className="shopping";
    for(var i=0;i<liList.length;i++){
        liList[i].click=function(){
            for(var j=0;j<liList.length;j++){
                if(this == liList[j]){
                    document.documentElement.scrollTop = liList[j].offsetTop;
                    document.body.scrollTop = liList[j].offsetTop;
                }
            }
        }
    }
    var time=null;
    toTop.click=function(){
        function goBack(){
            var ss = document.documentElement.scrollTop || document.body.scrollTop;
            ss-=50;
            document.documentElement.scrollTop = ss;
            document.body.scrollTop = ss;
            if(ss<= 0){
                clearInterval(time);
            }
        }
        time = setInterval(goBack,10);
    }


}*/



    //console.log(li1);
    //console.log(z1);
    $(window).scroll(function() {

        var z1 = $("#floor>div");
        var li1 = $("#floor_leading>ul>li");
        if ($(window).scrollTop() >= $("#floor1").offset().top) {
            $("#floor_leading").show();
        } else {
            $("#floor_leading").hide();
        }
        var num = 0;
        for (var i = 0; i < z1.length; i++) {
            if ($(window).scrollTop() >= z1[i].offsetTop) {
                num = i;

            }
            var arr1=['母婴儿童','美容彩妆','服饰鞋包','家居生活','营养保健','海外直邮','数码家电','环球美食','网易精选'];
            for(var j=0;j<arr1.length;j++){
                $(li1[j]).text(arr1[j]);
                console.log(arr1[j]);
            }
            $(li1[i]).css("background", "#D22147");

        }



        $(li1[num]).text(num+1+"F");
        $(li1[num]).css("background", "#A81A38");

        for (var i = 0; i < li1.length; i++) {
            li1[i].onclick = function () {
                for (var j = 0; j < li1.length; j++) {
                    if (this == li1[j]) {
                        document.documentElement.scrollTop = z1[j].offsetTop;
                        document.body.scrollTop = z1[j].offsetTop;
                    }
                }

            }
        }



    });

var time = null;
$("#toTop").on("click" , function() {
    function goBack(){
        var ss = $(window).scrollTop();
        ss-=50;
        document.documentElement.scrollTop = ss;
        document.body.scrollTop = ss;
        if(ss<= 0){
            clearInterval(time);
        }
    }
    time = setInterval(goBack,1);
})







