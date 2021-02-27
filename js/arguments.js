// name, age 같은 것들을 arguments or parameter 아규먼트, 파라미터, 인자 라고 한다.
function sayHello(name, age) {
  //   console.log('Hello!', name, 'You have', age, 'years of age');
  //   console.log('Hello!' + name + 'You have' + age + 'years of age');
  // console.log(`Hello ${name} you are ${age} years old`);
  return `Hello ${name} you are ${age} years old`;
}
// `(백틱), '' 싱글따옴표 "" 더블따옴표

const greetNicolas = sayHello('Nicolas', 14);

console.log(greetNicolas);

// sayHello('Nicolas', 15);
