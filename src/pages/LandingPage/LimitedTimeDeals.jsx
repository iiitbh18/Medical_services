import { ChevronRightIcon, TimeIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Heading, Image, Link, Text, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { setCartProduct } from '../../Redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Data } from '../Context/DataContext';
import { Cart_API, Home_API } from '../../api';

export function LimitedTimeDeals() {
    const [hour, setHour] = useState(22);
    const [minutes, setMinutes] = useState(29);
    const [seconds, setSeconds] = useState(59);
    const [limitedTimeData, setLimitedTimeData] = useState([]);
    const [count, setCount] = useState(0);
    const ref = useRef();
    const timeref = useRef(null);
    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
    const { handlecurrProduct } = useContext(Data);

    useEffect(() => {
        clearInterval(timeref.current);
        timeref.current = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000)
    }, [])

    useEffect(() => {
        if (hour === 0) {
            if (minutes === 0) {
                if (seconds === 0) {
                    clearInterval(timeref.current);
                }
            }
        }
        if (seconds === -1) {
            setSeconds(59);
            setMinutes((prev) => prev - 1)
        }
        if (minutes === -1) {
            setMinutes(59);
            setHour((prev) => prev - 1);
        }
    }, [seconds])
    const getData = () => {
        // console.log('here')
        fetch(`${Home_API}?_page=1&_limit=10`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res, 'res')
                setLimitedTimeData(res);
            })
    }
    const getCartData = () => {
        fetch(Cart_API)
            .then((res) => res.json())
            .then((res) => {
                setCartData(res);
            })
    }

    useEffect(() => {
        getData();
        getCartData();
    }, [])
    const handleClick = (val) => {
        let newCount = count;
        if (val === 'forward') {
            newCount++;
            setCount(newCount);
        } else if (val === 'backward') {
            newCount--;
            setCount(newCount);
        }

        if (newCount === limitedTimeData.length - 4) {
            setCount(0);
            ref.current.style.transform = 'translate(0%)';
            return;
        }
        if (newCount === -1) {
            setCount(0);
            ref.current.style.transform = `translate(0%)`;
            return;
        }
        ref.current.style.transform = `translate(-${newCount * 20.2}%)`;
    }
    const toast = useToast();
    const handleAdd = (item) => {
        const check = cartData.filter(allItem => allItem.id === item.id)
        if (check.length === 0) {
            axios.post(Cart_API, item)
                .then(() => {
                    dispatch(setCartProduct(item))
                    toast({
                        title: 'Item added to cart',
                        status: 'success',
                        isClosable: true,
                    })
                })
                .catch((err) => {
                    console.log(err)
                    toast({
                        title: 'Item is already in cart',
                        status: 'error',
                        isClosable: true,
                    })
                })
        }
        else {
            toast({
                title: 'Item is already in cart',
                status: 'error',
                isClosable: true,
            })
        }
    }
    const navigate = useNavigate();
    const showProduct = (el) => {
        handlecurrProduct(el)
        navigate(`/products/${el.id}`)
    }

    return (
       
           
                        <Box></Box>
    )
}
