let thecouch=document.querySelector("#couch")
let thebed=document.querySelector("#bed")
let thedesk=document.querySelector("#desk")

let couchbutton=document.querySelector("#couchpanel")
let deskbutton=document.querySelector("#deskpanel")
let bedbutton=document.querySelector("#bedpanel")
let colorbutton=document.querySelector("#colorpanel")
let smallerCouchButton = document.querySelector("#smallerCouchPanel")
let biggerCouchButton = document.querySelector("#biggerCouchPanel")
let smallerBedButton = document.querySelector("#smallerBedPanel")
let biggerBedButton = document.querySelector("#biggerBedPanel")
let smallerDeskButton = document.querySelector("#smallerDeskButton")
let biggerDeskButton = document.querySelector("#biggerDeskButton")

let wall1 = document.querySelector("#wall")
let wall2 = document.querySelector("#wall1")
let wall3 = document.querySelector("#wall2")
let wall4 = document.querySelector("#wall3")

//scale buttons (couch)
let scaleFactorC = 7

smallerCouchButton.addEventListener("click", e=>{
  let couch = document.querySelector("#couchObject")
  scaleFactorC = scaleFactorC * 0.5 
  couch.setAttribute("scale",`${scaleFactorC} ${scaleFactorC} ${scaleFactorC}`)
})

biggerCouchButton.addEventListener("click", e=> {
  let couch = document.querySelector("#couchObject")
  scaleFactorC = scaleFactorC * 2
  couch.setAttribute("scale", `${scaleFactorC} ${scaleFactorC} ${scaleFactorC}`)
})

//scale buttons (bed)
let scaleFactorB = 0.5

smallerBedButton.addEventListener("click", e=>{
  let bed = document.querySelector("#bedObject")
  scaleFactorB = scaleFactorB * 0.5
  bed.setAttribute("scale", `${scaleFactorB} ${scaleFactorB} ${scaleFactorB}`)
})

biggerBedButton.addEventListener("click", e=>{
  let bed = document.querySelector("#bedObject")
  scaleFactorB = scaleFactorB * 2
  bed.setAttribute("scale", `${scaleFactorB} ${scaleFactorB} ${scaleFactorB}`)
})

// couch buttons 
let rightCouchButton = document.querySelector("#rightcouchButton")
let leftCouchButton = document.querySelector("#leftcouchButton")
let downCouchButton = document.querySelector("#downcouchButton")
let upCouchButton = document.querySelector("#upcouchButton")

let xposC = -1.4
let zposC = 4.564

rightCouchButton.addEventListener("click", e=>{
  let couch = document.querySelector("#couchObject")
  xposC +=5
  couch.setAttribute("position",`${xposC} 12.46 ${zposC}`)
  
})

leftCouchButton.addEventListener("click", e=>{
  let couch = document.querySelector("#couchObject")
  xposC -=5
  couch.setAttribute("position",`${xposC} 12.46 ${zposC}`)
  
})

upCouchButton.addEventListener("click", e=>{
  let couch = document.querySelector("#couchObject")
  zposC += 5
  couch.setAttribute("position",`${xposC} 12.46 ${zposC}`)
  
})

downCouchButton.addEventListener("click", e=>{
  let couch = document.querySelector("#couchObject")
  zposC -=5
  couch.setAttribute("position",`${xposC} 12.46 ${zposC}`)
  
})

// bed buttons
let rightBedButton =  document.querySelector("#rightbedButton")
let leftBedButton = document.querySelector("#leftbedButton")
let upBedButton = document.querySelector("#upbedButton")
let downBedButton = document.querySelector("#downbedButton")

let xposB = 1.7
let zposB = 9.290
rightBedButton.addEventListener("click", e=>{
  let bed = document.querySelector("#bedObject")
  xposB +=5
  bed.setAttribute("position",`${xposB} 0.026 ${zposB}`)
  
})

leftBedButton.addEventListener("click", e=>{
  let bed = document.querySelector("#bedObject")
  xposB -=5
  bed.setAttribute("position",`${xposB} 0.026 ${zposB}`)
  
})
upBedButton.addEventListener("click", e=>{
  let bed = document.querySelector("#bedObject")
  zposB +=5
  bed.setAttribute("position",`${xposB} 0.026 ${zposB}`)
  
})
downBedButton.addEventListener("click", e=>{
  let bed = document.querySelector("#bedObject")
  zposB -=5
  bed.setAttribute("position",`${xposB} 0.026 ${zposB}`)
  
})

//desk buttons 
let rightDeskButton = document.querySelector("#rightdeskButton")
let leftDeskButton=document.querySelector("#leftdeskButton")
let upDeskButton = document.querySelector("#updeskButton")
let downDeskButton=document.querySelector("#downdeskButton")

let xposD = -11.5 
let zposD = 0.436

rightDeskButton.addEventListener("click", e=>{
  let desk = document.querySelector("#deskObject")
  xposD += 5
  desk.setAttribute("position", `${xposD} -0.01 ${zposD}`)
})

leftDeskButton.addEventListener("click" , e=>{
  let desk=document.querySelector("#deskObject")
  xposD -= 5
  desk.setAttribute("position", `${xposD} -0.01 ${zposD}`)
})

downDeskButton.addEventListener("click", e=>{
  let desk=document.querySelector("#deskObject")
  zposD -= 5
  desk.setAttribute("position", `${xposD} -0.01 ${zposD}`)
})

upDeskButton.addEventListener("click", e=>{
  let desk = document.querySelector("#deskObject")
  zposD += 5
  desk.setAttribute("position", `${xposD} -0.01 ${zposD}`)
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color)
  }
  return color;
}

colorbutton.addEventListener("click", e=>{
  wall1.setAttribute("color", getRandomColor());
  wall2.setAttribute("color", getRandomColor());
  wall3.setAttribute("color", getRandomColor());
  wall4.setAttribute("color", getRandomColor());
    
})

let couchSwitch = true
couchbutton.addEventListener("click", e=>{
    if (couchSwitch == true){
    thecouch.innerHTML = `<a-entity id="couchObject" gblock="https://poly.google.com/view/7Q_Ab2HLll1" scale="7 7 7" position="-1.46 12.46 4.564" rotation="0 90 0"></a-entity>`
    couchSwitch = false
    console.log("added couch")
    }else { 
    thecouch.innerHTML = ``
    couchSwitch = true 
    console.log(couchSwitch)
    }
})

let  deskSwitch = true
deskbutton.addEventListener("click", e=>{
    if (deskSwitch == true){
    thedesk.innerHTML = `<a-entity id="deskObject" gblock="https://poly.google.com/view/58zA8yry4qr" scale="5 5 5" position="-11.5 -0.01 0.436" rotation="0 90 0"></a-entity>`
    deskSwitch = false
    console.log("added desk")
    }else { 
    thedesk.innerHTML = ``
    deskSwitch = true 
    console.log(deskSwitch)
    }
})

let bedSwitch = true
bedbutton.addEventListener("click", e=>{
    if (bedSwitch == true){
    thebed.innerHTML = `<a-entity id="bedObject"  gblock="https://poly.google.com/view/8mkAgVYGbL4" scale="0.5 0.5 0.5" position="1.7 0 9.29"></a-entity>`
    bedSwitch = false
    console.log("added bed")
    }else { 
    thebed.innerHTML = ``
    bedSwitch = true 
    console.log(bedSwitch)
}
})









