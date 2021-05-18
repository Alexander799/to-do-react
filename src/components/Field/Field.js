import React from 'react';
import LiItem from '../LiItem/LiItem';

export default class Field extends React.Component {
   /* constructor(props) {
      super(props);
   } */

   render() {
      const list = this.props.arr.map((item) =>
         <LiItem
            key={item.id}
            val={item.val}
            idDelItem={this.props.idDelItem}
            idElement={item.id}
            completeStatus={this.props.completeStatus}
            isDone={item.complited}
         />
      );
      return (
         <ol className='page__field'>
            {list}
         </ol>
      );
   }
}