function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    
}


if (sidebar.classList.contains('active')) {
    hamburgerIcon.style.backgroundColor = 'rgb(157, 155, 155)'; 
    hamburgerIcon.style.color = '#fff'; 
} else {
    hamburgerIcon.style.backgroundColor = 'white'; 
    hamburgerIcon.style.color = '#333'; // 
}

let images = document.querySelectorAll('.slideshow img');
        let currentIndex = 0;

        function changeImage() {
            
            images[currentIndex].classList.remove('active');
            
            currentIndex = (currentIndex + 1) % images.length;
            
            images[currentIndex].classList.add('active');
        }


        setInterval(changeImage, 3000);

  
  

 
 