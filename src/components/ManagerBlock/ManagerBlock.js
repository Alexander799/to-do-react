import React from 'react';
import './manager-block.css';

export default class ManagerBlock extends React.Component {
   constructor(props) {
      super(props);
      this.saveList = this.saveList.bind(this);
      this.clearList = this.clearList.bind(this);
   }

   saveList(event) {
      const length = this.props.list.length;
      if (localStorage.length > 0) localStorage.clear();
      if (length > 0) {
         const value = JSON.stringify(this.props.list);
         localStorage.setItem(Math.round(Math.random() * 100), value);
      }
      event.preventDefault();
   }

   clearList(event) {
      const arrChanges = JSON.parse(localStorage.getItem(localStorage.key(0)));
      if (arrChanges !== null) {
         localStorage.clear();
         this.props.changes(true);
      }
      event.preventDefault();
   }

   render() {
      return (
         <div className="page__manager-block">
            <input className="page__clear-list" type="button" value="Очистить" onClick={this.clearList} />
            <input className="page__save-list" type="button" value="Сохранить" onClick={this.saveList} />
         </div>
      );
   }
}