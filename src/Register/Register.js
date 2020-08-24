import React, { useState} from 'react'
import './register.css'
import Creatable from 'react-select/creatable'
import firebase from 'firebase';




const sell = [
  { label: 'Arab', value: 'Arab' },
  { label: 'Francais', value: 'Francais' },
  { label: 'English', value: 'English' },
  { label: 'Maths', value: 'Maths' },
  { label: 'Biologie', value: 'Biologie'},
  { label: 'Geographie', value: 'Geographie'}
]

const buy = [
  { label: 'Chimie', value: 'Chimie' },
  { label: 'Histoire', value: 'Histoire' },
  { label: 'Philo', value: 'Philo' },
  { label: 'Eco', value: 'Eco' }
]

const Classs = [
  { label: 'EB1', value: 'EB1' },
  { label: 'EB2', value: 'EB2' },
  { label: 'EB3', value: 'EB3' },
  { label: 'EB4', value: 'EB4' },
  { label: 'EB5', value: 'EB5' },
  { label: 'EB6', value: 'EB6' },
  { label: 'EB7', value: 'EB7' },
  { label: 'EB8', value: 'EB8' },
  { label: 'EB9', value: 'EB9' },
  { label: 'Seconde', value: 'Seconde' },
  { label: 'Bac-Scientific', value: 'Bac-Scientific' },
  { label: 'Bac-Literaire', value: 'Bac-Literaire' },
  { label: 'SG', value: 'SG' },
  { label: 'SV', value: 'SV' },
  { label: 'SE', value: 'SE' },
  { label: 'LH', value: 'LH' },

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
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [school, setSchool] = useState('')
  const [SellValue, setSellValue] = useState('')
  const [BuyValue, setBuyValue] = useState('')
  const [ClasssValue, setClass] = useState('')
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

  const handleClass = (field, value) => {
    switch (field) {
      case 'Classss':
        setClass(value)
        const c = value;
        
        
        /*console.log(elle);*/
        break

      default:
        break
    }
  }


 const handleSubmit = (event) => {

    var name_id = document.getElementById("Name").value;
    var cell = document.getElementById("Number").value;
    var addresss = document.getElementById("Addressss").value;
    var schooll = document.getElementById("schoolll").value;
   /* var classsss = document.getElementById("Classss").value;*/
    var h = ClasssValue.value;
    
  
    
  
    
   /* var userID = firebase.auth().currentUser.uid;*/

    if(name_id !== "" && addresss !== "" && schooll !== "" && cell !== ""&& h !== "" && elle.length > 0 && il.length > 0 )
    {

      firebase.database().ref('users').child('numbers').child(cell).set({
          
          
          name: name_id,
          number: cell,
          address : addresss,
          school : schooll,
          Class : h,
          to_Sell : elle,
          to_Buy : il,

        
          });

      
    
      alert(` CONGRATULATION  ${name}  , YOUR EXCHANGE HAS BEEN DONE `)

      setName("")
      setNumber("")
      setAddress("")
      setSchool("")
      setClass("")
      setSellValue("")
      setBuyValue("")
      setElement1([])
      setElement2([])
      
     
    }

    else{
      alert(`plz fill all the fields`)
    }
        
       
    }
  


  return (
    <div className='container'>
      <h3>DEKESH KTEBAK !!!</h3>
      <div className='register-form'>
        <div className='input'>
          <label>Full Name</label>
          <input type='text'id="Name" required="required" value={name} onChange={(event) => setName(event.target.value)} placeholder="Full Name..." />
        </div>
        
        <div className='input'>
          <label>phone number</label>
          <input type='text' value={number} id="Number" required="required" onChange={(event) => setNumber(event.target.value)} placeholder = "Phone number..."/>
        </div>

        <div className='input'>
          <label>Full address</label>
          <input type='text' value={address} id="Addressss" required="required" onChange={(event) => setAddress(event.target.value)} placeholder = "ex: jbeil/main road/street 53/building 22..."/>
        </div>

        <div className='input'>
          <label>School name</label>
          <input type='text' value={school} id="schoolll" required="required" onChange={(event) => setSchool(event.target.value)} placeholder = "School..."/>
        </div>

        <div className='input'>
          <label>Class</label>
          <Creatable
          
            isClearable
            onChange={(value) => handleClass('Classss', value)}
            options={Classs}          
            value={ClasssValue} 
            styles={customStyles}
            
          />
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
          
        </div>
      </div>
    </div>

  )
}

export default Register
