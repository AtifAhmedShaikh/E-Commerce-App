import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/containers/Container";
import Heading from "../wrappers/Heading";
import UsersListTable from "../components/tables/UsersListTable";
import ProductsListTable from "../components/tables/ProductsListTable";
import PropTypes from 'prop-types'
import OrdersTables from "../components/tables/OrdersTables";
import AddNewProduct from "../components/modals/AddNewProduct";
const StatWrapperBox = ({ label, value }) => {
  return (
    <div className="box py-3 w-1/4 text-center rounded-md border border-gray-400 bg-gray-200 hover:bg-gray-300">
      <h4 className="font-extrabold text-2xl text-teal-500">{value}</h4>
      <span className="Total Sales font-semibold text-blue-600">{label}</span>
    </div>
  );
};
const Dashboard = () => {
const [isShow,setIsShow]=useState(true);
  const obj = [
    { label: "Total Sales", value: 5500 },
    { label: "Total Products", value: 65 },
    { label: "Total Orders", value: 11 },
    { label: "Pending Orders", value: 4 },
    { label: "Completed Orders", value: 7 },
    { label: "Total  Users", value: 129 },
  ];
  return (
    <React.Fragment>
      <Header />
      <Container className="w-full flex justify-start items-center flex-col">
        <Heading label="stats" />
        <div className="flex gap-4 flex-wrap justify-center items-center w-full">
          {obj.map((item) => {
            return (
              <StatWrapperBox
                key={item.label}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </div>
        <Heading label="App Users List" />
          <UsersListTable/>
          <Heading label="Products List " />
          <ProductsListTable/>
          <Heading label="Orders " />
          <OrdersTables/>
          <button onClick={()=>setIsShow(true)}>Toggle</button>
          <AddNewProduct open={isShow} setOpen={setIsShow}/>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
StatWrapperBox.propTypes={
  label:PropTypes.string,
  value:PropTypes.number,
}
export default Dashboard;