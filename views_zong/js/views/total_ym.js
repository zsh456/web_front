/**
 * Created by Administrator on 2017/3/31.
 */
/*$(".streetAdminOpen_ym").click(function(){
    var zhankai=$(".streetAdminOpen_ym").css("display");
    console.log(zhankai);
    if(zhankai=="none"){
        $("tr.sons").show();
    }else{
        $("tr.sons").hide();
    }
});*/
$('.streetAdminOpen_ym').click(function () {
    var op=$('.streetAdminOpenContent_ym').css('display');
    if(op=='none'){
        $(this).text('-');
        $('.streetAdminOpenContent_ym').show();
    }else {
        $('.streetAdminOpenContent_ym').hide();
        $(this).text('+');

    }
});

$('.streetAdminOpen_ym')[0].style.cursor='pointer';
$('.dataSta_ym')[0].style.cursor='pointer';
$('.eightModu_ym')[0].style.cursor='pointer';
$('.usersAdmin_ym')[0].style.cursor='pointer';
$('.monitor_ym')[0].style.cursor='pointer';

$('.dataSta_ym').click(function () {
    var op=$('.dataStaContent_ym').css('display');
    if(op=='none'){
        $(this).text('-');
        $('.dataStaContent_ym').show();
    }else {
        $('.dataStaContent_ym').hide();
        $(this).text('+');
    }
});
$('.eightModu_ym').click(function () {
    var op=$('.eightModuContent_ym').css('display');
    if(op=='none'){
        $(this).text('-');
        $('.eightModuContent_ym').show();
    }else {
        $('.eightModuContent_ym').hide();
        $(this).text('+');
    }
});
$('.usersAdmin_ym').click(function () {
    var op=$('.usersAdminContent_ym').css('display');
    if(op=='none'){
        $(this).text('-');
        $('.usersAdminContent_ym').show();
    }else {
        $('.usersAdminContent_ym').hide();
        $(this).text('+');
    }
});
$('.monitor_ym').click(function () {
    var op=$('.monitorCon_ym').css('display');
    if(op=='none'){
        $(this).text('-');
        $('.monitorCon_ym').show();
    }else {
        $('.monitorCon_ym').hide();
        $(this).text('+');
    }
});







