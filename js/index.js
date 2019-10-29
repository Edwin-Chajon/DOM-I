const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Images
const bodyImage = document.getElementById('cta-img');
bodyImage.setAttribute ('src', siteContent['cta']['img-src'])

const headImage = document.getElementById('middle-img');
headImage.setAttribute ('src', siteContent ['main-content']['middle-img-src'])

// Button 
const press = document.querySelector('button');
press.textContent = siteContent.cta.button;

// Headers 
const aychOne = document.querySelector('h1');
aychOne.textContent = siteContent.cta.h1;

const contactTextH = document.querySelector('.contact h4');
contactTextH.textContent=siteContent.contact["contact-h4"];

let headerContent = document.querySelectorAll('.main-content .text-content h4')
headerContent[0].textContent = siteContent['main-content']['features-h4']
headerContent[1].textContent = siteContent['main-content']['about-h4']
headerContent[2].textContent = siteContent['main-content']['servies-h4']
headerContent[3].textContent = siteContent['main-content']['product-h4']
headerContent[4].textContent = siteContent['main-content']['vision-h4']

// Text
let textualContent = document.querySelectorAll('.main-content .text-content p')
textualContent[0].textContent = siteContent['main-content']['features-content'];
textualContent[1].textContent = siteContent['main-content']['about-content'];
textualContent[2].textContent = siteContent['main-content']['services-content'];
textualContent[3].textContent = siteContent['main-content']['product-content'];
textualContent[4].textContent = siteContent['main-content']['vision-content'];

let contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = siteContent.contact.address
contactContent[1].textContent = siteContent.contact.phone
contactContent[2].textContent = siteContent.contact.email

// Footer
const footers = document.querySelector('footer')
footers.textContent = siteContent.footer.copyright;

// Nav
let navigational = document.querySelectorAll('nav a')
navigational[0].textContent = siteContent['nav']['nav-item-0']
navigational[1].textContent = siteContent['nav']['nav-item-1']
navigational[2].textContent = siteContent['nav']['nav-item-2']
navigational[3].textContent = siteContent['nav']['nav-item-3']
navigational[4].textContent = siteContent['nav']['nav-item-4']