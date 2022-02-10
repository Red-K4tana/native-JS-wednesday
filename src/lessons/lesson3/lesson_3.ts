import {log} from "util";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let porom = new Promise(( resolve, reject) => {
//     // Симулируем запрос
//     setTimeout((response) => {
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body);
//         } else {
//             reject(response.error);
//         }
//     }, 200, { HTTPstatus: 200, body: { data: 'success' }, error: '' });
// });
//
// porom
//     .then((res: any) => {
//         console.log(res);
//         return 2;
//     })
//     .then((res2) => {
//         console.log(res2);
//     });


// let userDataProm = new Promise(( resolve, reject) => {
//     // Симулируем запрос
//     setTimeout((response) => {
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body.access_token);
//         } else {
//             reject(response.error);
//         }
//     }, 1000, { HTTPstatus: 200, body: { access_token: 'sfmghsjg,jsdbfjsdahfy32t437gu7t263rtgefgv' }, error: '' });
// });
//
// userDataProm
//     .then((token) => {
//         console.log('token ', token);
//         // www.google.com/it-incubator/courses/2?access_token=token
//         return new Promise((res, rej) => {
//             setTimeout((response) => {
//                 if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//                     res({body: response.body, token});
//                 } else {
//                     rej(response.error);
//                 }
//             }, 1000, { HTTPstatus: 200, body: { courceName: 'Promise', videoLink: 'some URL'}, error: '' });
//         });
//     })
//     .then( res => {
//         console.log(res);
//     });
//
// console.log(userDataProm);


// let userDataProm = new Promise(( resolve, reject) => {
//     // Симулируем запрос
//     setTimeout((response) => {
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body.access_token);
//         } else {
//             reject(response.error);
//         }
//     }, 1000, { HTTPstatus: 404, body: {}, error: 'Bad request' });
// });
//
// userDataProm
//     .then(token => {
//         console.log('token ', token);
//         // www.google.com/it-incubator/courses/2?access_token=token
//         return new Promise((res, rej) => {
//             setTimeout((response) => {
//                 if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//                     res({body: response.body, token});
//                 } else {
//                     rej(response.error);
//                 }
//             }, 1000, { HTTPstatus: 200, body: { courceName: 'Promise', videoLink: 'some URL'}, error: '' });
//         });
//     }, err => {
//         console.log('err ', err);
//         return { HTTPstatus: 200, body: { courceName: 'Intro', videoLink: 'some URL'}, error: '' };
//     })
//     .then( res => {
//         console.log(res);
//     }, err => {
//         console.log('err ', err);
//         return { HTTPstatus: 200, body: { courceName: 'Intro', videoLink: 'some URL'}, error: '' };
//     });
//
// console.log(userDataProm);


// let prom = new Promise( (res, reg) => {
//     res();
// })
//
// prom
//     .then(res => {
//         throw 0;
//     }, err => {
//         console.log('err',err)
//     })
//     .then(res => {}, err2 => {
//         console.log('err2',err2)
//     })
//     .then(res => {
//         console.log('res3', res)
//     });

// let prom = new Promise( (res, reg) => {
//     reg(500);
// })
//
// prom
//     .then(res => {
//         throw 0;
//     }, err => {
//         console.log('err',err)
//         throw 1000
//     })
//     .then(res => {
//
//     }, err2 => {
//         console.log('err2',err2)
//     })
//     .then(res => {
//         console.log('res3', res)
//     });

// let prom = new Promise( (res, reg) => {
//     reg(500);
// })
//
// prom
//     .then(res => {
//         throw 0;
//     })
//     .then(res => {
//
//     })
//     .then(res => {
//         console.log('res3', res)
//     }, err3 => {
//         console.log('err3',err3)
//     });

// Promise.resolve(1).then(console.log)
// Promise.reject(0).then(console.log, console.log)

// Promise.resolve(10)
//     .then(res => {
//         console.log('res ', res);
//         return res * 2;
//     })
//     .catch(err => {
//         console.log('err ', err);
//         return 'Hellow world'
//     })
//     .then(
//         res => {
//             console.log('res ', res);
//             return res * 2;
//         }
//     )
//     .catch(err => {
//         console.log('err ', err);
//         return 'Hellow world'
//     })
//     .then(res => {
//         console.log('res ', res);
//         throw 0
//     })
//     .catch(err => {
//         console.log('err ', err);
//         return 'Hellow world'
//     })
//     .then(console.log)
//     .then(null, err => console.log(err));

// Promise.resolve(10)
//     .finally( () => {
//         throw 500
//     })
//     .then(res => {
//         console.log('res ', res);
//         return res * 2;
//     })
//     .then(res => {
//         console.log('res ', res);
//         return res * 2;
//     })
//     .catch(err => {
//         console.log('err ', err);
//         return 'Hellow world'
//     })


// Promise.resolve(10)
//     .then(res => {
//         console.log('res ', res);
//         return res * 2;
//     })
//     .finally( () => {
//         throw 500
//     })
//     .then(res => {
//         console.log('res ', res);
//         return res * 2;
//     })
//     .catch(err => {
//         console.log('err ', err);
//         return 'Hellow world'
//     })

console.log('start')
Promise.resolve(10).then(console.log);
//setInterval(console.log, 100, 'Yo');
Promise.reject(0).catch(console.log);
let i = 0;
while (i < 5000000000) {
    i++
}
console.log('end')


// setTimeout(console.log, 1000, 5000);
// just a plug
export default () => {
};