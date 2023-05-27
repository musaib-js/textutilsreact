import React, { useState } from 'react'

function WordSearch() {
    const [word, setWord] = useState("")
    const [details, setDetails] = useState(null)
    const changeWord = (event) =>{
        setWord(event.target.value)
    }
    async function fetchDetails(){
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        setDetails(data)
    }
    const handleClick = () =>{
        fetchDetails();
    }
  return (
    <div className="container my-4 shadow-lg p-4" style={{textAlign: "left"}}>
    <h3>Enter the text below</h3>
    <hr className="featurette-divider" />
    <div className="mb-3">
      <input
        type='text'
        className="form-control"
        placeholder="Enter the Word"
        value={word}
        onChange={changeWord}
      />
    </div>
    <div className="mb-3" style={{textAlign: "center"}}>
      <button className="btn btn-primary" onClick={handleClick}>
        Search
      </button>
    </div>

    <div className="border border-light-subtle mb-4 p-4">
      <h3>Details</h3>
        <ul>
            <li className='list-item'>Word: {details!=null?details[0].word:"Enter any word above"}</li>
            {details!=null?details[0].meanings[0] && <li className='list-item'>Meaning: {details != null ? details[0].meanings[0].definitions[0].definition : ""}
             <span className="mx-2 my-2 badge rounded-pill bg-primary">
             {details[0].meanings[0].partOfSpeech}
    <span className="visually-hidden">hidden</span>
  </span> </li>:""}
            {details!=null?details[0].meanings[0].definitions[1] && <li className='list-item'>Meaning II: {details != null ? details[0].meanings[0].definitions[1].definition : ""} <span className="mx-2 my-2 badge rounded-pill bg-primary">
             {details[0].meanings[0].partOfSpeech}
    <span className="visually-hidden">hidden</span>
  </span></li>:""}
            {details!=null?details[0].meanings[1] && <li className='list-item'>Meaning III: {details != null ? details[0].meanings[1].definitions[0].definition : ""} <span className="mx-2 my-2 badge rounded-pill bg-primary">
             {details[0].meanings[1].partOfSpeech}
    <span className="visually-hidden">hidden</span>
  </span></li>:""}
            {details!=null?details[0].meanings[1].definitions[1] && <li className='list-item'>Meaning III: {details != null ? details[0].meanings[1].definitions[1].definition : ""} <span className="mx-2 my-2 badge rounded-pill bg-primary">
             {details[0].meanings[1].partOfSpeech}
    <span className="visually-hidden">hidden</span>
  </span></li>:""}
            <li className='list-item'>Phonetics: {details!=null?details[0].phonetic:"Enter any word above"}</li>
            {details!=null? details[0].phonetics[0] && <li className='list-item'>Pronounciation: <a href={details != null ? details[0].phonetics[0].audio : ""}>{details != null ? <em style= {{fontSize: '24px'}}>&#xf025;</em> : ""}</a></li>:""}
            {details!=null?details[0].phonetics[1] && <li className='list-item'>Pronounciation: <a href={details != null ? details[0].phonetics[1].audio : ""}>{details != null ? <em style= {{fontSize: '24px'}}>&#xf025;</em> : ""}</a></li>:""}
        </ul>
    </div>
  </div>
  )
}

export default WordSearch
