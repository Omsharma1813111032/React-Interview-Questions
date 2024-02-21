// It is a coding question in which we have array we dont neet to creata new array we have to update the exist array
// we have to do sum of all index except that index
// inout arr = {2,7,11,4,-2}
// ouput arr = {20,15,11,18,24}

const SumExceptThatIndex = () => {

    const solution = () =>{
        
        const arr = [2,7,11,4,-2]
        let sum=0;
    
        for(var i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        for(var j=0;j<arr.length;j++){
            arr[j] = sum-arr[j];
        }
        console.log(arr)
    }


  return (
    <div>

        {solution()}

    </div>
  )
}

export default SumExceptThatIndex