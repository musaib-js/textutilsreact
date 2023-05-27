import React, { useState } from "react";

export default function Generate(props) {
 document.title = "Textify - Translator"
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("hi");
  const [translation, setTranslation] = useState(null);

  const onChange = (event) => {
    setPrompt(event.target.value);
  };

  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": props.apiKey,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: prompt,
      target: language,
      source: "en",
    }),
  };

  async function translatetext() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTranslation(result.data.translations[0]);
    } catch (error) {
      console.error(error);
    }
  }
  //   async function translatetext() {
  //     try {
  //       const response = await fetch(apiUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${apiKey}`,
  //         },
  //         body: JSON.stringify({
  //           prompt: {prompt},
  //           max_tokens: 100, // Adjust the length of the generated text as needed
  //           temperature: 0.7, // Adjust the temperature to control the randomness of the output
  //         }),
  //       });

  //       const data = await response.json();
  //       console.log(data)
  //     //   return data.choices[0].text.trim();
  //     } catch (error) {
  //       console.error("Error generating text:", error);
  //       throw error;
  //     }
  //   }
  const handleOnClick = () => {
    translatetext();
  };

  const handleLanguageChange = (event)=>{
    setLanguage(event.target.value)
  }
  return (
    <div className="container my-4 shadow-lg p-4">
      <h3>Enter the text below</h3>
      <hr className="featurette-divider" />
      <div className="mb-3">
        <textarea
          value={prompt}
          className="form-control"
          id="exampleFormControlTextArea1"
          placeholder="Your Text Here"
          rows="5"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <select onChange={handleLanguageChange} value = {language} className="form-select" aria-label="Default select example" required>
          <option defaultValue={"hi"}>Translate To</option>
          <option value="hi">Hindi</option>
          <option value="ur">Urdu</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleOnClick}>
          Translate
        </button>
      </div>

      <div className="border border-light-subtle mb-4">
        <h3>Translation</h3>
        <p className="my-2 mb-4">
          {translation != null
            ? translation.translatedText
            : "Please Enter Text to Translate"}
        </p>
      </div>
    </div>
  );
}
