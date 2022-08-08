import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { AutoComplete, Input } from 'antd';
import { ProductType } from '../type/Products';
import { listProduct } from '../api/products';



const SearchCli = () => {
const [pro, setPro] = useState([])
const [inputValue, setInputValue] = useState('');
useEffect(()=>{
  const getData = async ()=> {
      const {data} = await listProduct()
      setPro(data)
  }
  getData()
},[])

const onSelect = (data, option) => {  
  // setPro(option);

  // setInputValue(option.label);
};

const onChange = (data, option) => {
  // setInputValue(data);
  // console.log('123');
  
  // setPro(option); // to remove selected option when user types  something wich doesn't match with any option
};
const options =  pro.map(( user ) => ({
  value: user.name,
  label: (
    <>
      {user.name}
      </>
  )
}))

  return (
    <AutoComplete
    style={{
      width: 350
    }}
    autoFocus={true}
    options={options}
    placeholder="Tìm kiếm sản phẩm"
    filterOption={(inputValue, option) =>
      option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    // onSelect={onSelect}
    //     onChange={onChange}
  />
  );
};


export default SearchCli;