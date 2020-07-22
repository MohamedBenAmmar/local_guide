import React from 'react'
import ReactDOM from 'react-dom';
import Search from "./components/searchbar.jsx"
//import FindProfile from "./components/guideProfiles.jsx"

class App extends React.Component {

   constructor(props){
       super(props)
   }

    render(){
     return (
        <div>
            <Search/>
        </div>
     )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))