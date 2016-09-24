import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

var Hola = React.createClass({
  getInitialState: function(){
    return {
        initialItems:[
            "Argentina",
            "Bolivia",
            "Brasil",
            "Colombia",
            "Chile",
            "Ecuador",
            "Paraguay",
            "Peru",
            "Uruguay",
            "Venezuela"
        ],
        items:[]
    }  
  },
  
  componentWillMount: function(){
      this.setState({
          items: this.state.initialItems
      });
  },
  
  filterList: function(event){
      var updateList = this.state.initialItems;
      updateList = updateList.filter(function(item){
          return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({
          items: updateList
      });
  },
  
  estadoBorrar:function(elemento,e){
    var lista = this.state.items;
    var indice = lista.indexOf(elemento.props.itemText);
    lista.splice(indice,1);
    this.setState({items:lista});
    
    var listaCompleta = this.state.initialItems;
    if(listaCompleta.length>lista.length){
        var indice = listaCompleta.indexOf(elemento.props.itemText);
        listaCompleta.splice(indice,1);
    }
    this.setState({initialItems:listaCompleta});  
  },
  
  render: function() {
    return (
   	    <div>
            <input type="text" onChange={this.filterList} />
            <List items={this.state.items} borrar={this.estadoBorrar}/>
        </div>
    );
  }
});

var List = React.createClass({
    pintar:function(item){
        return(
            <li key={item}>
                <div>
                    <ListItem itemText={item} borrar={this.props.borrar}/>
                </div>
            </li>
        );
    },
    
    render:function(){
        return(
            <ul>{this.props.items.map(this.pintar)}</ul>
        );
    }
});

export default Hola;
