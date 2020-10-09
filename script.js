var script = document.getElementsByClassName('bar')
script[0].addEventListener('click',()=>{
  var li = document.getElementsByClassName('nav-ul');
  var nav_bar = document.getElementsByClassName('nav-bar')
  if(nav_bar[0].classList.contains('navhight')){
     nav_bar[0].classList.remove('navhight')
     li[0].classList.remove('showli')  
  }
  else{
     nav_bar[0].classList.add('navhight')
     li[0].classList.add('showli')
  }
})