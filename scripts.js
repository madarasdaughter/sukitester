function showProfile() {
    document.getElementById('profile').classList.add('active');
    document.getElementById('community').classList.remove('active');
    document.getElementById('swipe').classList.remove('active');
}

function showCommunity() {
    document.getElementById('community').classList.add('active');
    document.getElementById('profile').classList.remove('active');
    document.getElementById('swipe').classList.remove('active');
}

function showSwipe() {
    document.getElementById('swipe').classList.add('active');
    document.getElementById('profile').classList.remove('active');
    document.getElementById('community').classList.remove('active');
}

function saveProfile() {
    const name = document.getElementById('avatar-name').value;
    alert('Profile saved with name: ' + name);
}

function swipeLeft() {
    alert('Swiped Left!');
}

function swipeRight() {
    alert('Swiped Right!');
}// JavaScript Document