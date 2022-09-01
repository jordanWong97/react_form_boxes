import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


/** List of boxes component.
 *
 * State: boxListData
 *
 * Renders NewBoxForm form and a box component for each box in state.
 *
 * App --> BoxList --> Box, NewBoxForm
 */

function BoxList() {
  const [boxListData, setBoxListData] = useState([]);

  /** Add new box object to list. */
  function addItem(item) {
    let newItem = { ...item, id: uuid() };
    setBoxListData(items => [...items, newItem]);
  }

  /** Removes a box object from list */
  function removeItem(id) {
    const newList = boxListData.filter(box => box.id !== id);
    setBoxListData(newList);
  }

  return (
    <div>
      <NewBoxForm addItem={addItem} />

      {boxListData.map(box =>
        <Box removeItem={removeItem} key={box.id}
          id={box.id}
          height={box.height}
          width={box.width}
          backgroundColor={box.backgroundColor}
        />)}
    </div>

  );
}

export default BoxList;