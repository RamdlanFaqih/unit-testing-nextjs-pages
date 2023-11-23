import React from "react";

const Home = () => {
    const [count, setCount] = React.useState(0)
    return (
      <React.Fragment>
        <h2>{count}</h2>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </React.Fragment>
    )
};

export default Home;
