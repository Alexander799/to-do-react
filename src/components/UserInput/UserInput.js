import React from 'react';
import './user-input.css';

export default class UserInput extends React.Component {
   constructor(props) {
      super(props);
      this.userEnter = this.userEnter.bind(this);
      this.addItem = this.addItem.bind(this);
      this.addItemPressKey = this.addItemPressKey.bind(this);
   }

   userEnter(event) {
      this.props.input(event.target.value);
   }

   addItem(event) {
      this.props.add(event);
      event.preventDefault();
   }

   addItemPressKey(event) {
      if (event.key === 'Enter') {
         this.props.add(event);
         event.preventDefault();
      }
   }

   render() {
      return (
         <div className='page__user-input'>
            <input className='page__task-input' value={this.props.value} type="text" onChange={this.userEnter} onKeyPress={this.addItemPressKey} autoFocus />
            <input className='page__add-task' type="button" value="Добавить" onClick={this.addItem} />
         </div>
      );
   }
}