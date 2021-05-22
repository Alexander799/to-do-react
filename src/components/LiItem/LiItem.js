import React from 'react';
import './li-item.css';

export default class LiItem extends React.Component {
   constructor(props) {
      super(props);
      this.changingCompletion = this.changingCompletion.bind(this);
      this.deleteTask = this.deleteTask.bind(this, this.props.idElement);
   }

   changingCompletion(event) {
      this.props.completeStatus(event.target.checked, this.props.idElement, this.props.val);
   }

   deleteTask(event) {
      this.props.idDelItem(event);
   }

   render() {
      const styleText = (this.props.isDone) ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
      return (
         <li className='page__list-item'>
            <input className='page__complited-task' type="checkbox" onChange={this.changingCompletion} defaultChecked={this.props.isDone} />
            <span className='page__task-text' style={styleText}>{this.props.val}</span>
            <span className='page__delete-task' onClick={this.deleteTask}>&#10006;</span>
         </li>
      );
   }
}