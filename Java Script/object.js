// let obj={
//     id:101,
//     Name:"abc",
//     address:()=>{
//         let city="bangalore";
//         let pincode=560010;
//         return '${city} ${pincode}'
//     }

// }

// console.log(obj.address());

// let obj1={
//     id:101,
//     Name:"abc",
//     address:function(){
//         return this.id;
//     }
// }

// console.log(obj1.address());

// let Ename="basya";
// let obj2={
//     id:101,
//     Name:"abc",
//     address:function(){
//         return this.Ename;

//     }
//     }

//     console.log(obj2.address());

    //math object
    console.log(Math.round(11.1));
    console.log(Math.cbrt(432.8));
    console.log(Math.floor(101.6));
    console.log(Math.sqrt(4));
    console.log(Math.random()*1000);
    console.log(Math.random()*10000);
    document.writeln(Math.ceil((Math.random()*10000)));
    let v1=Math.ceil(Math.random()*10000000).toString(26);
    console.log(v1);
    //h1
    let rad=Math.ceil(Math.random()*10000000).toString(26);
    h2=document.querySelector("h2");
    console.log(h2);
    h2.style.background='#${rad}';
    setTimeout(()=>{
    console.log("hello");
    },3000)
    setTimeout(()=>{
        console.log("hiii");
        },2000)
        setTimeout(()=>{
            console.log("bye");
            },3000)
            setTimeout(()=>{
                console.log("mava");
                },5000)
                setTimeout(()=>{
                    console.log("java");
                    },1000)
    let dt=new Date();
    console.log(dt);
    console.log(dt.getDate());
    console.log(dt.getFullYear());
    console.log(dt.getDay());
    console.log(dt.getMonth());
    console.log(dt.getMilliseconds());
    console.log(dt.getHours());
    console.log(dt.getMinutes());
    console.log(dt.getTime());
    console.log(dt.getTimezoneOffset());
    