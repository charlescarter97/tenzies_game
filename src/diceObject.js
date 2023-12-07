

function RollDice() {
  // const[holdDice, clickDice] = React.useState(false)
  // function handleChange(event){
  //   clickDice(prevFormData =>{
  //     return{
  //       ...prevFormData,
  //       [event.target.name]: event.target.type === 'isHeld' ? event.target.clicked : event.target.value}
  //   })}
  const diceArray = []
  for(var i = 0; i<11; i++){
    diceArray.push(Math.floor(Math.random() * 6) + 1)
  }
   

  
var diceObject = [
    {
      id: 1,
      name:'dice1',
      diceValue:diceArray[0],
      isHeld:false
    },
    {
        id: 2,
        name:'dice2',
        diceValue:diceArray[1],
        isHeld:false
      },
      {
        id: 3,
        name:'dice3',
        diceValue:diceArray[2],
        isHeld:false
      },
      {
        id: 4,
        name:'dice4',
        diceValue:diceArray[3],
        isHeld:false
      },
      {
        id: 5,
        name:'dice5',
        diceValue:diceArray[4],
        isHeld:false
      },
      {
        id: 6,
        name:'dice6',
        diceValue:diceArray[5],
        isHeld:false
      },
      {
        id: 7,
        name:'dice7',
        diceValue:diceArray[6],
        isHeld:false
      },
      {
        id: 8,
        name:'dice8',
        diceValue:diceArray[7],
        isHeld:false
      },
      {
        id: 9,
        name:'dice9',
        diceValue:diceArray[8],
        isHeld:false
      },
      {
        id: 10,
        name:'dice10',
        diceValue:diceArray[9],
        isHeld:false
        
      },
    
  ];
  return diceObject; // Return the diceObject array
}



const diceObject = RollDice();
export default diceObject;