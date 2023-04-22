import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, Heading, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function ShopByCategory() {
    const showByCategory = [
        {
            id: 1,
            title: 'Veterinary drug',
            path: '/veterinary'
        },
        {
            id: 2,
            title: 'Nutrition Product',
            path: '/nutrition'
        },
        {
            id: 3,
            title: 'Ayurvedic',
            path: '/ayurvedic'
        },
        {
            id: 4,
            title: 'Homeopathy',
            path: '/homeopathy'
        },
        {
            id: 5,
            title: 'Allopathy',
            path: '/allopathy'
        }
    ];

    return (
        <Box p='0 25px' mb='30px'>
            <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
                <Box>
                    <Heading as='h2' fontSize='25px' fontWeight='500'>Shop By Category</Heading>
                </Box>
                <Box>
                    <Link to='/categories' style={{textDecoration: 'none'}}>
                        <Text>View All <ChevronRightIcon/></Text>
                    </Link>
                </Box>
            </Box>
            <Grid overflow={{base: 'scroll', md: 'hidden'}} pb='20px' templateColumns={`repeat(${showByCategory.length},1fr)`} gap={3}>
                {showByCategory.map(((el) => (
                    <Box w={{base: '200px', md: '18vw'}} key={el.id} bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center>
                            <Image h={{base: '120px', md: '180px'}} w='100%' src={process.env.PUBLIC_URL+`/Images/netmedSBC${el.id}.jpg`} />
                        </Center>
                        <Center>
                            <Text mt='20px' fontWeight={'600'}>
                                <Link to={el.path} style={{textDecoration: 'none'}}>
                                    {el.title}
                                    <Button ml="2" colorScheme="blue" size="sm">
                                        Click here
                                    </Button>
                                </Link>
                            </Text>
                        </Center>
                    </Box>
                )))}
            </Grid>
        </Box>
    );
}
