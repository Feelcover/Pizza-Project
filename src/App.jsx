import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import Sort from "./components/Sort";
import "./scss/app.scss";
import data from "./utils/data";

const App = () => {
  
  React.useEffect(()=>{
(    function getData(){
      fetch ('https://63a57314318b23efa793c24a.mockapi.io/Items')
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        console.log(json);
      })

    })()
  },[])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {data.map((item) => (
              <Pizza key={item.id} {...item} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
