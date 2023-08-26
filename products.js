
//scroll effect 
document.addEventListener('DOMContentLoaded', () => {
    function handleIntersection(entries, observer) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }, index * 500); 
        }
      });
    }
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    const sections = document.querySelectorAll('.details');
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  //popup message
  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
  
    popup.classList.add('active');
  
    window.addEventListener('click', (event) => {
      if (!popup.contains(event.target)) {
        popup.classList.remove('active');
      }
    });
  });
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
  }
  
  //toggle main menu
  let toggler = document.querySelector(".toggler");
   
  window.addEventListener("mouseover", event => {
    if(event.target.className == "toggler" || event.target.className == "toggle") {
      document.body.classList.toggle("show-nav");
    } else if (event.target.className == "overlay") {
      document.body.classList.remove("show-nav");
    }
  });  
  
  // function for hover icons
    document.addEventListener("DOMContentLoaded", function () {
      const menuIcons = document.querySelector('.menu-icons');
      const menu = document.querySelector('.menu');
  
      menuIcons.addEventListener('hover', () => {
        menu.classList.toggle('visible');
      });
  
      document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuIcons.contains(event.target)) {
          menu.classList.remove('visible');
        }
      });
    });
  //function for rating stars
      document.addEventListener('DOMContentLoaded', function() {
          const productItems = document.querySelectorAll('.details');
  
          productItems.forEach(productItem => {
              const starIcons = productItem.querySelectorAll('.star-icon');
  
              starIcons.forEach((star, index) => {
                  star.addEventListener('click', () => {
                      // Toggle the gold color for clicked star and previous stars
                      for (let i = 0; i <= index; i++) {
                          starIcons[i].style.color = 'rgb(255, 215, 0)';
                      }
                      
                      // Restore gray color for remaining stars
                      for (let i = index + 1; i < starIcons.length; i++) {
                          starIcons[i].style.color = 'rgb(234, 233, 230)';
                      }
                  });
              });
          });
      });
  
      document.addEventListener('DOMContentLoaded', () => {
        const products = document.querySelectorAll('.product');
    
        products.forEach((product) => {
            const iconsList = product.querySelector('.icons-list');
            const image = product.querySelector('img');
            const icons = iconsList.querySelectorAll('.icon');
    
            let isHovered = false;
            let isRotated = false;
    
            const resetIconStyles = () => {
                iconsList.classList.remove('show');
                icons.forEach((icon) => {
                    icon.style.opacity = '0';
                    icon.style.transform = 'rotate(180deg)'; // Reset rotation
                });
            };
    
            const rotateIcons = () => {
                if (isHovered && !isRotated) {
                    isRotated = true;
                    icons.forEach((icon) => {
                        icon.style.opacity = '1';
                        icon.style.transform = 'rotate(0deg)'; // Rotate from 0 to 180 degrees
                    });
                }
            };
    
            product.addEventListener('mouseover', () => {
                if (!isHovered) {
                    isHovered = true;
                    isRotated = false;
                    iconsList.classList.add('show');
                    rotateIcons();
                }
            });
    
            product.addEventListener('mouseout', () => {
                if (isHovered && !isRotated) {
                    resetIconStyles();
                }
            });
    
            image.addEventListener('mouseover', () => {
                if (!isHovered) {
                    isHovered = true;
                    isRotated = false;
                    iconsList.classList.add('show');
                    rotateIcons();
                }
            });
    
            image.addEventListener('mouseout', () => {
                if (isHovered && !isRotated) {
                    resetIconStyles();
                }
            });
        });
    });
  
  
    //popup cart function
    document.addEventListener("DOMContentLoaded", function () {
      const shoppingBagIcons = document.querySelectorAll(".fas.fa-shopping-bag");
      const popupCart = document.getElementById("popup-cart");
      const closeCartButton = document.getElementById("close-cart");
      const cartItemsList = document.getElementById("cart-items");
      const btnRemoveAll = document.getElementById("btn-remove-all");
      const btnGoToCart = document.getElementById("btn-go-to-cart");
  
      shoppingBagIcons.forEach(function (icon) {
          icon.addEventListener("click", function () {
              const productItem = icon.closest(".details");
              const productTitle = productItem.querySelector(".title").textContent;
              const productImageSrc = productItem.querySelector(".product img").src;
              const productPrice = productItem.querySelector(".price").textContent;
  
              const cartItem = document.createElement("li");
              cartItem.classList.add("cart-item");
              cartItem.innerHTML = `
                  <div class="cart-item-details">
                      <img src="${productImageSrc}" alt="${productTitle}">
                      <div class="cart-item-info">
                          <div class="cart-item-title">${productTitle}</div>
                          <div class="cart-item-price">${productPrice}</div>
                      </div>
                  </div>
                  <button class="btn-remove" data-title="${productTitle}">Remove</button>
              `;
              cartItemsList.appendChild(cartItem);
  
              popupCart.style.display = "block";
          });
      });
  
      closeCartButton.addEventListener("click", function () {
          popupCart.style.display = "none";
      });
  
      cartItemsList.addEventListener("click", function (event) {
          if (event.target.classList.contains("btn-remove")) {
              const itemTitle = event.target.getAttribute("data-title");
              const cartItem = event.target.closest(".cart-item");
              cartItemsList.removeChild(cartItem);
          }
      });
  
      btnRemoveAll.addEventListener("click", function () {
          while (cartItemsList.firstChild) {
              cartItemsList.removeChild(cartItemsList.firstChild);
          }
      });
  
      btnGoToCart.addEventListener("click", function () {
      });
  });
  