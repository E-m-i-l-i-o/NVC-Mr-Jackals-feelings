class Player {
    constructor (){
        this.height = 3;
        this.width = 5;
        this.positionX = 50 - this.width/2;
        this.positionY = 10;

        this.domElement = null;

        this.createDomElement()
    }


    createDomElement(){
            // step1: create the element
                this.domElement = document.createElement('div');
            // step2: add content or modify (ex. innerHTML...)
                this.domElement.id = 'player';
                this.domElement.style.width = this.width + "vw" ;
                this.domElement.style.height = this.height + "vh";
                this.domElement.style.bottom = this.positionY + 'vh'; 
                this.domElement.style.left = this.positionX + "vw"; 


                 //step3: append to the dom: `parentElm.appendChild()`. By adding we are making the player visible
                const parentElm = document.getElementById("board");
                parentElm.appendChild(this.domElement);


    }

    moveLeft(){
        this.positionX= this.positionX - 1;
        this.domElement.style.left = this.positionX + 'vw';
    }
    moveRight(){
        this.positionX   =     this.positionX + 1;
        this.domElement.style.left   = this.positionX + 'vw';
    }
    moveUp (){
        this.positionY = this.positionY + 2;
        this.domElement.style.bottom = this.positionY + 'vh'
    }
    moveDown() {
        this.positionY = this.positionY - 2;
        this.domElement.style.bottom = this.positionY + "vh"
    }





}

const player = new Player();

// // attach event listeners...
// elm.addEventListener(nameOfEvent, code)
// consider switch case with breaks to express it nicely
document.addEventListener("keydown", (bananaEvent) => {
    
    if (bananaEvent.code === "ArrowLeft") {
      player.moveLeft();
    } else if (bananaEvent.code === "ArrowRight") {
      player.moveRight();
    } else if (bananaEvent.code === "ArrowUp") {
        player.moveUp();
    } else if (bananaEvent.code === "ArrowDown") {
        player.moveDown()
    }
  });
  

class Obstacles {
    
    constructor (){
        this.width = 10;
        this.height = 3; 
        this.positionX = Math.floor(Math.random()* 100 - this.width);
        this.positionY = 100;


        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
         // step1: create the element
         this.domElement = document.createElement('div');

         // step2: add content or modify (ex. innerHTML...)
         this.domElement.className = 'obstacle';
         this.domElement.style.width = this.width + 'vw';
         this.domElement.style.height = this.height + "vh";
         this.domElement.style.left = this.positionX +"vw";
         this.domElement.style.bottom = this.positionY + 'vh';
         this.domElement.style.backgroundColor = 'red'
         this.domElement.style.position = 'absolute'
 
         //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById('board') 
         parentElm.appendChild(this.domElement);
     }
     moveDown(){
         this.positionY--;
         this.domElement.style.bottom = this.positionY + "vh";

    }

}

//create new obstacles
const obstaclesArr = []; //outside so that it can be accessed from several siblings

setInterval(() => {
    const newObstacle = new Obstacles();
    obstaclesArr.push(newObstacle);
}, 3000);

// move those obstacles
setInterval(()=>{
    obstaclesArr.forEach((obstacleItem)=> {
        obstacleItem.moveDown();

        if (obstacleItem.positionX < player.positionX + player.width &&
            obstacleItem.positionX + obstacleItem.width > player.positionX &&  //we move a new element and we check if there is a collision all wihtin the same loop
            obstacleItem.positionY < player.positionY + player.height &&
            obstacleItem.height + obstacleItem.positionY > player.positionY) {
            console.log("game over my fren");
            location.href= 'game-over.html' //  send player to start again
            }
            //detect if obstacle needs to be removed once out of sight from the viewport. for that obstacle first needs to reach  the Y axis = 0 adn then we substract teh heigth of the obstacle, so taht it dissapears once we dont see it
            if (obstacleItem.positionY < 0 - obstacleItem.height) {
                //1. remove from the array of obstacles. we can use .shift in order to delete teh 1st element of our array (which is the first one reaching teh bottom of the viewport)
                    obstaclesArr.shift();


                //2. remove the obstacle elm from the dom with the .remove() method that we can use to this DOM element
                //teh obsctacle  we want to delete is in the instance 'obstacleItem' of the class 'Obstacle'. thats how we can accesss positionY, for example.
                //the DOM element of that obstacle is in the 'domElement'. now we can apply the remove() method to that.
                obstacleItem.domElement.remove()
}                          

    });

},200);





