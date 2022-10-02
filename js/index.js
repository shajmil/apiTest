
async function getRandomUser ( ) {
    // const fetc =require('node-fetch')
    const response= await  fetch("https://randomuser.me/api/")
  const data = await response.json()
  let user = data.results;
  let ran=user[0].picture.large;
  let name = user[0].name;
  let mail = user[0].email;
name=Object.values(name);
image=user[0].picture.large;
localStorage.setItem("picture", image);
name= name.toString();
name=name.replaceAll(',',' ');
logname.value=name;
signlogemail.value=mail;
console.log('mail: ', mail);
 console.log(user);
 let address  = user[0].location
 let [,city,state,country,...a]= Object.values(address);
address=city + ' '+state +' '+ country;
console.log('address: ', address);
logaddress.value=address;
// console.log(user[0].phone);
logphone.value=user[0].phone;

//   console.log(ran);

//   let img=document.getElementById('ran');

//   let nameDis=document.getElementById('name');
//   nameDis.innerHTML=name;
//   img.src=ran;
//   console.log(img);
// console.log(name);
// console.log(`hiiiiiiiiiiiiiiii `);
  } 

 

function login(){
    window.location='dash.html'
    username=logname.value;
    email=signlogemail.value;
    address=logaddress.value;
    phone=logphone.value;
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('username',username);
   

}

