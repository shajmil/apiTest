username=localStorage.getItem('username')
email=localStorage.getItem('email');
address=localStorage.getItem('address');
phone=localStorage.getItem('phone');
Image=localStorage.getItem('picture');
pic=document.getElementById('pic');
user.innerHTML = `${username}`;
nam.innerHTML=username;
addres.innerHTML=address;
num.innerHTML=phone;
pic.src=Image;



function logout() {
    localStorage.removeItem('username');
    window.location='index.html';
}
