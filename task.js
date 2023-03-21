//task1
var num=[2,4,7,8,18,12];
let sum=0;
let count=0;
for (let index = 0; index < num.length; index++) {
    if ( num[index]%3==0) {
    sum+=num[index];
}
if( num[index]%3==0) {count++;}
}
console.log(sum/count)
//task2
var num=[1,4,14,24,8,99];
let sum1=0;
for (let index = 0; index < num.length; index++) {
   if (num[index]>9 && num[index]<100) {
           sum1+=num[index]
   }
}
console.log(sum1)
//task3
var num=[1,4,14,24,8,99];
let max=num[0];
let min=num[0];
for (let index = 0; index < num.length; index++) {
    if (num[index]>max) {
        max=num[index]
    }
    if (num[index]<min) {
        min=num[index]
        
    }
    
}
console.log((max+min)/2)
//task4
var name=["Aynur","Ayan","Aytac","Punhan","Nermin"];
var count1=0;
for (let index = 0; index < name.length; index++) {
    if (name[index][0]=='A') {
        count1++
    }
    
}
console.log(count1)
//task5
let employees=[
    {
    firstName:"Punhan",
    lastName:"Aliyeva",
    salary:2000
    },
    {
    firstName:"Aynur",
    lastName:"Sekerova",
    salary:2000
    },
    {
    firstName:"Nermin",
    lastName:"Velizade",
    salary:2000
    },
    {
    firstName:"Rena",
    lastName:"Sultanova",
    salary:200
    },
    {
    firstName:"Ayan",
    lastName:"Mehdiyeva",
    salary:499
    },
    {
    firstName:"Sevil",
    lastName:"Axundova",
    salary:300
    }
    ]
    for(let index=0;index<employees.length;index++){
        if(employees[index].salary>500){
            console.log(employees[index].firstName+" "+employees[index].lastName)
        }
    }
