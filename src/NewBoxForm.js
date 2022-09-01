import { useState } from 'react';

/** Form for creating a new box item to add to a list.
 *
 * Has state for the color,height,width of the item; on submission,
 * sends {color,height,width} to fn rec'd from parent.
 *
 * BoxList --> NewBoxForm
 */

function NewBoxItemForm({ addItem }) {
  const initialState = { backgroundColor: "", width: 0, height: 0 };
  const [formData, setFormData] = useState(initialState);

  /** Send {name, quantity} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">BackgroundColor:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <button>Add a new item!</button>
    </form>
  );
}

export default NewBoxItemForm;
