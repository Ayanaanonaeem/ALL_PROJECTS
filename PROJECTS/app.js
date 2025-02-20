const arr=[
    {
       name:"applewebsite",
       link:"https://www.istockphoto.com/photo/modern-data-technology-center-server-racks-in-dark-room-with-vfx-visualization-gm1809659600-549163094?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftechnology-big-images&utm_medium=affiliate&utm_source=unsplash&utm_term=technology+big+images%3A%3Avideo-affiliates%3Acontrol",

    },
    {
       name:"applewebsite",
       link:"jajajja",

    },
    {
       name:"applewebsite",
       link:"jajajja",

    },
    {
       name:"applewebsite",
       link:"jajajja",

    },
    {
       name:"applewebsite",
       link:"jajajja",

    },
    {
       name:"applewebsite",
       link:"jajajja",

    },
   
]

var boxes=document.getElementsByClassName("box")
var container=document.getElementById("container")



arr.forEach((val,i)=>{
    let ele=`<div class="box">
            <a target="_blank" href=${arr[i].link}><h1>Pet care webiste</h1></a>
        </div>`
    container.innerHTML+=ele
})