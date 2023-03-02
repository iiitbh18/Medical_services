import { Box, Button, Grid, Heading, Image } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

export default function NewOnNetmeds() {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const newOnNetmeds = [
        {id: 1}, {id: 2}, {id: 3}, { id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}
    ]
    const handleClick = (val) => {
        let newCount = count;
            if (val === 'forward') {
                newCount++;
                setCount(newCount);
            } else if (val === 'backward') {
                newCount--;
                setCount(newCount);
            }
    
            if (newCount === newOnNetmeds.length-2) {
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
  return (
   <Box>
    </Box>


  )
}
