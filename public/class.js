// 버튼을 눌렀을때, table 태그에 class를 추가/삭제한다.
// 1. 버튼을 누른다.
//   1-1. 버튼요소를 가지고 온다.
//   1-2. 버튼요소에 eventListener를 달아준다.
//   1-3. 버튼을 눌렀을 때 실행시킬 메소드를 포함한다.
// 2. table 태그 요소를 가지고 온다.
// 3. table 태그에 내가 원하는 class(table-hover)가 있는지 확인한다.
//   3-1. class가 있으면 삭제한다.
//   3-2. class가 없으면 추가한다.
var btn = document.getElementById('setclass');

btn.onclick = function(){
    // console.log(btn);
    toggleClass();
}

function toggleClass(){
    var tbl = document.getElementsByClassName('table')[0];
    console.log(tbl.classList);
    
    // if(tbl.classList.contains('table-hover'))
    // {
    //     tbl.classList.remove('table-hover');
    // }
    // else
    // {
    //     tbl.classList.add('table-hover')    
    // }
    tbl.classList.toggle('table-hover');
}