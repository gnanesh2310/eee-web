const trigger = document.querySelectorAll(' nav div ul li')
      trigger.forEach((menu) => menu.addEventListener('click',toggle));


      function toggle() {
        trigger.forEach((item) => item != this ? item.classList.remove('active') : null);

        if(this.classList != 'active'){
          this.classList.toggle('active')
        }
      }


document.addEventListener('DOMContentLoaded', function() {
        const loginButtonHomePage = document.getElementById('loginButtonHomePage');
        loginButtonHomePage.addEventListener('click', function() {
          window.location.href = 'PAGES/login.html';
        });
    });