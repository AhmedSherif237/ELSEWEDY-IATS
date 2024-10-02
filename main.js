let hamburgerIcon = document.getElementById("hamburgerIcon");
let navItems = document.getElementById("navItems");
let hamburgerControl = false;

function showMenu(){
    const navItems = document.getElementById('navItems');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    
    if (!hamburgerControl){
       hamburgerIcon.firstElementChild.className = "fa-solid fa-times";
       navItems.classList.add('show');
       hamburgerControl = true;
    } else {
       hamburgerIcon.firstElementChild.className = "fa-solid fa-bars";
       navItems.classList.remove('show');
       hamburgerControl = false;
    }
 }

   // Event listener for the apply link
   document.getElementById("apply-link").addEventListener("click", function(event) {
     event.preventDefault(); // Prevent default link behavior
     document.getElementById("modal").style.display = "flex"; // Show the modal only when clicked
   });
 
   // Event listener for the close button
   document.getElementById("close-btn").addEventListener("click", function() {
     document.getElementById("modal").style.display = "none"; // Hide the modal when close button is clicked
   });

 // FAQ

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});


// التعامل مع زر عرض المزيد/عرض أقل
document.getElementById("toggleAchievements").addEventListener("click", function (e) {
  e.preventDefault();
  
  const moreAchievements = document.querySelectorAll(".more-achievements");
  const showMoreButton = document.getElementById("toggleAchievements");
  
  moreAchievements.forEach(function(achievement) {
    if (achievement.style.display === "none" || achievement.style.display === "") {
      achievement.style.display = "block"; 
      showMoreButton.textContent = "عرض أقل"; 
    } else {
      achievement.style.display = "none"; 
      showMoreButton.textContent = "عرض المزيد"; 
    }
  });
});


window.onscroll = function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show"); 
  } else {
    scrollToTopBtn.classList.remove("show");  
  }
};

// التمرير إلى الأعلى عند النقر على الزر
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


window.onload = function() {
  // تعطيل التمرير أثناء عرض شاشة التحميل
  document.body.style.overflow = 'hidden';

  setTimeout(function() {
    // إخفاء شاشة التحميل مع تأثير التلاشي
    const loadingScreen = document.getElementById("loading");
    loadingScreen.style.animation = "fadeOut 0.5s forwards"; 

    setTimeout(function() {
      loadingScreen.style.display = "none"; 
      document.body.style.overflow = 'auto'; 
    }, 500); 
  }, 3000); 
};


