function example(parameter) {
  if(typeof(parameter) === "string") {
    console.log(`${parameter} : 데이터타입은 string입니다.`);
  } else {
    console.log(`${parameter} : 데이터타입은 string은 아닙니다.`);
  }
}
/*
  if() 제어는 일반적으로 경우의 수를 두개 놓습니다.
  조건식(condition)
  true 실행부
  false 실행부
  기본형의 경우 '두가지의 경우의 수'를 생각합니다.
  이러한 것을 '분기'한다고 합니다.
*/
example("hello javascript");