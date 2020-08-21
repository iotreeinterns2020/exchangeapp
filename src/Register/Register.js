import React, { useState} from 'react'
import './register.css'
import Creatable from 'react-select/creatable'
import firebase from 'firebase';

const sell = [
  { label: 'Tomato', value: 'Tomato' },
  { label: 'Cucumber', value: 'Cucumber' },
  { label: 'Lettuce', value: 'Lettuce' },
  { label: 'Carrots', value: 'Carrots' },
  { label: 'Green pepper', value: 'Green pepper'}
]

const buy = [
  { label: 'Strawberry', value: 'Strawberry' },
  { label: 'Banana', value: 'Banana' },
  { label: 'Pineapple', value: 'Pineapple' },
  { label: 'Kiwi', value: 'Kiwi' }
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  })
}

const Register = props => {
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [number, setNumber] = useState('')
  const [SellValue, setSellValue] = useState('')
  const [BuyValue, setBuyValue] = useState('')
  const [elle,setElement1] = useState([]);
  const [il,setElement2] = useState([]);
  



  const handleChangeSell = (field, value) => {
    switch (field) {
      case 'sell':
        setSellValue(value)
        const a = elle.length;
        setElement1(value)
        elle.splice(a,0,value);
        
        /*console.log(elle);*/
        break

      default:
        break
    }
  }

const logout=()=>{
  firebase.auth().signOut();
}
  
  const handleChangeBuy = (field, value) => {
    switch (field) {
      case 'buy':
        setBuyValue(value)
        const b = il.length;
        setElement2(value)
        il.splice(b,0,value);

        break

      default:
        break
    }
  }

  


 const handleSubmit = (event) => {

    var name_id = document.getElementById("Name").value;
    var family = document.getElementById("Family").value;
    var cell = document.getElementById("Number").value;
    
    
  
    
    var userID = firebase.auth().currentUser.uid;

      firebase.database().ref('users').child(userID).child(name_id).set({
          
          
          name: name_id,
          family: family,
          number: cell,
          toSell : elle,
          toBuy : il,

        
         
          
          
          
          
          
          });

      
    
      alert(` CONGRATULATION  ${name} ${family} , YOUR EXCHANGE HAS BEEN DONE `)
     
      
       
    }
  


  return (
    <div className='container'>
      <h3>Add User</h3>
      <div className='register-form'>
        <div className='input'>
          <label>Name</label>
          <input type='text'id="Name" required="required" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name..." />
        </div>
        <div className='input'>
          <label>Family</label>
          <input type='text' id="Family" required="required" value={family} onChange={(event) => setFamily(event.target.value)} placeholder="Family..."/>
        </div>
        <div className='input'>
          <label>phone number</label>
          <input type='text' value={number} id="Number" required="required" onChange={(event) => setNumber(event.target.value)} placeholder = "Phone number..."/>
        </div>

        <div className='input'>
          <label>vegetables to sell by exchange</label>
          <Creatable
          
            isClearable
            isMulti
            onChange={(value) => handleChangeSell('sell', value)}
            options={sell}          
            value={SellValue} 
            styles={customStyles}
            
          />
        </div>

        <div className='input'>
          <label>vegetables to buy by exchange</label>
          <Creatable 
            isClearable
            isMulti
            onChange={(value) => handleChangeBuy('buy', value)}
            options={buy}
            value={BuyValue}
            styles={customStyles}
          />
        </div>

        <div className='buttons'>
          <button onClick={()=> handleSubmit()}>Submit</button>
          <button onClick={()=>logout()}>Logout</button>
        </div>
      </div>
    </div>

  )
}

export default Register
