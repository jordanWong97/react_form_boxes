
/** Box component.
 *
 * Props: id, backGroundColor, height, width
 *
 * Event: removeItem (remove box)
 *
 * Returns a box div with a button to remove element.
 *
 * BoxList --> Box
*/

function Box({ id, backgroundColor, height, width, removeItem }) {
  function remove() { removeItem(id); }

  const boxStyle = {
    backgroundColor,
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;