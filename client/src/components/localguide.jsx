import React from 'react'
 

class FindProfile extends React.Component {
       constructor(props){
           super(props)
         
        }
           render (){

              return(
                <div>
                      <h1>{this.props.data.Name}</h1>
                      <h2>{this.props.data.age}</h2>
                      <h3>{this.props.data.gender}</h3>
                      <h4>{this.props.data.languages}</h4>
                                 
                </div>
            )
          } 
       }
export default FindProfile;