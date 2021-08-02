// mouseenter -> 마우스가 올라왔을때
// .addClass -> 선택 요소에 클래스 생성
// .parent -> 부모선택
$(function(){
    // menu1
    $(".gnb>.menu1").mouseenter(function(){
        $(".gnbAreaWrap").addClass("on");
        $(this).addClass("on").find(">a").css({
            "color":"#0d6d42","font-weight":"600"
        });
        $(this).siblings().find(">a").css({
            "color":"#999","font-weight":"300"
        });
        $(".slideMenu").css("display","none");
        $(".gnbArea_1").slideDown(200);
    });

    $(".gnb>.menu1").mouseleave(function(){
        $(this).removeClass("on");
    });

    $(".gnbAreaWrap>.gnbArea_1").mouseover(function(){
        $(this).parent().addClass("on")
        $(".gnb>.menu1").addClass("on").find(">a").css("color","#0d6d42");
        $(".gnb>.menu1").find("a").css("font-weight","600");
    });

    $(".gnbAreaWrap").mouseleave(function(){
        $(".gnb>.menu1").removeClass("on").find(">a").css({"color":"#333","font-weight":"400"})
        $(".gnb>li").removeClass("on");
        $(".gnbAreaWrap>.gnbArea_1").slideUp(200);
        $(".gnbAreaWrap").removeClass("on");
    });


    // menu2

    $(".gnb>.menu2").mouseenter(function(){
        $(".gnbAreaWrap").addClass("on");
        $(this).addClass("on").find(">a").css({
            "color":"#0d6d42","font-weight":"600"
        });
        $(this).siblings().find(">a").css({
            "color":"#999","font-weight":"300"
        });
        $(".slideMenu").css("display","none");
        $(".gnbArea_2").slideDown(200);
    });

    $(".gnb>.menu2").mouseleave(function(){
        $(this).removeClass("on");
    });

    $(".gnbAreaWrap>.gnbArea_2").mouseover(function(){
        $(this).parent().addClass("on")
        $(".gnb>.menu2").addClass("on").find(">a").css("color","#0d6d42");
        $(".gnb>.menu2").find("a").css("font-weight","600");
    });

    $(".gnbAreaWrap").mouseleave(function(){
        $(".gnb>.menu2").removeClass("on").find(">a").css({"color":"#333","font-weight":"400"})
        $(".gnb>li").removeClass("on");
        $(".gnbAreaWrap>.gnbArea_2").slideUp(200);
        $(".gnbAreaWrap").removeClass("on");
    });
    // menu3
    $(".gnb>.menu3").mouseenter(function(){
        $(".gnbAreaWrap").addClass("on");
        $(this).addClass("on").find(">a").css({
            "color":"#0d6d42","font-weight":"600"
        });
        $(this).siblings().find(">a").css({
            "color":"#999","font-weight":"300"
        });
        $(".slideMenu").css("display","none");
        $(".gnbArea_3").slideDown(200);
    });

    $(".gnb>.menu1").mouseleave(function(){
        $(this).removeClass("on");
    });

    $(".gnbAreaWrap>.gnbArea_3").mouseover(function(){
        $(this).parent().addClass("on")
        $(".gnb>.menu3").addClass("on").find(">a").css("color","#0d6d42");
        $(".gnb>.menu3").find("a").css("font-weight","600");
    });

    $(".gnbAreaWrap").mouseleave(function(){
        $(".gnb>.menu3").removeClass("on").find(">a").css({"color":"#333","font-weight":"400"})
        $(".gnb>li").removeClass("on");
        $(".gnbAreaWrap>.gnbArea_3").slideUp(200);
        $(".gnbAreaWrap").removeClass("on");
    });

    // menu4

    $(".gnb>.menu4").mouseenter(function(){
        $(".gnbAreaWrap").addClass("on");
        $(this).addClass("on").find(">a").css({
            "color":"#0d6d42","font-weight":"600"
        });
        $(this).siblings().find(">a").css({
            "color":"#999","font-weight":"300"
        });
        $(".slideMenu").css("display","none");
        $(".gnbArea_4").slideDown(200);
    });

    $(".gnb>.menu4").mouseleave(function(){
        $(this).removeClass("on");
    });

    $(".gnbAreaWrap>.gnbArea_4").mouseover(function(){
        $(this).parent().addClass("on")
        $(".gnb>.menu4").addClass("on").find(">a").css("color","#0d6d42");
        $(".gnb>.menu4").find("a").css("font-weight","600");
    });

    $(".gnbAreaWrap").mouseleave(function(){
        $(".gnb>.menu4").removeClass("on").find(">a").css({"color":"#333","font-weight":"400"})
        $(".gnb>li").removeClass("on");
        $(".gnbAreaWrap>.gnbArea_4").slideUp(200);
        $(".gnbAreaWrap").removeClass("on");
    });
    // search

    var searchBtn = $(".btn2");
    var searchCon = $(".search");
    searchBtn.toggle(function(){
        searchCon.slideDown(200);
    },function(){
        searchCon.slideUp(200);
    });

    // .toggle : 선택한 요소가 보여지면 숨겨두고, 숨겨져있으면 나타나게

    // close btn

    $(".close").click(function(){
        searchCon.slideUp(200);
    });
});