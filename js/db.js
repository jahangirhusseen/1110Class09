// const student =[             
//     {
//         'id'        : 1,
//         'name'      : 'Ahsan',
//         'age'       : 10,
//         'class'     :5,
//         'result'    :'A+'
//     },
//     {
//         'id'        : 2,
//         'name'      : 'Babu',
//         'age'       : 11,
//         'class'     :5,
//         'result'    :'A'
//     },
//     {
//         'id'        : 3,
//         'name'      : 'Safwan',
//         'age'       : 10,
//         'class'     :5,
//         'result'    :'A+'
//     }
// ];
// console.log(typeof student);
// console.log(student);
// let stdinfo = JSON.stringify(student);
// console.log(typeof stdinfo);
// console.log(stdinfo);
// console.log(JSON.parse(stdinfo));
// console.log(typeof stdinfo);


// const devs = [
//    {
//     'id'    : 1,
//     'name'  : 'Amin',
//     'skill' : 'Java'
//    },
//    {
//     'id'    : 2,
//     'name'  : 'Tabib',
//     'skill' : 'PhP'
//    }
// ];
// console.log(devs);

// const number = [
//     {
//     'name' : 'MH',
//     'Phone' : '01714',
//     },
//     {
//         'name' : 'md',
//         'Phone' : '01990',
//     }
// ];
// console.log(number);

// let adddata = [devs,number,student];
// console.log(JSON.stringify(adddata));

// let d = 'Jahangir';

// console.log(d);
// localStorage.setItem('d',d); 
// let td = localStorage.getItem('d');
// // alert(td)
// // local Storage Data;
// let lsDataSent =JSON.stringify([devs,number,student]);
// console.log(lsDataSent);

// localStorage.setItem('devs',lsDataSent)
// // alert(localStorage.getItem('devs'));

// let tname = 'Amar Name';
// localStorage.setItem('tname', 'abdullha');

// console.log('hi');
// console.info('hi');
// console.warn('hi');
// console.error('hi');
// console.debug('hi');

let a =5;
try {
  if( a < 6){
      throw(` a is l/ G number`)
  }
}catch(err){
    console.error(err);
}