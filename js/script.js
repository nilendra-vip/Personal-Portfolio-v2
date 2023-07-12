// ==========================Toggler=======================

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", function(){
    document.querySelector(".style-switcher").classList.toggle("open");
})



// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}


// Theme light and dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");

})
window.addEventListener("load",() =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})





// Text animation
var typed = new Typed(".homePageTyping , .aboutPageTyping",{
    strings:["Front-End Developer ^500","Back-End Developer ^500","UI Designer ^500", "Freelancer ^500"],
    typeSpeed:10,
    loop:true
})
var typed = new Typed(".aboutPageTyping",{
    strings:["Front-End Developer ^500","Back-End Developer ^500","UI Designer ^500", "Freelancer ^500"],
    typeSpeed:10,
    loop:true
})


// Aside Navbar
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(var i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection();
            for(var j=0;j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for(var i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }

    function showSection(element){
        for(var i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    function updateNav(element){
        for(var i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(var i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }





    function projects(){
        var project=[
            {image:"./images/project/project-1.jpg", projectLink:'https://nilendra-vip.github.io/Personal-Portfolio-v3/'},
            {image:"./images/project/project-2.jpg", projectLink:'https://nilendra-vip.github.io/rly-network/'},
            {image:"./images/project/project-3.jpg", projectLink:'https://nilendra-vip.github.io/ribantcreativeoffice/'},
            {image:"./images/project/project-4.jpg", projectLink:'https://nilendra-vip.github.io/neverland/'},
            {image:"./images/project/project-5.jpg", projectLink:'https://nilendra-vip.github.io/postevand/'},
            {image:"./images/project/project-6.jpg", projectLink:'https://nilendra-vip.github.io/burger-fast-food/'},
            {image:"./images/project/project-7.jpg", projectLink:'https://nilendra-vip.github.io/benjaminrighetti/'},
            {image:"./images/project/project-8.jpg", projectLink:'https://nilendra-vip.github.io/Personal-Portfolio-v1/'},
            {image:"./images/project/project-9.jpg", projectLink:'https://nilendra-vip.github.io/thisisdigital/'},
        ]
        
        var clutter="";
        project.forEach(function(data){
            clutter +=`<div class="project-item padd-15">
                            <div class="project-item-inner shodow-dark">
                                <div class="project-img">
                                    <img src="${data.image}" alt="">
                                    <a href=${data.projectLink} target="_blank"><button>View Project</button></a>
                                </div>
                            </div>
                        </div>`
        })
        document.querySelector(".project .container .clutter ").innerHTML=clutter;
    }
    projects();
    router.post('/register', function(req,res, next){
      var data = new userModel({
        username:req.body.username
      })
      userModel.register(data,req.body.password)
        .then(function(registereduser){
          passport.authenticate('local')(req,res , function(){
            res.redirect('/userprofile')
          })
        })
        .catch(function(e){
          res.send(e);
        })
    })