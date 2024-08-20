let addBar = document.getElementById('manual_btn');
let cancelBar = document.querySelector('#manu-cancel');
let leftSearchIcon = document.querySelector('.left-search-icon');
let SearchCancel = document.querySelector('#search-cencel');

addBar.addEventListener('click',()=>{
    console.log("click")
    let add = document.getElementById('first');
    add.classList.add('sideVar');
});

cancelBar.addEventListener('click',()=>{
    console.log("click")
    let add = document.getElementById('first');
    add.classList.remove('sideVar');
});

leftSearchIcon.addEventListener('click',()=>{
    document.getElementById('newSearchBtn').style.top = "0"
    document.getElementById('newlogo').style.display = "none"
});

SearchCancel.addEventListener('click',()=>{
    console.log("click")
    document.getElementById('newSearchBtn').style.transition = "all 0.5s"
    document.getElementById('newSearchBtn').style.top = "-20rem"
    document.getElementById('newlogo').style.display = "flex"
})