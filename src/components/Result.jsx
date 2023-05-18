import React from 'react'

export default function Result(props) {
    const {ntext} = props;
  return (
    <div>
      <div>
            Number of words: {ntext.split(" ").length}<br/>
            <hr className="featurette-divider"/>
            Number of characters: {ntext.length} <br />
            <hr className="featurette-divider"/>
            {0.008*props.ntext.split(" ").length} minutes read
            <hr className="featurette-divider"/>
        </div>

        <div>
            <h2>Preview</h2>
            <p>{ntext.length > 0 ? ntext : "Type something in the textbox above to preview."}</p>
        </div>
    </div>
  )
}
