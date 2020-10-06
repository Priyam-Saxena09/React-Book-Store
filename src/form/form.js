import React, { Component } from "react"
import Input from "./input"
import TextArea from "./textarea"
import "../form/form.css"
import Datastore from "../datastore/datastore"
import axios from "../axios-store"

class Form extends Component{
    state={
        controls:{
        name:{value:""},
        author:{value:""},
        date:{value:""},
        desc:{value:""}
        },
        lis:[],
        aler:false
    }

    takeval = (event,type) => {
        const updateone = {
            ...this.state.controls
        }
        updateone[type].value = event.target.value
        const finalone = updateone
        this.setState({controls:finalone})        
    }

    submitfin = () => {
        const updateone = {
            ...this.state.controls
        }
        let lis=this.state.lis
        if(updateone["name"].value==="" || updateone["author"].value==="" || updateone["date"].value==="" || updateone["desc"].value==="")
        {
            this.setState({aler:true})
        }
        else
        {
            const finalone = {
                              "name":updateone["name"].value,
                              "author":updateone["author"].value,
                              "date":updateone["date"].value,
                              "desc":updateone["desc"].value
                            }
            axios.post("/stor.json",finalone).then(() => {
                console.log(finalone)
                lis.push(finalone)
                this.setState({lis:lis})
            }).catch(() => {
                this.setState({aler:true})
            })
           
        }
    }
    render(){
        let head = (
                <h1 className="display-2 mb-5">
                    Welcome to the Book Store
                </h1>
        )
        let ale = null
        if(this.state.aler)
        {
            ale=( <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> please Fill All the Details.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)
        }
       
        return(
            
            <div className="container-fluid">
                {ale}
                {head}
                <form onSubmit={this.submitfin} className="mt-5 mb-5">
                    <Input name="Book Name" type="text" id="exampleInputEmail1" takeval={(event) =>this.takeval(event,"name")} />
                    <Input name="Book Author" type="text" id="exampleInputEmail1" takeval={(event) =>this.takeval(event,"author")} />
                    <Input name="Publishing Date" type="date" id="exampleInputEmail1" typ="dateval" takeval={(event) =>this.takeval(event,"date")}/>
                    <TextArea name="Description" id="exampleFormControlTextarea1" typ="descval" takeval={(event) =>this.takeval(event,"desc")}/>
                    <button onClick={this.submitfin} type="button" class="btn btn-outline-primary">Submit</button>
                </form>  
                <Datastore lis = {this.state.lis} />
            </div>                      
        )
    }

}

export default Form