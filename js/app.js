const student = [
    {
        id      :    01,
        name    :  "Al Amin",
        fName   :  "Nazmul ",
        result  :   "PASSED",
        Cgpa    :   "3.5",
        grade   :   "A-"
    },
    {
        id      :    02,
        name    :  "Basit",
        fName   :  "Abdul Talif ",
        result  :   "PASSED",
        Cgpa    :   "4",
        grade   :   "A"
    },
    {
        id      :    03,
        name    :  "Kamran",
        fName   :  "Abdul haq ",
        result  :   "PASSED",
        Cgpa    :   "5",
        grade   :   "A+"
    },
    {
        id      :    04,
        name    :  "Nazrul",
        fName   :  "kabir",
        result  :   "PASSED",
        Cgpa    :   "3.5",
        grade   :   "A-"
    },
    {
        id      :    05,
        name    :  "joy",
        fName   :  "Ibrahim",
        result  :   "PASSED",
        Cgpa    :   "3",
        grade   :   "B"
    },
    {
        id      :    06,
        name    :  "Anisul Haq",
        fName   :  "Iqramul haq",
        result  :   "PASSED",
        Cgpa    :   "4",
        grade   :   "A"
    },
    {
        id      :    07,
        name    :  "sobuj",
        fName   :  "Arkan",
        result  :   "PASSED",
        Cgpa    :   "5",
        grade   :   "A+"
    },
    {
        id      :    08,
        name    :  "Roton",
        fName   :  "bilal",
        result  :   "PASSED",
        Cgpa    :   "3.5",
        grade   :   "A-"
    },
    {
        id      :    09,
        name    :  "Rumel",
        fName   :  "Helal",
        result  :   "PASSED",
        Cgpa    :   "3.5",
        grade   :   "A-"
    },
    {
        id      :    10,
        name    :  "Tahsan",
        fName   :  "kadir",
        result  :   "PASSED",
        Cgpa    :   "3.5",
        grade   :   "A-"
    }
]
let studentdata = JSON.stringify(student);
console.log(student);

const  phoneBook = [
    {
        name    : "Muktar",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Kawsar",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Kamran",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Basit",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Siraj",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Mahbub",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Abdul Malek",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Joy",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Sobuj",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    {
        name    : "Tamim",
        Phone   : "01712-124578",
        relation: "Friend"
    },
    
]
 let phoneBookdata = JSON.stringify(phoneBook);
console.log(phoneBook);

const  devsInfo = [
    {
        name    : "Kamrul",
        age     : 30,
        skill   : "MERN stack"
    },
    {
        name    : "Saydul",
        age     : 27,
        skill   : "Laravel"
    },
    {
        name    : "ISraq",
        age     : 28,
        skill   : "Django"
    },
    {
        name    : "Bulbul",
        age     : 25,
        skill   : "WordPress"
    },
    {
        name    : "Aziz",
        age     : 25,
        skill   : "java"
    }
]
let devsdata = JSON.stringify(devsInfo)
console.log(devsInfo);



console.log(studentdata);
console.log(phoneBookdata);
console.log(devsdata);



// json to a object 


let std_data = '[{"id":1,"name":"Al Amin","fName":"Nazmul ","result":"PASSED","Cgpa":"3.5","grade":"A-"},{"id":2,"name":"Basit","fName":"Abdul Talif ","result":"PASSED","Cgpa":"4","grade":"A"},{"id":3,"name":"Kamran","fName":"Abdul haq ","result":"PASSED","Cgpa":"5","grade":"A+"},{"id":4,"name":"Nazrul","fName":"kabir","result":"PASSED","Cgpa":"3.5","grade":"A-"},{"id":5,"name":"joy","fName":"Ibrahim","result":"PASSED","Cgpa":"3","grade":"B"},{"id":6,"name":"Anisul Haq","fName":"Iqramul haq","result":"PASSED","Cgpa":"4","grade":"A"},{"id":7,"name":"sobuj","fName":"Arkan","result":"PASSED","Cgpa":"5","grade":"A+"},{"id":8,"name":"Roton","fName":"bilal","result":"PASSED","Cgpa":"3.5","grade":"A-"},{"id":9,"name":"Rumel","fName":"Helal","result":"PASSED","Cgpa":"3.5","grade":"A-"},{"id":10,"name":"Tahsan","fName":"kadir","result":"PASSED","Cgpa":"3.5","grade":"A-"}]';




let pb_data = '[{"name":"Muktar","Phone":"01712-124578","relation":"Friend"},{"name":"Kawsar","Phone":"01712-124578","relation":"Friend"},{"name":"Kamran","Phone":"01712-124578","relation":"Friend"},{"name":"Basit","Phone":"01712-124578","relation":"Friend"},{"name":"Siraj","Phone":"01712-124578","relation":"Friend"},{"name":"Mahbub","Phone":"01712-124578","relation":"Friend"},{"name":"Abdul Malek","Phone":"01712-124578","relation":"Friend"},{"name":"Joy","Phone":"01712-124578","relation":"Friend"},{"name":"Sobuj","Phone":"01712-124578","relation":"Friend"},{"name":"Tamim","Phone":"01712-124578","relation":"Friend"}]';




let devsData = '[{"name":"Kamrul","age":30,"skill":"MERN stack"},{"name":"Saydul","age":27,"skill":"Laravel"},{"name":"ISraq","age":28,"skill":"Django"},{"name":"Bulbul","age":25,"skill":"WordPress"},{"name":"Aziz","age":25,"skill":"java"}]';


let alldata = [pb_data,std_data,devsData];
console.log(typeof alldata);
console.log(JSON.parse(alldata[2]));


let naam = "Jahangir";
let naam2 = "Hussen";
localStorage.setItem('Fast name',naam);
localStorage.setItem('Last name',naam2);


alert(localStorage.getItem('Fast name') + localStorage.getItem('Last name'));


console.log("Hi, I'm MREN Stack Developer");


// log info warn errors debug

// Errors handling
try {
    abc();
} catch (err) {
    console.log(err.message);
}