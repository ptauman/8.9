function arrow(number, boolObject)
{
    result = ""
    if (!boolObject)
    {result+="<"}
    for (let index = 0; index < number; index++) {
       result+="-"    
    }
    if (boolObject)
    {result+=">"}
    return result
}

function users()
{
    let numbers = []
        let userNumber = Number(prompt("pres a number"))
        numbers.push(userNumber)
        while (userNumber !=0)     
            {
                userNumber = Number(prompt("pres a number"))
                numbers.push(userNumber)
            } 
        console.log(numbers)
        console.log("max" + max(numbers))
        console.log("len" + numbers.length)
        console.log("sum" + sum(numbers))
        console.log( "av" +avarage(numbers))
        console.log("for"+"   " +forthNumber(numbers))
               
}

function max(array)
{
    let max= array[0]
    for (let index = 0; index < array.length; index++) {
        if (array[index]>max)
            { max=array[index] }       
    }

    return max
}

function sum(array)
{
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum +=array[index]
    }
    return sum
}
function avarage(array)
{
    return sum(array)/array.length
}

function forthNumber(array)
{
    result = 0
    if (array.length<4)
    { result = array[array.length-1]}
    else{result=array[3]}
    return result

}
function starTriangle(number)
{
    result = ""
    for (let index = 0; index < number; index++) {
        result += "*"
        console.log(result)
    }   
}

function InvertedStarTriangle(number)
{
    resArr = []
    result = ""
    for (let index = 0; index < number; index++) {
        result += "*"
        resArr.push(result)
    }
    let len = resArr.length
    for (let index = 0; index < len; index++) {
        console.log(resArr.pop())
    }
}

function revrsNumber(number)
{        resultStr = ""

    while (number>0)
    {
    resultInt = number%10
    resultStr += String(resultInt)
    number= Math.floor(number/10) 
    }
    console.log(resultStr)  
}

function multiplicationTable(user)
{
    number = 0
    numbers = []
    for (let index = 1; index <= user; index++) {
        let newarr = []
        for (let newindex = 1; newindex <= user; newindex++) 
        {
           newarr.push(index*newindex)
        }
        console.log(newarr.join('\t'))     
    }
}
function space(str)
{
    if (str == null)
        {return ""}

    mybool = false
    for (let index = 0; index < str.length; index++) {
        if (str[index]!==" ")
        {mybool = true}       
        }
    if(mybool==false)
        {return " "}
    else 
    {return str.trim()}
}

function multyList(list1,list2)
{//יצירת רשימה 1 חדשה
    for (let index = 0; index < list1; index++) {
        let new1 = []
        for(let index2 = 0; index2 < list1; index2++)
        {
            if (index!=index)
            {new1.push(list1[index2])}
        }
    }
    console.log(new1)

        // list3 =[]
        // let number =0
        // for (let index = 0; index < new1.length; index++) {
        //   numnber *= new1[index]           
        // }   
        // number*=sum(list2)

    
}
multyList([1,2,3,4][1,2,3,4])