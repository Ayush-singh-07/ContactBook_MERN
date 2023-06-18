import React from "react";


function SavedContact(props){
    return (<div className="fl w-two-thirds pa2">
<div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Phone Number</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Alternate Phone Number</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Adress</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Edit</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Delete</th>
        </tr>
      </thead>
      <tbody class="lh-copy">


      {
          props.contacts.map((elem, idx)=>{
                    return <tr>
                            <td class="pv3 pr3 bb b--black-20">{elem.name}</td>
                            <td class="pv3 pr3 bb b--black-20">{elem.phone}</td>
                            <td class="pv3 pr3 bb b--black-20">{elem.altPhone}</td>
                            <td class="pv3 pr3 bb b--black-20">{elem.address}</td>
                            <td class="pv3 pr3 bb b--black-20">{elem.email}</td>
                            <td class="pv3 pr3 bb b--black-20"><button onClick={()=>props.handleEdit(elem._id)} className="f6 link dim br2 ph3 pv2 mb2 dib white bg-blue" > EDIT </button></td>
                            <td class="pv3 pr3 bb b--black-20"><button onClick={()=>props.handleDelete(elem._id)} className="f6 link dim br2 ph3 pv2 mb2 dib white bg-red" > DELETE </button></td>
                          </tr>
          })
        }
        


      </tbody>
    </table>
  </div>
</div>
    </div>)
}


export default SavedContact;