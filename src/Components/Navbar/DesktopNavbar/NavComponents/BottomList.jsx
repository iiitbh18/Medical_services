import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const BottomList = () => {
  const ListArray = [
    "Ayurvedic",
    "Homeopathy",
    "Allopathic",
    "Nutrition Product",
    "Veterinary drug",
    
    "Fitness",
    "Heart Health",
    "Fitness",
    "Womens health",
    "Cancer treatment",
    "Mental health",
  ];
  return (
    <Box bg='rgb(165, 201, 202)' padding={'10px'} >
      <Container size={"5xl"}>
        <Flex margin={"auto"} justifyContent="center" gap={"4%"}>
          {ListArray.map((ele, index) => {
            return (
              <Link key={index} to={`/products`}>
                <Text fontSize={"13px"} whiteSpace='nowrap'>
                  {ele}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};
export default BottomList;
