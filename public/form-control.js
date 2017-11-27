$(function(){
    // console.log("done");
    $('#post_title').val("제이 쿼리 굳잼!!");
    $('#post_title').on('change', function(){
       var text = $('#post_title').val();
        alert(text);
    });
});


// jQuery 실습
// Q. post_tilte의 내용물이 바뀌면 alert를 통해 내용물을 확인.
// 1. post_title 내용을 가지고 온다.
//   1-1. 요소에 onChangeListener를 달아준다.
//   1-2. 요소의 바뀐값을 추출해 온다.
//   1-3. 값을 변수에 저장한다.
// 2. 변수에 저장된 값을 alert 한다.