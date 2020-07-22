import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

//import { MDBCol, MDBSelectInput, MDBSelect} from "mdbreact";
import FindProfile from './localguide.jsx'






class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dataBase:[
                {Name : "AymanYaich",age : 37 , gender : "Male", languages:["English","Arabic","French"],imgURL:"https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg"},
                {Name : "AmiraAyoubi",age :25 , gender : "Female", languages:["English","Arabic","Russian"],imgURL:"https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg"},
                {Name : "MounaBrahmi",age : 29 , gender : "Female", languages:["English","Arabic","French"],imgURL:"https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg"},
                {Name : "MouradBenAmmar",age : 31 , gender : "Male", languages:["English","Arabic","French","Spanish","Portuguess"],imgURL:"https://i.ndtvimg.com/i/2016-12/vivek-ramaswamy-650-400_650x400_61481621830.jpg."}
                 ] ,
                 typingButton : false
                }

                
        }
        
    typingMethod (){
        this.setState ({
            typingButton : ! this.state.typingButton
        })
    }
   
     render(){
         if (!this.state.typingButton){
      return (
          
         <div >
           
           <div id="brand">
           <nav className="navbar navbar-inverse">
          <div className="container-fluid">
         <div className="navbar-header">
          <a className="navbar-brand" href="#">Find your local guide</a>
           </div>
           </div>
            </nav>
           </div>
          <div id="searchBar">
          <select className="browser-default custom-select custom-select-lg mb-3">
                  
                  <option defaultValue  >Cities</option>
                  <option value="1">Bizete</option>
                  <option value="2">Djerba/Zarzis/Medenin</option>
                  <option value="3">Gabes/Matmata</option>
                  <option value="4">Gasserine/Sebitla/Dogga</option>
                  <option value="5">Kairawen</option>
                  <option value="6">Kebili</option>
                  <option value="7">Kef</option>
                  <option value="8">Nabel/Hammamet/Klébia</option>
                  <option value="9">Sfax/Kerkenah</option>
                  <option value="10">Siliana/Beja</option>
                  <option value="11">Sousse/Monastir/Mahdia</option>
                  <option value="12">Tabarka/Ain-Drahem/Jendouba</option>
                  <option value="13">Tataouin</option>
                  <option value="14">Tozeur/Gafsa</option>
                  <option value="15">Tunis</option>
                  <option value="16">Zaghwan</option>
                
                  </select>
           <select className="custom-select custom-select-sm">
                 <option defaultValue>Languages</option>
                 <option value="1">Arabic</option>
                 <option value="1">Chinese</option>                                      
                 <option value="2">English</option>
                 <option value="3">French</option>
                 <option value="4">German</option>
                 <option value="6">Italian</option>
                 <option value="8">Portuguese</option>
                 <option value="9">Russian</option>
                 <option value="10">Spanish</option>
                 
                 </select>
         <select className="custom-select custom-select-sm">
                 <option defaultValue>Gender</option>
                 <option value="1">Female</option>
                 <option value="2">Male</option>
           </select> 
           </div>  
           {/* <button type="button" id="buttonFind">Find</button> */}
           <div id="buttonFind" >
           <button type="button" className="btn btn-primary" onClick={this.typingMethod.bind(this)}>Search</button>
           </div>
           </div>
      )
         }else{
           return (
               <div>
                   hellooo Renderrrrrr
                   
                   { this.state.dataBase.map(data=>{
                       <FindProfile data={data}/>
                   })} 
               </div>
           )
               
           
         }
      
     }
 }

 export default Search