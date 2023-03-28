import {
  Box,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product_API } from "../../../../api";
import { Data } from "../../../../pages/Context/DataContext";
import DelieveryComponent from "./DelieveryComponent";
const InputComponent = () => {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const ref = useRef(null);
  const {handlecurrProduct} = useContext(Data)

  const handleChange = (e) => {
    setInput(e.target.value);
    displayRelated();
  }
  var displayRelated = debounce (function() {
    if(input.length>1) {
      fetch(`${Product_API}?q=${input}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        ref.current.style.display = 'block'
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err,"err");
      })
    }
    else {
      ref.current.style.display = 'none';
    }
  },1000)
  function debounce(fn,delay) {
    let timerId;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            fn()
        }, delay)
    }
  }
  const navigate = useNavigate();
  const showProduct = (el) => {
    setInput('');
      handlecurrProduct(el)
      navigate(`/products/${el.id}`)
  }

  return (
    <Box pos='relative'>
       
    </Box>
  );
};
export default InputComponent;
