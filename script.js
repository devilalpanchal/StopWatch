// settimeout (callback,delay)
// Clear time out


// let start = document.querySelector('.start')
// let end = document.querySelector('.end')
// let settimeout
// start.addEventListener('click',()=>{
//     settimeout =  setTimeout(()=>{
//         console.log('hello devilalpanchal')

//     },3000)

//     end.addEventListener('click',()=>{
//         clearTimeout(set)
//     })
// })



// let count = 0
// let clearid
// start.addEventListener('click',()=>{
//     clearid = setInterval(() => {
//         count++
//         console.log('hello devilalpanchal')
    
//     }, 3000);
       


// end.addEventListener('click',()=>{
//     clearTimeout(clearid)

// })
// })
// setTimeout(()=>{
//     console.log('hello devilalpanchal')
// },3000)
// let second = 0;
// let minute = 0;
// let hour = 0;
// let timer;
// let start = document.querySelector('.start')
// let end = document.querySelector('.end')

// start.addEventListener('click', () =>{

//     timer = setInterval(()=> {
//         second++
//         if (second >= 60) {
//             minute++
//             second = 0
            
//         }
//         if (minute >= 60) {
//             hour++
//             minute = 0
            
//         }
    
    
//         if (second < 10) {
//             second.innerText = `$0{second}`
            
//         }
//         else{
//         second.innerText = second;
            
//         }
//         if (minute<10) {
//             minute.innerText = `$0{minute}`
            
//         }
        
//         else{
//         minute.innerText = minute;
            
//         }
//         if (hour<10) {
//             hour.innerText = `$0{hour}`
            
//         }
//         else{
//         hour.innerText = hour;
            
//         }
    
//     },1000)

// })

// end.addEventListener('click',()=>{
//     clearInterval(timer)
// })


// let start = document.querySelector('.start')
// let end = document.querySelector('.end')
// let setTimeId
// start.addEventListener('click', () => {
//   setTimeId = setTimeout(() => {
//     console.log('hello Vishal')
//   }, 5000)
// })

// end.addEventListener('click', () => {
//   clearTimeout(setTimeId)
// })

// setTimeout(callbackfunction,delay)
//id
//clearTimeout
// let setTimeid=setTimeout(()=>{
//     console.log('hello vishal')
// },3000)

// setTimeout(() => {
//   alert('tell me you name')
// }, 5000)

// let clearId;
// start.addEventListener('click',()=>{
// let count = 0
// clearId = setInterval(() => {
//   count++
//   console.log(count)
// }, 1000)
// })

// end.addEventListener('click',()=>{
//     clearInterval(clearId)
// })

// // clearInterval(clearId)
// let setCount=function(){
// console.log('hello')
// }

// console.log(setCount)

// let id=setInterval(()=>{
//     console.log('hello')
// },1000)

// clearInterval(id)
let start = document.querySelector('.start')
let end = document.querySelector('.end')
let reset = document.querySelector('.reset')
// let end = document.querySelector('.end')
let second = 0
let minute = 0
let hour = 0
// let day=0;
let timerId;
start.addEventListener('click',()=>{
   timerId=setInterval(() => {
     second++
     if (second >= 60) {
       minute++
       second = 0
     }
     if (minute >= 60) {
       hour++
       minute = 0
     }
     // if(hour>=24){
     //     day++
     //     hour=0
     // }

     // console.log("second",second)
     // console.log("minute",minute)
     // console.log('hour',hour)
     if (second < 10) {
       seconds.innerText = `0${second}`
     } else {
       seconds.innerText = second
     }
     if (minute < 10) {
       minutes.innerText = `0${minute}`
     } else {
       minutes.innerText = minute
     }
     if (hour < 10) {
       hours.innerText = `0${hour}`
     } else {
       hours.innerText = hour
     }
   }, 1000)

})

end.addEventListener('click',()=>{
    
    clearInterval(timerId)
})

reset.addEventListener('click',()=>{
    alert('Reset 00:00:00')

    second = 0
    minute = 0
    hour = 0
    timerId.refresh();
    timerId.setInterval(() => {
        second = 0
    minute = 0
    hour = 0
    }, 2000);
})