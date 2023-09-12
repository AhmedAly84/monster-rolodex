
import './App.css';
import { Component } from 'react';
import { CardList } from './Component/Card-list/Card-list.component';
import { SearchBox } from './Component/Search-box/Search-box.component';


  class App extends Component{
    constructor(){
      super();
      this.state ={
        monsters:[       
        ],
        searchField:""
      }
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response=>Response.json())
      .then(users=>this.setState({monsters:users}))
    }
    render() {
      const {monsters,searchField}= this.state;
      const filteredMonesters= monsters.filter(monster=>monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
      return(
        <div className="App">
         <h1>Monster Rolodex</h1>
     <SearchBox  placeholder='Search Monester'  handelCange={(e)=>{this.setState({searchField:e.target.value})}}/>
         <CardList monsters={filteredMonesters}/>
    </div>
      );
    }
  }


export default App;
