document.querySelector("#main i").addEventListener("click", function(){
    document.querySelector("#main").style.transform = "rotate(-50deg)"
    document.querySelector("#main1 #content").style.transform = "skewY(0deg)";
    document.querySelector("#main1 #me").style.transform = "translate(0%, -50%)";
    document.querySelector("#main1 #me").style.boxShadow = "0px 0px 15px black";
    document.querySelector("#main").style.position = "absolute";
})

document.querySelector("#main1 #close").addEventListener("click", function(){
    document.querySelector("#main").style.transform = "rotate(0deg)"
    document.querySelector("#main1 #content").style.transform = "skewY(-10deg)";
    document.querySelector("#main1 #me").style.transform = "translate(0%, -50%) skewY(10deg)";
    document.querySelector("#main1 #me").style.boxShadow = "10px 10px 30px black";
    document.querySelector("#main").style.position = "fixed";
})

gsap.to("#main4 #left #project img", {
    scrollTrigger : {
        trigger : "#main4",
        start : "center center",
        scrub : 2,
        pin : true,
    },
    y : -100
})