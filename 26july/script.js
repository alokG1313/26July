// // // todays coading session
// // // Objets and its methods

// // let obj = {
// //   name: "alok",
// //   firends: ["ankit", "hemant", "suraj"],
// //   batchNo: 15,
// //   isActive: true,
// //   address: {
// //     houseNo: 202,
// //     villageName: "patel nager",
// //     city: "Gurugram",
// //     state: "Haryana",
// //     pincode: 2001001,
// //   },
// // };

// // // console.log(obj);

// // // const {name, address} = obj;
// // // console.log('name from obj destructing', name)
// // // console.log('address from obj destructing', address)

// // // let obj2 = Object.entries(obj);
// // // console.log(obj2);

// // // let [first, second, third, fourth, fifth] = obj2;

// // // console.log('name from array destructring',first );
// // // console.log('friends from array destructring', second);

// // // console.log(obj2.map((item, index) => console.log(item + "=> " + index + 1)));

// // // let a = { name: 'hemant'}
// // // let b = { lastName: 'ji'}

// // // const fullName = Object.assign(a,b)

// // // console.log(fullName)

// // // const a = { fruitName: "Apple", fruitTaste: "sweet" , b: {
// // //     name: 'alok', lastName: 'ji'
// // // }};

// // // const objectName = Object.values(a);
// // // const objectKeys = Object.keys(a)

// // // console.log(objectName);
// // // console.log(objectKeys);

// // // let a = {name: 'hemant'};

// // // console.log(Object.create(a))
// // // console.log(a)

// // // let detailsObj = {
// // //   name: "hemant",
// // //   address: {
// // //     city: "Gurugram",
// // //     zipCode: 200202,
// // //   },
// // // };

// // // let shallowCopy = Object.assign({},detailsObj);
// // // // let shallowCopy = {...detailsObj}

// // // shallowCopy.name = 'alok';
// // // shallowCopy.address.city = 'Gorakhpur'

// // // console.log(detailsObj)
// // // console.log(shallowCopy)

// // // let deepCopy = structuredClone(detailsObj);

// // // deepCopy.name = 'alok';
// // // deepCopy.address.city = 'Gorakhpur';

// // // console.log(detailsObj)
// // // console.log(deepCopy)

// // const detailsObj = {
// //   name: "hemant",
// //   address: {
// //     city: "Gurugram",
// //     zipCode: 200202,
// //   },
// // };

// // // detailsObj.fullName = detailsObj.name
// // // delete detailsObj.name;

// // console.log(detailsObj)

// const arr = [1, 2, 3, 4, 5];

// console.log(
//   arr.map((items, index) => {
//     return index + 1 + ": " + items;
//   })
// );

// // function addValue(a, b) {
// //   return a + b;
// // }

// // console.log(addValue(5,7))


// function returnNameandDob(a, b) {
//   return a + b;
// }


// returnNameandDob(
// () => {
//   return "13Aug1999";
// }, 'hemant')

// const bodyElement = document.querySelector("#body");
// const heading = document.createElement("h1");
// heading.textContent = "Hello, World! Ankit Anand";
// bodyElement.appendChild(heading);