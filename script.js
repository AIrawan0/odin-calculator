function operate(num1,op,num2){
    switch(op){
      case '+':return num1 + num2;
      case '-':return num1 - num2;
      case '*':return num1 * num2;
      case '/':return num1 / num2;   
    }
}

const num1 = 1;
const num2 = 2;
const operator = '+';

const res = operate(num1,operator,num2)
console.log(res);

// Object look up