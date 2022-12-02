// let post = [
//     { title: "post one", body: "one" },
//     { title: "post one", body: "one" }
// ]

// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         for (let i = 0; i < post.length; i++) {
//             output += `<li>${post[i].title}</li>`
//         }
//         document.body.innerHTML = output;
//     }, 1000)
// }


// function creatPost(obj) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             post.push(obj)
//             let error = false;
//             if (!error) {
//                 resolve("done");
//             } else {
//                 reject("try again");
//             }
//         }, 2000)
//     })
// }
// creatPost({ title: "post three", body: "three" })
//     .then(() => getPost())
//     .catch((a) => console.log(a));



// function deletePost(arr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (arr.length <= 0) {
//                 reject("arr is empty");
//             } else {
//                 resolve(arr)
//             }
//         }, 1000)
//     })
// }
// deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
// deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
// deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
// deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))


// by creating 4th post delete thia after 1 second;            //important lines..
// creatPost({ title: "post four", body: "four" }).then(() => {
//     getPost(),
//     deletePost(post).then((b) => b.pop()).catch((a) => console.log(a)).then(() => getPost())
// }).catch((a)=>(console.log(a)))

// creatPost({ title: "post four", body: "four" }).then(()=>getPost)

// // promise all
// let p1 = Promise.resolve("hello")
// let p2 = 10;
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "world")
// })
// let p4 = Promise.resolve(new Date())

// Promise.all([p1, p2, p3,p4]).then((a) => console.log(a))


// one by one
// function print(text, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.innerHTML += `<li>${text}</li>`;
//             if (text) {
//                 resolve()
//             } else {
//                 reject()
//             }
//         }, time)
//     })
// }
// print("heloo", 1000)
//     .then(() => print("world", 1000))
//     .then(() => print("hii", 1000))
//     .then(() => print("hii", 2000))
//     .then(() => print("hii", 1000))



// console.log("p1: show ticket");
// console.log("p2: show ticket");
// let bringTicket = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },1000)
// })

// let getPopcorn = bringTicket.then((a)=>{
//         console.log(`wife: i have a ${a}`)
//         console.log("husband: we shoul go in")
//         console.log("wife: i am hungry")
//     return new Promise((resolve,reject)=>{resolve(`${a} popcorn`)})
// })
//   let getButter = getPopcorn.then((a)=>{
//     console.log(`husand: i got some popcorn`)
//     console.log("husband: we shoul go in")
//     console.log("wife: i need butter")
//     return new Promise((resolve,reject)=>{resolve(`${a} butter`)})
//   })
//   let getColdDrinks = getButter.then((a)=>{
//         console.log(`husand: i got some butter`)
//         return new Promise((resolve,reject)=>{resolve(`${a} coldDrink`)})
//   })

//  let ticket = getColdDrinks.then((a)=>{
//     console.log(`husband: i got coldDrink`)
//     console.log("husband: anythin else")
//     console.log("wife: lets go")
//     return new Promise((resolve,reject)=>{resolve(`${a} `)})
//   })

//   ticket.then((a)=>console.log(a))
// console.log("p4: show ticket");



// async function ;     write async before function then func convert into async function
// let getSync = async()=>"khan";
// getSync().then((a)=>console.log(a))




// using async
// console.log("p1: show ticket");
// console.log("p2: show ticket");
// let premovie = async()=>{
//     let bringTicket = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("ticket");
//             },2000);
//         })
//   let getPopcorn = new Promise((resolve,reject)=>resolve("popcorn"))
//   let getButter = new Promise((resolve,reject)=>resolve("butter"))
//   let getColdDrinks =  new Promise((resolve,reject)=>resolve("coldDrink"))
//     let ticket = await bringTicket;

//         console.log(`wife: i have a ${ticket}`)
//         console.log("husband: we shoul go in")
//         console.log("wife: i am hungry")
//     let popcorn = await getPopcorn;

//     console.log(`husand: i got some ${popcorn}`)
//     console.log("husband: we shoul go in")
//     console.log("wife: i need butter")

//     let butter = await getButter;
//     console.log(`husand: i got some ${butter}`)

//     let coldDrink = await getColdDrinks;
//     console.log(`husband: i got ${coldDrink}`)
//     console.log("husband: anythin else")
//     console.log("wife: lets go")
    
//  return ticket
// };
// premovie().then((a)=>console.log(a));
// console.log("p4: show ticket");




// promise all;
// console.log("p1: show ticket");
// console.log("p2: show ticket");
// let premovie = async()=>{
//     let bringTicket = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("ticket");
//             },2000);
//         })
//   let getPopcorn = new Promise((resolve,reject)=>resolve("popcorn"))
//   let getButter = new Promise((resolve,reject)=>resolve("butter"))
//   let getColdDrinks =  new Promise((resolve,reject)=>resolve("coldDrink"))
//     let ticket = await bringTicket;

    
//     let [popcorn,butter,coldDrink] = await Promise.all([getPopcorn,getButter,getColdDrinks])
//     console.log(`${popcorn} ${butter} ${coldDrink}`)
//  return ticket
// };
// premovie().then((a)=>console.log(a));
// console.log("p4: show ticket");



// try.....
// console.log("p1: show ticket");
// console.log("p2: show ticket");
// let premovie = async()=>{
//     let bringTicket = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 reject("ticket");
//             },2000);
//         })
//           let ticket;
//         try{
//              ticket = await bringTicket;
//         }catch(e){
//              ticket = "sad face"
//         }
    
//     return ticket
// };
// premovie().then((a)=>console.log(a));
// console.log("p4: show ticket");



let post = [
        { title: "post one", body: "one" },
        { title: "post one", body: "one" }
    ]
    
    function getPost() {
        setTimeout(() => {
            let output = '';
            for (let i = 0; i < post.length; i++) {
                output += `<li>${post[i].title}</li>`
            }
            document.body.innerHTML = output;
        }, 1000)
    }
    
    
     async function creatPost(obj) {
          let cpost = await new Promise((resolve, reject) => {
            setTimeout(() => {
                post.push(obj)
                let error = false;
                if (!error) {
                    resolve("done");
                } else {
                    reject("try again");
                }
            }, 2000)
        })
    
     }
    // creatPost({ title: "post three", body: "three" })
    //     .then(() => getPost())
    //     .catch((a) => console.log(a));
    
    
    // creatPost()
    
    async function deletePost(arr) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (arr.length <= 0) {
                    reject("arr is empty");
                } else {
                    resolve(arr)
                }
            }, 1000)
        })
    }
    // deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
    // deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
    // deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
    // deletePost(post).then((b)=>b.pop()).catch((a)=>console.log(a))
    
    
    // by creating 4th post delete thia after 1 second;            //important lines..
    creatPost({ title: "post four", body: "four" }).then(() => {
        getPost(),
        deletePost(post).then((b) => b.pop()).catch((a) => console.log(a)).then(() => getPost())
    }).catch((a)=>(console.log(a)))
    
    // creatPost({ title: "post four", body: "four" }).then(()=>getPost)
    