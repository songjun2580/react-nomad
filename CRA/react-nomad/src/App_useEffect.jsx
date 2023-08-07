import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => { setKeyword(e.target.value) };
  console.log('i run all the time');
  useEffect(() => {
    console.log('CALL THE API');
  }, []);
  useEffect(() => {
    console.log('I RUN WHEN KEYWORD CHANGES');
  }, [keyword]);
  useEffect(() => {
    console.log('I RUN WHEN COUNTER CHANGES');
  }, [counter]);
  useEffect(() => {
    console.log('I RUN WHEN KEYWORD&COUNTER CHANGES');
  }, [keyword,counter]);


  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("SEARCH FOR", keyword);
  //   }
  // }, [keyword]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
