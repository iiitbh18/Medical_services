import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Circle, Grid, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

export default function() {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const [timing, setTiming] = useState('');
    const trending = [
        {id: 1}, {id: 2}, {id: 3}, { id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, { id: 9}, {id: 10}
    ]
    const handleClick = (val) => {
        setTiming(clearTimeout(timing));
        let newCount = count;
            if (val === 'forward') {
                newCount++;
                setCount(newCount);
            } else if (val === 'backward') {
                newCount--;
                setCount(newCount);
            }
    
            if (newCount === trending.length-2) {
                setCount(0);
                ref.current.style.transform = 'translate(0%)';
                return;
            }
            if (newCount === -1) {
                setCount(0);
                ref.current.style.transform = `translate(0%)`;
                return;
            }
            ref.current.style.transform = `translate(-${newCount*33.7}%)`;
    }
    const setTimer = () => {
		setTiming(clearTimeout(timing));
		setTiming(
			setTimeout(() => {
				setCount(count + 1);
				handleClick('forward');
			}, 3000),
		);
	};
	useEffect(setTimer, [count]);
  return (
   <Box></Box>
    
  )
}
