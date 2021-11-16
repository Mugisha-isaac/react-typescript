import React, { useState } from 'react'
import './App.css'
import AddToList from './components/AddToList'
import List from './components/List'



export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}


function App () {
  // const [number, setNumber] = useState<Number | String | Boolean>(5)
  // const changeNumber = () => {
  //   setNumber(true)
  // }

  // const [people, setPeople] = useState([
  //   {
  //     name: "leBron James",
  //     age: 36,
  //     url: "https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/LeBron_James_aiming_basketball_Cleveland_Cavaliers_vs_Washington_Wizards_Verizon_Center_Washington_DC_November_21_2014.jpg",
  //     note: "Allergin to staying in one team"
  //   },
  //   {
  //     name: "Kobe Bryant",
  //     age: 36,
  //     url: "https://talksport.com/wp-content/uploads/sites/5/2015/06/bryant.jpg?strip=all&w=700&quality=100"
  //   }
  // ])

  // people.map(person =>{
  //     person.height
  // })



  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "leBron james",
      url: 'https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/LeBron_James_aiming_basketball_Cleveland_Cavaliers_vs_Washington_Wizards_Verizon_Center_Washington_DC_November_21_2014.jpg',
      age: 36,
      note: 'Allergic to staying in one team'
    },
    // {
    //   name: 'Kobe bryant',
    //   url: "https://talksport.com/wp-content/uploads/sites/5/2015/06/bryant.jpg?strip=all&w=700&quality=100",
    //   age: 41,
    // }
  ])
  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
