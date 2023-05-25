const board = document.querySelector("#board")

class Player {
    constructor (){
        this.height = 12;
        this.width = 6;
        this.positionX = 94;
        this.positionY = 0;

        this.domElement = null;

        this.createDomElement()
    }


    createDomElement(){
            // step1: create the element
                this.domElement = document.createElement('div');
            // step2: add content or modify (ex. innerHTML...)
                this.domElement.id = 'player';


                // const newImage = document.createElement(img);
                //  newImage.setAttribute("src", "./images/playerGiraffe.png")
                //  this.domElement.style.backgroundImage = "url ("./images/playerGiraffe.png")";
                

                this.domElement.style.width = this.width + "vw" ;
                this.domElement.style.height = this.height + "vh";
                this.domElement.style.bottom = this.positionY + 'vh'; 
                this.domElement.style.left = this.positionX + "vw"; 


                 //step3: append to the dom: `parentElm.appendChild()`. By adding we are making the player visible
                const parentElm = document.getElementById("board");
                board.appendChild(this.domElement);


    }

    moveLeft(){
        this.positionX= this.positionX - 2;
        this.domElement.style.left = this.positionX + 'vw';
    }
    moveRight(){
        this.positionX   =     this.positionX + 2;
        this.domElement.style.left   = this.positionX + 'vw';
    }
    moveUp (){
        this.positionY = this.positionY + 3;
        this.domElement.style.bottom = this.positionY + 'vh'
    }
    moveDown() {
        this.positionY = this.positionY - 3;
        this.domElement.style.bottom = this.positionY + "vh"
    }





}

const player = new Player();

// // attach event listeners...
// elm.addEventListener(nameOfEvent, code)
// consider switch case with breaks to express it nicely
document.addEventListener("keydown", (bananaEvent) => {
    
    if (bananaEvent.code === "ArrowLeft") {
      if(player.positionX > 0) 
      player.moveLeft();
    } else if (bananaEvent.code === "ArrowRight") {
        if(player.positionX < 94)
      player.moveRight();
    } else if (bananaEvent.code === "ArrowUp") {
        if(player.positionY < 96) 
        player.moveUp();
    } else if (bananaEvent.code === "ArrowDown") {
        if(player.positionY > 0) 
        player.moveDown()
    }
  });

// *********************
// *********************
// ***obstacles 1  *****
// *********************
// *********************
class Obstacles {
    
    constructor (){
        this.width = 9;
        this.height = 5; 
        this.positionX = Math.floor(Math.random()* (100 - this.width));
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
         //this.domElement.style.backgroundColor = '#96070c'
         this.domElement.style.imageRendering
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
}, 6000);

// move those obstacles
setInterval(()=>{
    obstaclesArr.forEach((obstacleItem)=> {
        obstacleItem.moveDown();

        if (obstacleItem.positionX < player.positionX + player.width &&
            obstacleItem.positionX + obstacleItem.width > player.positionX &&  //we move a new element and we check if there is a collision all wihtin the same loop
            obstacleItem.positionY < player.positionY + player.height &&
            obstacleItem.height + obstacleItem.positionY > player.positionY) {
            console.log("game over my fren");
            //gameOver()
            location.href= 'index.html' //  send player to start again
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





// *********************
// *********************
// *** obstacles 2  *****
// *********************
// *********************
class ObstaclesTwo {
    
    constructor (){
        this.width = 7 ;
        this.height = 10; 
        this.positionX = Math.floor(Math.random()* (100 - this.width));
        this.positionY = 100;


        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
         // step1: create the element
         this.domElement = document.createElement('div');

         // step2: add content or modify (ex. innerHTML...)
         this.domElement.className = 'obstacleTwo';
         this.domElement.style.width = this.width + 'vw';
         this.domElement.style.height = this.height + "vh";
         this.domElement.style.left = this.positionX +"vw";
         this.domElement.style.bottom = this.positionY + 'vh';
         //this.domElement.style.backgroundColor = '#96070c'
         this.domElement.style.imageRendering
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
const obstaclesTwoArr = []; //outside so that it can be accessed from several siblings

setInterval(() => {
    const newObstacle = new ObstaclesTwo();
    obstaclesTwoArr.push(newObstacle);
}, 4000);

// move those obstacles
setInterval(()=>{
    obstaclesTwoArr.forEach((obstacleItem)=> {
        obstacleItem.moveDown();

        if (obstacleItem.positionX < player.positionX + player.width &&
            obstacleItem.positionX + obstacleItem.width > player.positionX &&  //we move a new element and we check if there is a collision all wihtin the same loop
            obstacleItem.positionY < player.positionY + player.height &&
            obstacleItem.height + obstacleItem.positionY > player.positionY) {
            console.log("game over my fren");
            //gameOver()
            location.href= 'index.html' //  send player to start again
            }
            //detect if obstacle needs to be removed once out of sight from the viewport. for that obstacle first needs to reach  the Y axis = 0 adn then we substract teh heigth of the obstacle, so taht it dissapears once we dont see it
            if (obstacleItem.positionY < 0 - obstacleItem.height) {
                //1. remove from the array of obstacles. we can use .shift in order to delete teh 1st element of our array (which is the first one reaching teh bottom of the viewport)
                    obstaclesTwoArr.shift();


                //2. remove the obstacle elm from the dom with the .remove() method that we can use to this DOM element
                //teh obsctacle  we want to delete is in the instance 'obstacleItem' of the class 'Obstacle'. thats how we can accesss positionY, for example.
                //the DOM element of that obstacle is in the 'domElement'. now we can apply the remove() method to that.
                obstacleItem.domElement.remove()
}                          

    });

},100);








// *********************
// *********************
// *** obstacles 3  *****
// *********************
// *********************
class ObstaclesThree {
    
    constructor (){
        this.width = 3 ;
        this.height = 22; 
        this.positionX = Math.floor(Math.random()* (100 - this.width));
        this.positionY = 100;


        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
         // step1: create the element
         this.domElement = document.createElement('div');

         // step2: add content or modify (ex. innerHTML...)
         this.domElement.className = 'obstacleThree';
         this.domElement.style.width = this.width + 'vw';
         this.domElement.style.height = this.height + "vh";
         this.domElement.style.left = this.positionX +"vw";
         this.domElement.style.bottom = this.positionY + 'vh';
         //this.domElement.style.backgroundColor = '#96070c'
         this.domElement.style.imageRendering
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
const obstaclesThreeArr = []; //outside so that it can be accessed from several siblings

setInterval(() => {
    const newObstacle = new ObstaclesThree();
    obstaclesThreeArr.push(newObstacle);
}, 7000);

// move those obstacles
setInterval(()=>{
    obstaclesThreeArr.forEach((obstacleItem)=> {
        obstacleItem.moveDown();

        if (obstacleItem.positionX < player.positionX + player.width &&
            obstacleItem.positionX + obstacleItem.width > player.positionX &&  //we move a new element and we check if there is a collision all wihtin the same loop
            obstacleItem.positionY < player.positionY + player.height &&
            obstacleItem.height + obstacleItem.positionY > player.positionY) {
            console.log("game over my fren");
            //gameOver()
            location.href= 'index.html' //  send player to start again
            }
            //detect if obstacle needs to be removed once out of sight from the viewport. for that obstacle first needs to reach  the Y axis = 0 adn then we substract teh heigth of the obstacle, so taht it dissapears once we dont see it
            if (obstacleItem.positionY < 0 - obstacleItem.height) {
                //1. remove from the array of obstacles. we can use .shift in order to delete teh 1st element of our array (which is the first one reaching teh bottom of the viewport)
                    obstaclesThreeArr.shift();


                //2. remove the obstacle elm from the dom with the .remove() method that we can use to this DOM element
                //teh obsctacle  we want to delete is in the instance 'obstacleItem' of the class 'Obstacle'. thats how we can accesss positionY, for example.
                //the DOM element of that obstacle is in the 'domElement'. now we can apply the remove() method to that.
                obstacleItem.domElement.remove()
}                          

    });

},400);




// *********************
// *********************
// ***   FRIENDS   *****
// *********************
// *********************


//feelingsArray
const myFeelings = ['affectionate', 'compassionate', 'friendly', 'loving', 'open','hearted','sympathetic','tender',
'warm','engaged','absorbed','alert','curious','engrossed','enchanted','entranced','fascinated','interested',
'intrigued','involved','spellbound','stimulated','hopeful','expectant','encouraged','optimistic','confident',
'empowered','open','proud','safe','secure','excited','amazed','animated','ardent', 'aroused', 'astonished', 'dazzled',
 'eager', 'energetic', 'enthusiastic', 'giddy', 'invigorated', 'lively', 'passionate', 'surprised', 'vibrant', 'grateful',
  'appreciative', 'moved', 'thankful', 'touched', 'inspired', 'amazed', 'awed', 'wonder', 'joyful', 'amused', 'delighted', 
  'glad', 'happy', 'jubilant', 'pleased', 'tickled', 'exhilarated', 'blissful', 'ecstatic', 'elated', 'enthralled', 'exuberant',
   'radiant', 'rapturous', 'thrilled', 'peaceful', 'calm', 'clearheaded', 'comfortable', 'centered', 'content', 'equanimous', 
   'fulfilled', 'mellow', 'quiet', 'relaxed', 'relieved', 'satisfied', 'serene', 'still', 'tranquil', 'trusting', 'refreshed',
    'enlivened', 'rejuvenated', 'renewed', 'rested', 'restored', 'revived','afraid', 'apprehensive', 'dread', 'foreboding', 
    'frightened', 'mistrustful', 'panicked', 'petrified', 'scared', 'suspicious', 'terrified', 'wary', 'worried', 'annoyed', 
    'aggravated', 'dismayed', 'disgruntled', 'displeased', 'exasperated', 'frustrated', 'impatient', 'irritated', 'irked',
     'angry', 'enraged', 'furious', 'incensed', 'indignant', 'irate', 'livid', 'outraged', 'resentful', 'aversion', 'animosity', 
     'appalled', 'contempt', 'disgusted', 'dislike', 'hate', 'horrified', 'hostile', 'repulsed','confused', 'ambivalent', 
     'baffled', 'bewildered', 'dazed', 'hesitant', 'lost', 'mystified', 'perplexed', 'puzzled', 'torn','disconnected','alienated', 
     'aloof' ,'apathetic', 'bored', 'cold', 'detached', 'distant', 'distracted', 'indifferent', 'numb', 'removed', 'uninterested', 
     'withdrawn', 'disquiet', 'agitated','alarmed', 'discombobulated', 'disconcerted', 'disturbed', 'perturbed', 'rattled', 'restless', 
     'shocked', 'startled', 'surprised', 'troubled', 'turbulent', 'turmoil', 'uncomfortable', 'uneasy', 'unnerved', 'unsettled', 'upset', 
     'embarrassed', 'ashamed', 'chagrined', 'flustered', 'guilty', 'mortified', 'self_conscious','fatigue','beat', 'burnt_out', 'depleted', 
     'exhausted', 'lethargic', 'listless', 'sleepy', 'tired', 'weary', 'worn_out', 'pain', 'agony', 'anguished', 'bereaved', 
     'devastated', 'grief', 'heartbroken', 'hurt', 'lonely', 'miserable', 'regretful', 'remorseful', 'sad', 'depressed', 'dejected', 
     'despair', 'despondent', 'disappointed', 'discouraged', 'disheartened', 'forlorn', 'gloomy', 'heavy', 'hearted', 'hopeless', 
     'melancholic', 'unhappy', 'wretched', 'tense', 'anxious', 'cranky', 'distressed', 'distraught', 'edgy', 'fidgety', 'frazzled',
     'irritable', 'jittery', 'nervous', 'overwhelmed','restless', 'stressed_out', 'vulnerable', 'fragile', 'guarded', 'helpless', 'insecure',
      'leery', 'reserved', 'sensitive', 'shaky', 'yearning', 'envious', 'jealous', 'longing', 'nostalgic', 'pining', 'wistful']


class Friends {
    
    constructor (){
        this.width = 7;
        this.height = 3; 
        this.positionX = Math.floor(Math.random()* (100 - this.width));
        this.positionY = 100;
        this.domElement = null;
        //feelings array
        this.banana = myFeelings;

        this.createDomElement();
    }
    createDomElement() {
         // step1: create the element
         this.domElement = document.createElement('div');

         // step2: add content or modify (ex. innerHTML...)
         this.domElement.className = 'friend';
         this.domElement.style.width = this.width + 'vw';
         this.domElement.style.height = this.height + "vh";
         this.domElement.style.left = this.positionX +"vw";
         this.domElement.style.bottom = this.positionY + 'vh';
         this.domElement.style.backgroundColor = '#8697b100'
         this.domElement.style.position = 'absolute'
        //feelings Array
         const randomIndex = Math.floor(Math.random() * this.banana.length);
         const randomWord = this.banana[randomIndex];
         this.domElement.innerHTML = randomWord;

         //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById('board') 
         parentElm.appendChild(this.domElement);
     }
     moveDown(){
         this.positionY--;
         this.domElement.style.bottom = this.positionY + "vh";

    }

}

//create new friends
const friendsArr = []; //outside so that it can be accessed from several siblings

setInterval(() => {
    const newFriend = new Friends();
    friendsArr.push(newFriend);
}, 4000);

// move those friends
setInterval(()=>{
    friendsArr.forEach((friendItem, index)=> {
        friendItem.moveDown();
        

        if (friendItem.positionX < player.positionX + player.width &&
            friendItem.positionX + friendItem.width > player.positionX &&  //we move a new element and we check if there is a collision all wihtin the same loop
            friendItem.positionY < player.positionY + player.height &&
            friendItem.height + friendItem.positionY > player.positionY) {
            console.log("Love You!");
            scoreUp();
            friendsArr.splice(index, 1); 
            friendItem.domElement.remove()
            // POINTS
            }
            //detect if obstacle needs to be removed once out of sight from the viewport. for that obstacle first needs to reach  the Y axis = 0 adn then we substract teh heigth of the obstacle, so taht it dissapears once we dont see it
            if (friendItem.positionY < 0 - friendItem.height) {
                //1. remove from the array of obstacles. we can use .shift in order to delete teh 1st element of our array (which is the first one reaching teh bottom of the viewport)
                friendItem.domElement.remove()


                //2. remove the obstacle elm from the dom with the .remove() method that we can use to this DOM element
                //teh obsctacle  we want to delete is in the instance 'friendItem' of the class 'Obstacle'. thats how we can accesss positionY, for example.
                //the DOM element of that obstacle is in the 'domElement'. now we can apply the remove() method to that.
               // friendItem.domElement.remove()
                //  friendsArr.splice(index, 1); 
}                        
        

    });

},200);



// *********************
// *********************
// ***** SCORE *******
// *********************
// *********************

//Create a DOM Element displaying 0
//if collision with friend counter++
let score = 0;
function scoreUp (){
    score += 1;
    console.log(score)
    visibleScore.updateScore();
    
        return score;

    }

    
    


class Score {
    constructor (){
        this.height = 5;
        this.width = 7;
        this.positionX = 85;
        this.positionY =92;

        this.domElement = null;

        this.createDomElement()
    }


    createDomElement(){
            // 
                this.domElement = document.createElement('div');
            //
                this.domElement.id = 'score';
                this.domElement.style.width = this.width + "vw" ;
                this.domElement.style.height = this.height + "vh";
                this.domElement.style.bottom = this.positionY + 'vh'; 
                this.domElement.style.left = this.positionX + "vw"; 
                this.domElement.style.backgroundColor = '#8697b100';
                this.domElement.style.position = 'absolute';
                board.appendChild(this.domElement);

                this.updateScore();
               

    }
        updateScore () {
        this.domElement.innerText = score;
    }
} 
const visibleScore = new Score();




