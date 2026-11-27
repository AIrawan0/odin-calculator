function operate(num1,op,num2){
    switch(op){
      case '+':return num1 + num2;
      case '-':return num1 - num2;
      case '*':return num1 * num2;
      case '/':return num1 / num2;   
    }
}

function handleDisplay(list){
  let str = '';
  for(num of list){str+=num;}
  display.textContent = str;
}

function partition(arr){
  const len = arr.length;
  let partition = [];
  let num = '';
  for(let i=0;i<len;i++){
    const part = arr[i];
    // console.log(part);
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
  const parted = partition(arr);
  console.log('partitioned : ' +parted);
  let res = 0;
  let opFound = 0;
  for(let i=0;i<parted.length;i++){
    if(operator.includes(parted[i])){
      opFound += 1;
      if(res===0)res+=parted[i-1];
      res = operate(res,parted[i],parted[i+1]);
    }
  }
  if(opFound<=0)res=parted[0];
  console.log(res);
  input = [res];
  display.textContent = res;
  console.log('input after result :' + input)

}

function handleSubmit(){
  console.log("Input value : "+ input);
  evaluate(input);
}

function handleNumkey(btn){
  btn.addEventListener('click',()=>{
    if(btn.textContent === 'C')input = []
    // console.log("Pressed "+ btn.textContent)
    input.push(btn.textContent==='C'?0:btn.textContent);
    handleDisplay(input);
  });
}

let input = [];
const operator = ['+','-','*','/'];
const button = document.querySelectorAll('.key');
const submit = document.getElementById('submit');
const display = document.getElementById('display');

button.forEach(handleNumkey);

submit.addEventListener("click",handleSubmit);