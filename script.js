function operate(num1,op,num2){
    switch(op){
      case '+':return num1 + num2;
      case '-':return num1 - num2;
      case '*':return num1 * num2;
      case '/':return num1 / num2;   
    }
}

function readList(list){
  let str = '';
  for(num of list){str+=num;}
  return str;
}

function partition(arr){
  const len = arr.length;
  let partition = [];
  let num = '';
  for(let i=0;i<len;i++){
    const part = arr[i];
    console.log(part);
    if(operator.includes(part)){
      partition.push(Number(num));
      partition.push(part);
      num = '';
    }else if(i==len-1){
      num += part;
      partition.push(Number(num));
    }else{
      num += part;
    }
  }
  return partition;
}

function evaluate(arr){
  console.log(partition(arr));
}

// const num1 = 1;
// const num2 = 2;
// const operator = '+';
// const res = operate(num1,operator,num2)
// console.log(res);

let input = [];
const operator = ['+','-','*','/'];

const button = document.querySelectorAll('.key');
const submit = document.getElementById('submit');
const display = document.getElementById('display');
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    if(btn.textContent === 'C')input = []
    // console.log("Pressed "+ btn.textContent)
    input.push(btn.textContent==='C'?0:btn.textContent);
    let list = readList(input);
    display.textContent = list;
  })
});

submit.addEventListener("click",()=>{
  console.log("Input value : "+ input);
  evaluate(input);
})