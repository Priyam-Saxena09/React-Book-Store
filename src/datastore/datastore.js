import React, { Component } from "react"
import axios from "../axios-store"

class Table extends Component{
    state={
      stores:[],
      getone:false
    }

    componentDidMount(){
       this.loadone()
    }

    componentDidUpdate(){
      this.loadone()
    }

    loadone = () => {
      axios.get("/stor.json").then((response) => {
        const store = [];
            for(let key in response.data)
            {
                store.push({
                    ...response.data[key],
                    id:key
                })                
            }
            console.log(store)
        this.setState({stores:store,getone:true})
      }).catch((error) => {
        console.log(error)
      })
    }

    del = (id) => {
      axios.delete('/stor/' + id).then((response) => {
      console.log(response.data)
    }).catch((error)=> {
      console.log(error)
    })
  }

    render(){

        let dat = null
        if(this.state.getone)
        {
          dat = this.state.stores.map((li,index) => {
            //console.log(li.id)
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{li.name}</td>
                <td>{li.author}</td>
                <td>{li.date}</td>
                <td><button type="button" onClick={() => this.del(li.id)}>&times;</button></td>
              </tr>
            )
        })
        }
       return(
        <table class="table table-dark mt-5">
        <thead>
          <tr>
             <th scope="col">Sl.No</th>
            <th scope="col">Book Name</th>
            <th scope="col">Book Author</th>
            <th scope="col">Publishing Date</th>
            <th scope="col">Want to Remove?</th>
          </tr>
        </thead>
        <tbody>
    {dat}
    </tbody>
        </table>
       )
    }
}

export default Table
