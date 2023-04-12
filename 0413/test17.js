// test17.js
'use strict';

// 오늘 날짜를 전역변수로 선언
const today = new Date();
const year = today.getFullYear();  // 년도 4자리
const month = today.getMonth() + 1;    // 월(0부터 시작하기 때문에 기존 월보다 -1)
const date = today.getDate();      // 일
const hour = today.getHours();    // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜
function fCheck1() {
  console.log("표준날짜 : " + date);
  demo.innerHTML = today;
}

// 편집날짜
function fCheck2() {
  console.log("편집날짜 : " + yymmdd);
  demo.innerHTML = today;
}

// 편집날짜(요일포함) : 0(일요일), 1(월), 2(화), 3(수), 4(목), 5(금), 6(토)
function fCheck3() {
  let str = today.getDay();
  let week = ['일','월','화','수','목','금','토']
  demo.innerHTML = week[str] + '요일';  // 요일이 숫자로 나오기 때문에 배열로 요일 출력하기
}

// 해당 달의 마지막 날짜
function fCheck4() {
  let mon = prompt("마지막 날짜를 출력할 '년-월'을 입력하세요.(yyyy-mm)");
  let temp = mon.split('-'); 
  let yy = temp[0];
  let mm = temp[1];

  let str = new Date(yy,mm,0);     // new Date(년,월,일,시,분,초) 일자에 0이 들어가면 그 달의 마지막 날짜가 된다!(0일은 없으니까)
  // let strDate = str.getFullYear() + '-';
  // strDate += (str.getMonth() +1) + '-';
  // strDate += str.getDate();
  
  let strDate = "해당 월의 마지막 일자?" + yy + '-' + mm + '-' + str.getDate();


  demo.innerHTML = strDate;
}
