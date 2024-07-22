let t1 = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}


t1.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})
t1.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})

t1.from(".left img,#navbar,.btn",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.3
})

t1.from(".container h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
t1.from(".container>img",{
    scale:0,
    opacity:0,
    stagger:0.3

})
t1.from("h5",{
    scale:0,
    opacity:0
})
t1.to("h5",{
    y:40,
    repeat:-1,
    yoyo:true,
    duration:1
})



