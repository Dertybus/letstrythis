const num = 5;

console.log("String: " + num);
let number;
number = false;
let num1 = 5;
let num2 = "5"
let num3 = 5;
let num4 = 15;
console.log("math: " + (num1 - num2))
console.log("math: " + (num3 - num4))

let num5 = 5;
num5--;
console.log(num5);

let str1 = Number("12");
let str2 = Number("2");
console.log(str1 + str2);

console.log("MATH PI and E " + Math.PI + "  " + Math.E);
console.log("MATH min " + Math.min(32,45,21,60,3,1,0.6)); */

let numbrs = 15;
let isHasHouse = true;
if (numbrs == 5 && isHasHouse == true) {
    console.log("Ok");
} else if(numbrs < 10) {
    console.log("poop");
} else if (numbrs == 7) {
    console.log("7!!!!");
} else if (numbrs >= 15) {
    console.log(" YES YES");
} else {
    console.log("NOT CORRECT");
}
let stroka = "word23"

switch (stroka) {
    case "4":
        console.log("string with value 4");
        break;
    case "45":
        console.log("string with value 45");
        break;
    case "word":
        console.log("string with value 'word'");
        break;
    default:
        console.log("Default");
}
//������� �� ���� � ������� �� ���� � ������ https://stepik.org/lesson/41645/?unit=20085
//alert("Hello world!")
//� ���� ������� � ��� ���� ��������� ������� ���, ������� ���������������. ��� ����� ������ ��� ������� ������������, ����� ��� ���������, � ������ ������ "���������".
function testComment(a, b) { 
    var x;
    x = a * b;
  return x;
}
//� ��������� ����� �������� ���, ������� �������� �������� �� ���������� a � ���������� x.

function testA(c) {

    var xd = "";

    xd = c

    return xd;
}

//� ���� ������� ��� ����� ������� � ��������� ����� ���, ������� ����� ����������� ���������� "�" �������� ����� ���������� "a" � "b".

function testSum(aba, bob) {
    var xfg;
    xfg = aba + bob;
    return xfg;

}
//�������� ��������� ��� ������ �����������. (  ��� ����� ���� ���������������)

let x = 3;
let y = 6;
str = (x + y, y - x);
console.log(str)*/

//� ���� ������� ��� ����� ������� � ��������� ����� ���, ������� ����� ����������� ���������� "�" ��������� �������� ������� �� ������� ������������ ���������� "a" � "b" �� �� �����.
//������ ������: ��� �� ����� �������� �������� ���������� a � b, ��� ��� ������ � ���������� � ��������� ����� �������. ������ ����������� ��.
/*function testOperation(a, b) {
    var x;
    x = ((a * b) / (a + b)) * 2
    return x;
    console.log(x)
}*/

//� ���� ������ ��� ����� ������� ��������� ���������� (�������� ���������� ���, ��������� �� ������ ���� ����� �����) ���������� a � ���������� b.

//�� ���� �������, ��������� �������� ������ JS '(' expected
/*function getOlderUser Array(users); {
    if (users.length === 0) {
        return null;
    }
    let oldestUser = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age > oldestUser.age) {
            oldestUser = users[i];
        }
    }
    return oldestUser.name;
}
let allUsers = [
    { name: '����', age: 11 },
    { name: '����', age: 24 },
    { name: '������2', age: 21 },
    { name: '�������', age: 34 },
    { name: '����������', age: 7 }
];

let result = getOlderUser.Array(allUsers);

console.log(result); */