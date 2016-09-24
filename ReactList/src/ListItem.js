import React,{Component} from 'react';

var ListItem = React.createClass({
    render:function(){
        return(
            <div>
                <button onClick={this.props.borrar.bind(this.props.itemText,this)}>X</button>
                <label>{this.props.itemText}</label>
            </div>
        )
    }
});

export default ListItem;