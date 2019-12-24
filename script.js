

const generate_array=()=>{
    var array=[];
    for(let i=0;i<200;i++){
        array.push((Math.random() * 385) + 15 | 0)
    }
    var html="";
    array.map(num=>(
        html+=`<div style='height:${num}px;width:3px;background:red'></div>`
    )).join("")
    
    document.querySelector(".output").innerHTML=html
    return array;
}

var array=generate_array();

console.log(array)










var generatebtn=document.querySelector(".generatearray");
var sortbtn=document.querySelector(".sortbtn");
var stopbtn=document.querySelector(".stopbtn");
var quicksortbtn=document.querySelector(".quicksortbtn");
var selectSpeed=document.querySelector("#speed");
var sorted=false;
var speed=100;

//timer variables
var counter=0;
var running=false;
var timer;

var sortDone;
var runFX=false;





function count(){
    document.querySelector("#time").innerHTML=counter;
    counter++;
}

function runTimer(){
    if(!running){
        running=true
        timer=setInterval(count,1000)
    }
}

var newarray=[];
selectSpeed.onchange=changeSpeed

  function changeSpeed(e){
    console.log("Speed: " + e.target.value);
    speed=e.target.value;
    return speed;
}



generatebtn.onclick=generate_array;
sortbtn.onclick=runIt;


function runIt(){
    if(!sorted){
  
    runTimer()
    document.querySelector(".output").innerHTML=""
    var html=""
    newarray=sortArray(array)

    newarray.map(num=>(
        html+=`<div style='height:${num}px;width:3px;background:red'></div>`
    )).join("")
    
    document.querySelector(".output").innerHTML=html
    if(!sortDone){
    setTimeout(runIt,speed)
    }
    else{
        console.log("Sort done!")
        clearInterval(timer)
    }
}
};


function sortArray(array){

    document.querySelector(".output").innerHTML=""
    var html=""
    console.log('sort array fired')
    if(!sorted){
        sortDone=true;
        sorted=true;
        for(var i=0;i<array.length;i++){
            if(array[i+1] > array[i]){
                sortDone=false;
                sorted=false;
                var temp=array[i+1]
                array[i+1]=array[i]
                array[i]=temp;
            }
           
        }
    }

  
   return array;
}


stopbtn.onclick=stop;


function stop(){
    if(!sorted){
    clearInterval(timer)
    sorted=true;
    document.querySelector(".stopbtn").innerHTML="Pause"
    }
    else{
        sorted=false;
        document.querySelector(".stopbtn").innerHTML="Ready"
    }
}


// var sorted=quickSort(array,0,array.length-1)

// console.log(sorted)


quicksortbtn.onclick=()=>quickSort(array,0,array.length-1)


function quickSort(arr, left, right){

    document.querySelector(".output").innerHTML=""
    var html=""
    var len = arr.length, 
    pivot,
    partitionIndex;
 
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }

   arr.map(num=>(
    html+=`<div style='height:${num}px;width:3px;background:red'></div>`
)).join("")

document.querySelector(".output").innerHTML=html
   return arr;
 }
         
 
 function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }
         
 
 function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }