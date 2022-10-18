import * as React from "react";
import Display from "../Display/Display";
import moviesData from "../Movies/Movies";

function App() {
  return (
    <div>
      <Display moviesList={moviesData} />
    </div>
  );
}
export default App;
