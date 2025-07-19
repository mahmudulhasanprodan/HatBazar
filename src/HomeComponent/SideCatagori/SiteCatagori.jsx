import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { GoSquareFill } from "react-icons/go";
import SliderPart from '../Slider/SliderPart';
import Flex from "../../CommonComponent/Flex"
import { CatagoriesData } from '../../../JsonData/JsonData';
import { useSelector, useDispatch } from 'react-redux'
import { FeatureProduct } from '../../Redux/ProductSlice/ProductSlice';

const SiteCatagori = ({OnclickCatagori}) => {


const dispatch = useDispatch();
const [allData,setallData] = useState([]);
const[catItem,setcatItem] = useState("");

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
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"gap-x-4 px-4 xl:px-0"}>
            <div className="w-full xl:w-[20%] h-[500px] bg-white hidden md:block">
              <div className="flex gap-x-3 items-center pl-2 pt-2 cursor-pointer">
                <span className="font-bold text-xl">
                  <FaBars />
                </span>
                <h2 className="font-Montserrat font-bold text-2xl">
                  All Products
                </h2>
              </div>
              <div className="flex flex-col mt-4 pl-3">
                {CatagoriesData?.map((item) => (
                  <div className="flex items-center gap-x-2  cursor-pointer" key={item.id} onClick={() => OnclickCatagori(item)}>
                    <span className="text-CommonColor text-xs">
                      <GoSquareFill />
                    </span>
                    <h3 className="font-Roboto shadow-sm pl-2 text-md leading-tight text-gray-500 w-full py-2 hover:bg-slate-600 hover:text-white">
                      {item.catagory}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[60%] realative hidden md:block">
              <SliderPart />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default SiteCatagori
