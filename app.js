let mci=document.querySelectorAll("div")
let hh=["mouseenter","mouseleave"]
hh.forEach((ew)=>{
    document.querySelector("main").addEventListener(ew,()=>{
        document.querySelector("main").classList.toggle("main-active")
        mci.forEach((e)=>{
            let myArr=e.classList.value.split(" ")
            e.classList.toggle(`${myArr[0]}-active`)
            })
        return 0;
    })
})