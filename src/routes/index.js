import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
// import ItemsCard from "../components/cards";
import ApiData from "../components/cards/apiData";
// import Homepage from "../components/Homepage";

// import HeaderBargar from "../common/bargarHeader";
// import Form from "../formType/form";

export default function Main() {
  return (
    <div>
      <Header />
      {/* <Homepage /> */}
      <ApiData/>
      {/* <ItemsCard /> */}
      <Footer />
    </div>
  );
}
