let divitem = document.getElementById("contenido");

function act(){
    let currentdate = new Date(); 
    let datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    divitem.innerText = datetime
}

act()
setInterval(() => {
    act()
}, 1000); 