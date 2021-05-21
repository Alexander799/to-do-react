import React from 'react';
import './page.css';
import Field from '../Field/Field';
import UserInput from '../UserInput/UserInput';
import ManagerBlock from '../ManagerBlock/ManagerBlock';

export default class Page extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: { id: '', val: '', complited: false },
         arr: []
      }
      this.setInput = this.setInput.bind(this);
      this.addItem = this.addItem.bind(this);
      this.delItem = this.delItem.bind(this);
      this.taskCompletionStatus = this.taskCompletionStatus.bind(this);
      this.changesLocalStorage = this.changesLocalStorage.bind(this);
   }

   createId(str) {
      let id = 0;
      for (let i = 0; i < str.length; i++) {
         id += str.charCodeAt() * (Math.round(Math.random() * 100));
      }
      return id.toString();
   }

   componentDidMount() {
      this.changesLocalStorage();
   }

   changesLocalStorage(changes = true) {
      const arrRecovery = (changes) ? JSON.parse(localStorage.getItem(localStorage.key(0))) : null;
      if (arrRecovery !== null) {
         this.setState({
            arr: arrRecovery
         });
      } else {
         this.setState({
            arr: []
         });
      }
   }

   setInput(event) {
      const stateVal = this.state.value.val;
      let newId = (stateVal.length > 0) ? this.createId(stateVal) : `${Math.round(Math.random() * 100)}`;
      this.setState({
         value: { id: newId, val: event, complited: false }
      })
   }

   addItem(event) {
      if (this.state.value.val === "") return;
      const tempArr = this.state.arr;
      tempArr.push(this.state.value);
      this.setState({
         arr: tempArr,
         value: { id: "", val: "", complited: false }
      });
      tempArr.splice();
      event.preventDefault();
   }

   delItem(event) {
      const arrDelIt = this.state.arr;
      for (let i = 0; i < arrDelIt.length; i++) {
         if (arrDelIt[i].id === event) {
            arrDelIt.splice(i, 1);
            this.setState({
               arr: arrDelIt
            });
            arrDelIt.splice();
            break;
         }
      }
   }

   taskCompletionStatus(event, idParam, valParam) {
      const arrCompl = this.state.arr;
      let newValue = {};
      if (event) {
         newValue = { id: idParam, val: valParam, complited: true };
      }
      if (!event) {
         newValue = { id: idParam, val: valParam, complited: false };
      }
      for (let i = 0; i < arrCompl.length; i++) {
         if (arrCompl[i].id === idParam) {
            arrCompl.splice(i, 1, newValue);
            this.setState({
               arr: arrCompl
            });
            arrCompl.splice();
            break;
         }
      }
   }

   render() {
      return (
         <div className='page'>
            <Field arr={this.state.arr} idDelItem={this.delItem} completeStatus={this.taskCompletionStatus} />
            <UserInput value={this.state.value.val} input={this.setInput} add={this.addItem} />
            <ManagerBlock list={this.state.arr} changes={this.changesLocalStorage} />
         </div>
      );
   }
}