import React, { useEffect } from 'react'
import Banner from '../../HomeComponent/Banner/Banner'
import SiteCatagori from '../../HomeComponent/SideCatagori/SiteCatagori'
import BestSellingProduct from '../../HomeComponent/BestSellingProduct/BestSellingProduct'
import { useState, createContext } from "react";
import { useSelector } from 'react-redux';

export const CatagoriContex = createContext();



const Home = () => {

const[catItem,setcatItem] = useState("");

const [allData,setallData] = useState([]);


const{CartItem,Status}= useSelector((state) => state.Product);


useEffect(() => {
  if (Status === "IDLE") {
    setallData(CartItem.products);
  }
}, [Status, CartItem.products]);
  
// HandleCatItem Function Start Here

const HandleCatItem = (item) => {  
   if(item){
      const CatagoriData = allData.filter((catitem) =>
         catitem.category.toLowerCase() === (item.catagory.toLowerCase())
      );
      setcatItem(CatagoriData);
      
   }else{
      console.log("item Nai");
      
   }
};

  return (
    <>
      <Banner />
        <SiteCatagori OnclickCatagori ={HandleCatItem}/>
      <CatagoriContex.Provider value={catItem}>
        <BestSellingProduct />
      </CatagoriContex.Provider>
    </>
  );
}

export default Home
