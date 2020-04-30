//Third part in Material Review:

//$('css selector').action()

console.log('Script file is loaded.');

$('h1').text('This is done by JavaScript!');
$('h1').html('This is done by <em>JavaScript</em>!');
$('p').css('border','1px solid red');
$('p').css('padding', '10px');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue'); 
//Same statement for the second time will cancel the first one.
$('h2').toggleClass('blue');
//Same statement for the third time will re-activate it.

$('main').append('<p> A p is appended in the main. ')

function myLittleFunction(){
    
}

$('#add').click();





//Single line comment

/*
Multiple
lines
of
comments
*/


/*2
12-5
7
4*3
12
15/6
2.5
let age
undefined
age=34
34
age+5
39
age=55
55
age+5
60
age=48/8
6
age+1
7
let number_of_legs=4
undefined
number_of_legs*4
16
let name="Adam
VM512:1 Uncaught SyntaxError: Invalid or unexpected token
let name="Adam"
undefined
name
"Adam"
name="Egg"
"Egg"
name=`StayAtHome`
"StayAtHome"
let sentence="That person's cat."
undefined
sentence= 'He said "ok"'
"He said "ok""
let backtick=`backtick`
undefined
let oldEnoughToDrive = fals
VM890:1 Uncaught ReferenceError: fals is not defined
    at <anonymous>:1:24
(anonymous) @ VM890:1
let oldEnoughToDrive = false
undefined
'Hello, +name
VM985:1 Uncaught SyntaxError: Invalid or unexpected token
'Hello, ' +name
"Hello, StayAtHome"
'Hello, ' +name +43+ 'another string'
"Hello, StayAtHome43another string"
11+23
34
'11'+'23'
"1123"
oldEnoughToDrive = true
true
true && true
true
true && false
false
false && false
false
true||true
true
true||false
true
false||false
false
true && (false || (true && false))
false
let color1 = "orange"
undefined
let color2 = "blue"
undefined
let colors = ["orange", "blue", "green"]
undefined
colors
(3) ["orange", "blue", "green"]
colors[0]
"orange"
colors[1]
"blue"
colors[2]
"green"
let pickedColor = 2
undefined
colors [pickedColor]
"green"
colors[1]="yellow"
"yellow"
colors
(3) ["orange", "yellow", "green"]
colors.length
3
name
"StayAtHome"
name.length
10
colors[3] = 'lime'
"lime"
colors
(4) ["orange", "yellow", "green", "lime"]
colors.push('purple')
5
colors
(5) ["orange", "yellow", "green", "lime", "purple"]
colors[colors.length] = 'cyan'
"cyan"
colors
(6) ["orange", "yellow", "green", "lime", "purple", "cyan"]
color.push(colors)
VM2275:1 Uncaught ReferenceError: color is not defined
    at <anonymous>:1:1
(anonymous) @ VM2275:1
colors.push(colors)
7
colors
(7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]
let notGoodExample = ['text', 123, true]
undefined
let person = {
name: 'Adam'
}
undefined
let person = {
name: 'Adam',
age: 34,
favoriteColors: colors,
oldEnoughToDrive: true}
undefined
person
{name: "Adam", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true}
'Hello, dear ' + person.name
"Hello, dear Adam"
person.food = 'pizza'
"pizza"
person
{name: "Adam", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}
person.name = 'Peti'
"Peti"
person
{name: "Peti", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}
*/