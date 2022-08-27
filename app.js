import ancientsData from './data/ancients.js'
import difficulties from './data/difficulties.js'
import cardsDataGreen  from './data/mythicCards/green/index.js'
import cardsDataBlue from './data/mythicCards/blue/index.js'
import cardsDataBrown  from './data/mythicCards/brown/index.js'





const firstGreenStage = document.getElementById('green1'),
      firstBrownStage = document.getElementById('brown1'),
      firstBlueStage = document.getElementById('blue1'),
      secondGreenStage = document.getElementById('green2'),
      secondBrownStage = document.getElementById('brown2'),
      secondBlueStage = document.getElementById('blue2'),
      thirdGreenStage = document.getElementById('green3'),
      thirdBrownStage = document.getElementById('brown3'),
      thirdBlueStage = document.getElementById('blue3'),
      ancientsContainer = document.querySelector('.ancients-container'),
      ancientsArray = ['azathoth', 'cthulhu','shubNiggurath','iogSothoth'],
      difficaltArray = ['very-easy', 'easy', 'normal','hard','very-hard'],
      shuffleButton = document.getElementById('shuffle-button'),
      lastCard = document.querySelector('.last-card'),
      dots = document.querySelectorAll('.dots-container'),
      dot = document.querySelectorAll('.dot'),
      deck = document.querySelector('.deck'),
      difficaltContainer = document.querySelector('.difficulty-container'),
      countContainer = document.querySelector('.count-container'),
      cardsContainer =  document.querySelector('.cards-container')
      
     

      



let desk
let cachedAncient 
let colorCards
let allColors
let allBrown 
let allBlue 
let allGreen 
let allcardsArray


    ancientsContainer.addEventListener('click', e => {
        const target = e.target
        difficaltContainer.classList.add('show')

        ancientsArray.forEach((element, index) => {
            const node = document.getElementById(element)
            
            if(element === target.id){
                getAncients(index) 
                return node.classList.add('active')
            }

            return node.classList.remove('active')
        })
    })

        shuffleButton.addEventListener('click', () =>{
            cardsContainer.classList.add('show')
            getDeskStageCards()
        } )

        deck.addEventListener('click', () =>{
            nextCards(desk)
        } )


        difficaltContainer.addEventListener('click', e => {
            const target = e.target
            countContainer.classList.add('show')
            shuffleButton.classList.add('show')

            difficaltArray.forEach((element, index) => {
                const node = document.getElementById(element)


                if(element === target.id){    
                    getDifficult(element)              
                return node.classList.add('active-dif')

                }
                return node.classList.remove('active-dif')

            })
        })





  function getAncients (ancients){
    cachedAncient = ancientsData[ancients]
    const {id, name, firstStage, secondStage, thirdStage} = ancientsData[ancients]
    const {greenCards:firstGreen, blueCards:firstBlue,  brownCards:firstBrown} = firstStage
    const {greenCards:secondGreen, blueCards:secondBlue,  brownCards:secondBrown} = secondStage
    const {greenCards:thirdGreen, blueCards:thirdBlue,  brownCards:thirdBrown} = thirdStage
    firstGreenStage.innerText = firstGreen
    firstBrownStage.innerHTML = firstBrown
    firstBlueStage.innerHTML = firstBlue

    secondGreenStage.innerText = secondGreen
    secondBrownStage.innerHTML = secondBrown
    secondBlueStage.innerHTML = secondBlue

    thirdGreenStage.innerText = thirdGreen
    thirdBrownStage.innerHTML = thirdBrown
    thirdBlueStage.innerHTML = thirdBlue

     allBrown = firstBrown + secondBrown + thirdBrown
     allBlue = firstBlue + secondBlue + thirdBlue
     allGreen = firstGreen + secondGreen + thirdGreen

    console.log(allGreen, allBrown, allBlue)

    
    allColors = {
        allGreen: allGreen,
        allBlue:allBlue,
        allBrown:allBrown

    }
    console.log(allColors)
    return allColors
}

    function getDifficult(difficalt){
        
        if(difficalt == 'normal'){
            allcardsArray = [...getDeck(cardsDataBlue, allBlue), ...getDeck(cardsDataGreen, allGreen), ...getDeck(cardsDataBrown, allBrown)]
        }
        if(difficalt == 'very-easy'){
            let green = chekArray( (filterArray(cardsDataGreen,'difficulty', 'easy' , allGreen)),allGreen,cardsDataGreen)
            let brown = chekArray((filterArray(cardsDataBrown,'difficulty', 'easy' , allBrown)),allBrown, cardsDataBrown)
            let blue = chekArray((filterArray(cardsDataBlue,'difficulty', 'easy' , allBlue)), allBlue,cardsDataBlue)      
            allcardsArray = [...blue, ...green, ...brown]
        }
        if(difficalt == 'very-hard'){
            let green = chekArray( (filterArray(cardsDataGreen,'difficulty', 'hard' , allGreen)),allGreen,cardsDataGreen)
            let brown = chekArray((filterArray(cardsDataBrown,'difficulty', 'hard' , allBrown)),allBrown, cardsDataBrown)
            let blue = chekArray((filterArray(cardsDataBlue,'difficulty', 'hard' , allBlue)), allBlue,cardsDataBlue)      
            allcardsArray = [...blue, ...green, ...brown]
        }
        if(difficalt == 'easy'){
            let originGreen = cardsDataGreen
            let originBrown = cardsDataBrown
            let originBlue = cardsDataBlue
            let green = getDeck(deleteArray(originGreen,(filterArray(cardsDataGreen,'difficulty', 'hard' , allGreen))),allGreen)
            let brown = getDeck(deleteArray(originBrown,(filterArray(cardsDataBrown,'difficulty', 'hard' , allBrown))),allBrown)
            let blue = getDeck(deleteArray(originBlue,(filterArray(cardsDataBlue,'difficulty', 'hard' , allBlue))),allBlue)
            allcardsArray = [...blue, ...green, ...brown]
        }
        if(difficalt == 'hard'){
            let originGreen = cardsDataGreen
            let originBrown = cardsDataBrown
            let originBlue = cardsDataBlue
            let green = getDeck(deleteArray(originGreen,(filterArray(cardsDataGreen,'difficulty', 'easy' , allGreen))),allGreen)
            let brown = getDeck(deleteArray(originBrown,(filterArray(cardsDataBrown,'difficulty', 'easy' , allBrown))),allBrown)
            let blue = getDeck(deleteArray(originBlue,(filterArray(cardsDataBlue,'difficulty', 'easy' , allBlue))),allBlue)
            allcardsArray = [...blue, ...green, ...brown]
        }


        
        console.log('allcardsArray', allcardsArray)
        return allcardsArray
    }

  // collect the deck by stages
    function getDeskStageCards(){
        cachedAncient 
        console.log(cachedAncient)
        const {id, name, firstStage, secondStage, thirdStage} = cachedAncient
        const {greenCards:firstGreen, blueCards:firstBlue,  brownCards:firstBrown} = firstStage
        const {greenCards:secondGreen, blueCards:secondBlue,  brownCards:secondBrown} = secondStage
        const {greenCards:thirdGreen, blueCards:thirdBlue,  brownCards:thirdBrown} = thirdStage

        let firstStageArray = splitArrayStadies( allcardsArray, [firstGreen, firstBrown, firstBlue])
        allcardsArray = deleteArray(allcardsArray, firstStageArray)

        let secondStageArray = splitArrayStadies( allcardsArray, [secondGreen, secondBrown, secondBlue])
        allcardsArray = deleteArray(allcardsArray, secondStageArray)

        let thirdStageArray = splitArrayStadies( allcardsArray, [thirdGreen, thirdBrown, thirdBlue])
        allcardsArray = deleteArray(allcardsArray, thirdStageArray)

        desk = [firstStageArray, secondStageArray, thirdStageArray]
     
 
        return desk    

    }



    //check whether the card has enough complexity to make a deck, if not, add the usual ones
    function chekArray(array, lenghtColors, prototypeArray ){
        if(lenghtColors == array.length){
            return shuffle(array)
        } 

        let count
        let normalArray = []
        let newArray = []
        let arrayN = []

        if(lenghtColors > array.length){
            count = lenghtColors - array.length
            normalArray = prototypeArray.filter((element) =>{ 
                return element.difficulty == 'normal'  
            })
       
            arrayN = getDeck(normalArray,count)
            newArray = [...array, ...getDeck(normalArray,count)]
    
            return shuffle(newArray)
        }

        if(lenghtColors < array.length){
            return getDeck(array,lenghtColors)
        }

    }

    function filterArray(array, property, value, lengthNewArray){
        let newArray = []
        let copy = [...array]
        for(let cards of array){
            if(cards[property] == value){
                newArray.push(cards)
            }
        }
        return newArray
    }


    let stage = 1
    let counterCards = -1
    function nextCards(arr, elem){
            
        const arrCards = [...arr[0], ...arr[1], ...arr[2]]
        const lenghtFirst = arr[0].length
        const lenghtSecond = arr[1].length
        counterCards++

        if(counterCards == lenghtFirst){
            stage = 2
        }
        if(counterCards == (lenghtFirst+lenghtSecond)){
            stage = 3
        }

        if(counterCards >= arrCards.length){
            lastCard.style.backgroundImage = `none`
            
        } 


            lastCard.style.backgroundImage = `url(./MythicCards/${arrCards[counterCards].color}/${arrCards[counterCards].id}.png)`
            document.getElementById(`${arrCards[counterCards].color}${stage}`).textContent = +document.getElementById(`${arrCards[counterCards].color}${stage}`).textContent -1


        


        colorCards = arrCards[counterCards].color
        return colorCards
    }


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}




// generate a random number
function rundomElementFromArray (array){
    let result = Math.floor(Math.random() * array.length)
    return array[result]
}


// filling the array with unique data
function getDeck(array, count, color){
    let unic
    let arr = []
    let result
    while (arr.length < count){
        do{
            unic = true
            result = rundomElementFromArray(array) 
            for(let i = 0; i < arr.length; i++){
                if(result === arr[i]){  // check whether there was such an element in the array
                    unic = false;
                    break;
                }
            }

        } while(!unic) //starting again
        arr.push(result)
                
    }
    return arr
}

// collects an array of stages by color
function splitArrayStadies(array, count){
    let arrayColorblue = getDeck( arrayColors(array, 'blue'), count[2])
    let arrayColorGreen = getDeck(arrayColors(array, 'green'), count[0])  
    let arrayColorBrown = getDeck( arrayColors(array, 'brown'), count[1])
    let stageArray = [...arrayColorGreen, ...arrayColorBrown, ...arrayColorblue]
    return stageArray
}

function deleteArray(arrayOriginal, arrayСompared){
    arrayOriginal = arrayOriginal.filter(ar => !arrayСompared.find(rm => (rm.id === ar.id) ))
    return arrayOriginal
}



// sorts the data by color into a new array, and deletes the data from the original array
function arrayColors (array, colorArray){
    let j
    let arrayColor = array.filter((obj) => {
        if(obj.color == colorArray){
            j = array.indexOf(obj)
            return obj
        } 
    })   
    return  arrayColor
}


export {getAncients}

