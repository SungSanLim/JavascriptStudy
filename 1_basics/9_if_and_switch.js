/**
 * If and Switch
 */

let number = 5;

if (number % 2 === 0) {
    console.log('number는 짝수');
} else {
    console.log('number는 홀수');
    
}

if (number % 2 === 0) {
    console.log('number는 2의 배수');
} else if (number % 3 === 0) {
    console.log('number는 3의 배수');
} else if (number % 4 === 0) {
    console.log('number는 4의 배수');
} else if (number % 5 === 0) {
    console.log('number는 5의 배수');
} else {
    console.log('2,3,4,5의 배수가 아니다.');
}

const englishDay = 'tuesday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default: 
        koreanDay = '주말';
        break;
}
console.log(koreanDay);