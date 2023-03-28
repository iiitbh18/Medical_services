import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
// Import the CustomButton component
import { Button } from "@chakra-ui/react";


export default function ShopByCategory() {
    const showByCategory = [
        {
            id: 1,
            title: 'Veterinary drug'
        },

        {
            id: 2,
            title: 'Nutrition Product'
        },
        {
            id: 3,
            title: 'Ayurvedic'
        },
        {
            id: 4,
            title: 'Homeopathy'
        },
        {
            id: 5,
            title: 'Allopathy '
        }
    ]
  return (
    <Box p='0 25px' mb='30px'>
        <Box display={'flex'} alignItems='center' justifyContent='space-between' mb='30px'>
            <Box>
            <Heading as='h2' fontSize='25px' fontWeight='500'>Shop By Category</Heading>
            </Box>
            <Box>
                <Link color='#395B64' style={{textDecoration: 'none'}} ><Text>View All <ChevronRightIcon/></Text></Link>
            </Box>
        </Box>
        <Grid overflow={{base: 'scroll', md: 'hidden'}} pb='20px' templateColumns={`repeat(${showByCategory.length},1fr)`} gap={3}>
            {
                showByCategory.map(((el, index) => (
                    <Box w={{base: '200px', md: '18vw'}} key={el.id} bg='#fff' p='30px 20px' borderRadius={6} boxShadow='md' cursor='pointer'>
                        <Center><Image h={{base: '120px', md: '180px'}} w='100%' src={process.env.PUBLIC_URL+`/Images/netmedSBC${index+1}.jpg`}></Image></Center>
                        <Center><Text mt='20px' fontWeight={'600'}>
                        <Link key={index} to={`/products`}>
        {el.title}
        <Button ml="2" colorScheme="blue" size="sm">
            Click here
        </Button>
       
    </Link>
                        </Text></Center>
                    </Box>                  
                )))
            }
        </Grid>
    </Box>
  )
}
