// 모든 타이틀을 내가 원하는 이름으로 바꾸기 (버튼을 눌렀을때)
// 1. 버튼이 눌린다.
//   1-1. 버튼의 내용을 가져온다.
//   1-2. 버튼의 OnclickListener를 달아준다.
//   1-3. 버튼을 눌렀을때 메소드를 실행 시킨다.
// 2. 타이틀에 해당하는 HTML element들을 가져와 변수에 담는다.
// 3. 각각을 순환하며 내용물을 바꾼다.

// 함수 선언 방법 
// 1. 
// function 함수이름(파라미터){
// }
// 먼저 선언되어 있지 않아도 사용 가능

// 2.
// var 함수이름 = function(파라미터){
// }
// 먼저 선언하지 않으면 사용 불가능..

function setTitle(){
    var titles = document.getElementsByClassName('title');
    for(var i=0;i<titles.length;i++){
        titles[i].innerHTML = "바뀌었군!";
    }
}

// var btn = document.getElementByTagName('button')[0]
var btn = document.getElementById('settitle')

btn.onclick = function(){
    alert('hi');
    setTitle();
}