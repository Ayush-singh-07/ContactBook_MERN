import React, { useEffect } from "react";
import Contactform from "./components/Contactform";
import SavedContacts from './components/SavedContacts'
import { useState } from "react";
import axios from 'axios';





function App() {

  const [updating  , setupdating] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    altPhone: "",
    address: "",
    email: "",
});


//-----------localstorage code ----------------
// useEffect(()=>{
  
  // const storedData = localStorage.getItem('contacts');
  // if(storedData){
  //   const parsedData = JSON.parse(storedData);
  //   setContacts(parsedData);
  // }
// },[])


// function handleEdit(idx){
//   const storedContact = localStorage.getItem("contacts");
//   if(storedContact){
//     const parsedContact = JSON.parse(storedContact);
//     const element = parsedContact[idx];
//     setNewContact(element);
//   }

// }


// function save(e){
//   e.preventDefault();
//   const updatedContacts = [...contacts, newContact];
//   setContacts(updatedContacts);
//   localStorage.setItem("contacts", JSON.stringify(updatedContacts));
//   setNewContact({
//     name: "",
//     phone: "",
//     altPhone: "",
//     address: "",
//     email: "",
//   });
// }

//-----------localstorage code ----------------

useEffect( ()=>{
  axios.get("http://localhost:5000/api")
  .then( response => setContacts(response.data))
  .catch(err => console.log(err))
},[])

function handleChange(e){
  const {name, value } = e.target;
  setNewContact((prev)=>{
    return {
      ...prev,
      [name]:value,
    }
  });
}

function save(e){
  e.preventDefault();
  axios.post("http://localhost:5000/api/add", newContact)
  .then((response)=> {
    setContacts((prev)=>{
      return [ ...prev,response.data];
    })
    setNewContact({
      name: "",
      phone: "",
      altPhone: "",
      address: "",
      email: "",
    });
  })
  .catch(err => console.log(err))

}


function handleEdit(idx){
 setupdating(true);
  contacts.forEach(element => {
    if(element._id === idx){
      setNewContact(element);
    }
  });
}

function handleUpdate(e){
  axios.put(`http://localhost:5000/api/update/${newContact._id}`, newContact)
  .then((response)=> {
    setContacts((prev)=>{
      prev.forEach((el, i)=>{
        if(el._id === response.data._id){
          prev[i] = response.data;
        }
      });
      return prev;
    });
    setNewContact({
      name: "",
      phone: "",
      altPhone: "",
      address: "",
      email: "",
    });
    setupdating(false);
  })
  .catch(err => console.log(err))
  e.preventDefault();
}

function handleDelete(idx){
  axios.delete(`http://localhost:5000/api/delete/${idx}`)
  .then(response =>{
    setContacts(prev =>{
      return prev.filter((elem, index)=>{
        return elem._id != idx;
      })
    })
  })
  .catch(err => console.log(err))
  // e.preventDefault();
}

  return (
    <div className="App">
      <Contactform updating={updating} handleUpdate={handleUpdate} handleChange={handleChange} newContact={newContact} save={save}/>
      <SavedContacts handleDelete={handleDelete} handleEdit={handleEdit} contacts={contacts}/>
    </div>
  );
}

export default App;
