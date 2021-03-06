import React from 'react';
import DisplayInfo from './DisplayInfo.js';

const ColorScheme = ({ styles, changeColor, selectedColor, saveColors, colorSelection }) => {
  const selection = (color => selectedColor === color ? 'colours--circ checked' : 'colours--circ' );
  const checkingIf = (color => selectedColor === color );

  return (
    <div>
      <h3>colour palette</h3>
      <div className="colours">
        <label
          style={styles["primary"]}
          className={selection('primary')}
          onChange={changeColor}
          htmlFor="primary"
        >
          <input
            checked={checkingIf('primary')}
            name="colours"
            id="primary"
            value="primary"
            type="radio"
          />
        </label>
        <label
          style={styles["secondary"]}
          className={selection('secondary')}
          htmlFor="secondary"
        >
          <input
            checked={checkingIf('secondary')}
            onChange={changeColor}
            name="colours"
            id="secondary"
            value="secondary"
            type="radio"
          />
        </label>
        <label
          style={styles["third"]}
          className={selection('third')}
          htmlFor="third"
        >
          <input
            checked={checkingIf('third')}
            onChange={changeColor}
            name="colours"
            id="third"
            value="third"
            type="radio"
          />
        </label>
        <label
          style={styles["fourth"]}
          className={selection('fourth')}
          htmlFor="fourth"
        >
          <input
            checked={checkingIf('fourth')}
            onChange={changeColor}
            name="colours"
            id="fourth"
            value="fourth"
            type="radio"
          />
        </label>
      </div>
      <DisplayInfo display={selectedColor !== ''} >
        <fieldset>
          <h4>Add Colours:</h4>
          <label className="label__icon" htmlFor="colours">
            <i onClick={saveColors} className="fa fa-plus"></i>
            <input
              type="text"
              id="colours"
              name="colours"
              onChange={colorSelection}
              required
            />
          </label>
        </fieldset>
      </DisplayInfo>
    </div>
  )
}

export default ColorScheme;