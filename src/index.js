export function sum(a, b) {
    return a + b;
  }


const test = () => {
    return '嘿嘿'
}
  

// test()
// 手动调用 sum 函数来生成覆盖率
sum(1, 2);


const a = '1'
const b = '2'



if (true) {
    console.log(a);
} else if(false){
    console.log(b);
} else {
    console.log('789');
}

const sortaaa = () => {
    function compareFn(a, b) {
        if (a > b) {
          return -1;
        } else{
          return 1;
        }
        return 0;
      }
      const data = [6,4,2,5,6,8,9,1,23,45,767,0]
    return data.sort(compareFn)
}

sortaaa()