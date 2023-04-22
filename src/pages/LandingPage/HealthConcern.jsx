import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export default function HealthConcern() {
  const healthConcernData = [
    {
      id: 1,
      title: 'Heart Health',
      route: '/heart-health'
    },
    {
      id: 2,
      title: 'Fitness',
      route: '/fitness'
    },
    {
      id: 3,
      title: "Women's Health",
      route: '/womens-health'
    },
    {
      id: 4,
      title: 'Cancer Treatment',
      route: '/cancer-treatment'
    },
    {
      id: 5,
      title: 'Mental Health',
      route: '/mental-health'
    }
  ];

  return (
    <Box p='0 25px' mb='30px'>
      <Box
        display={'flex'}
        alignItems='center'
        justifyContent='space-between'
        mb='30px'
      >
        <Box>
          <Heading as='h2' fontSize='25px' fontWeight='500'>
            Health Concerns
          </Heading>
        </Box>
      </Box>
      <Grid
        overflow={{ base: 'scroll', md: 'hidden' }}
        pb='20px'
        templateColumns={`repeat(${healthConcernData.length},1fr)`}
        gap={3}
      >
        {healthConcernData.map((el) => (
          <Box
            w={{ base: '200px', md: '18vw' }}
            key={el.id}
            bg='#fff'
            h='300px'
            p='30px 20px'
            borderRadius={6}
            boxShadow='md'
            cursor='pointer'
          >
            <Center>
              <Image
                mt='30px'
                h={{ base: '100%', md: '100px' }}
                w='50%'
                src={`/Images/netmedHC${el.id}.jpg`}
              />
            </Center>
            <Center>
              <Text fontWeight={'600'} mt='50px'>
                <Link to={el.route}>
                  {el.title}
                  <Button ml='2' colorScheme='blue' size='sm'>
                    Click here
                    <ChevronRightIcon />
                  </Button>
                </Link>
              </Text>
            </Center>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
