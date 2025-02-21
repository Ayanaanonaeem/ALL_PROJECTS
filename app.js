const arr=[
    {
       name:"NETFLIX CLONE",
       link:"https://ayanaanonaeem.github.io/Netflix_Clone/",
       src:"https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"

    },
    {
       name:"QUIZ GAME",
       link:"https://ayanaanonaeem.github.io/Quiz_Game_Website/",
       src:"https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"


    },
    {
       name:"ROCK PAPER SCISSOR",
       link:"https://ayanaanonaeem.github.io/Rock_Paper_Scissors_Game/",

    },
    {
       name:"TIC TAC TOE",
       link:"https://ayanaanonaeem.github.io/Tic_Tac_Toe_Game/",

    },
    {
       name:"FAULTY SIGNUP PAGE",
       link:"https://ayanaanonaeem.github.io/Faulty_Sign_Up_Page/",

    },
    {
       name:"CUSION WEBSITE",
       link:"https://ayanaanonaeem.github.io/Cusion_Website/",

    },
    {
       name:"JEWELRY WEBSITE",
       link:"https://ayanaanonaeem.github.io/Jewelry_Website/",

    },
    {
       name:"PET CARE WEBSITE",
       link:"https://ayanaanonaeem.github.io/Pet-Care-Website/",

    },
    {
       name:"TECHNLOGY WEBSITE",
       link:"https://ayanaanonaeem.github.io/Solicitor-Website/",

    },
    {
       name:"BOOTSTRAP WEBSITE",
       link:"https://ayanaanonaeem.github.io/Bootstrap-Website/",

    },
    {
       name:"FORM WEBSITE",
       link:"https://ayanaanonaeem.github.io/Form-Website/",

    },
    {
       name:"FIGMA WEBSITE",
       link:"https://ayanaanonaeem.github.io/Figma-Website/",

    },
    {
       name:"GOOGLE CLASROOM CLONE",
       link:"https://ayanaanonaeem.github.io/Google-Classroom-Website/",

    },
    {
       name:"SCUBA DIVING WEBSITE",
       link:"https://ayanaanonaeem.github.io/ScubaDiving-Website/",

    },
    {
       name:"WHATSAPP WEB",
       link:"https://ayanaanonaeem.github.io/Whatsapp-Website/",

    },
   
]

var boxes=document.getElementsByClassName("box")
var container=document.getElementById("container")


arr.forEach((val,i)=>{
    let ele=`<div class="box">
            <a target="_blank" href=${arr[i].link}><h1>${arr[i].name}</h1></a>
        </div>`
      
        
      
    container.innerHTML+=ele
})
