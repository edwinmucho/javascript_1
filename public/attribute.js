// table의 크기를 내가 원하는 사이즈로 설정하기

// style width -> 그때 그때 원하는 만큼.

// 버튼을 눌렀을때, table 태그에 class를 추가/삭제한다.
// 1. 버튼을 누른다.
//   1-1. 버튼요소를 가지고 온다.
//   1-2. 버튼요소에 eventListener를 달아준다.
//   1-3. 버튼을 눌렀을 때 실행시킬 메소드를 포함한다.
// 2. table 태그 요소를 가지고 온다.
//   2-1. prompt 창을 띄운다.
//   2-2. prompt 창에 원하는 사이즈를 입력한다.
//   2-3. table의 style 속성 중 width 속성을 바꾼다.


var btn = document.getElementById('setattribute');

btn.onclick = function()
{
    setWidth();
}

function setWidth()
{
    var tbl = document.getElementById('myTable');
    var size = prompt("원하는 사이즈를 입력해 보세요: ");
    tbl.setAttribute('style','width: '+size+'%;')
}