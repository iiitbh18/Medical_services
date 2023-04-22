import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import FooterTagsCompiled from "./FooterTagsCompiled";
import NewsLetterSection from './NewsLetterSection'
import {  useSelector } from "react-redux";
const Footer = () => {
  const mobileView = useSelector((state) => state.mobileView);

  if(mobileView) {
    return(
      <></>
    )
  }

  return (
    <Box width={"80%"} margin={"auto"} paddingBlock="34px">
      <Flex>
        <Box>
          <Image
            //src="https://
            src="https://i.postimg.cc/qM9y4VJq/logo192.png"
            alt="Medicalmart logo"
            w={"168px"}
            minWidth="168px"
            maxWidth="168px"
          ></Image>
        </Box>
        <Container size={"md"} centerContent={false}>
          <Text fontSize={"16px"} color="rgb(44, 51, 51)">
            MEDICALMART.COM is one of  India’s  pharmacies startup, delivers All Allopathyy,Ayurvedic,Homeoathy and other important products,
            quality medicines at reasonable prices.
            customers – PAN India.
          </Text>
        </Container>
      </Flex>
      {/* A Line to divert the sections */}
      <Center height="64px">
        <Divider orientation="horizontal" borderColor="rgb(57, 91, 100))" />
      </Center>
      <Flex justifyContent={'space-between'}>
        <FooterTagsCompiled></FooterTagsCompiled>
        <NewsLetterSection></NewsLetterSection>
      </Flex>
      {/* A Line to divert the sections */}
      <Center height="64px">
        <Divider orientation="horizontal" borderColor="rgb(57, 91, 100)" />
      </Center>
      <Flex justifyContent={'space-between'} color='rgb(44, 51, 51)'>
        
        
        <Text fontSize="14px" as={'button'}>Copyright &#169; All Rights Reserved by Aradhna , Bhaskar</Text>
        <Text>This website solemny made for educational purposes, Content for blogs has been taken from different websites</Text>
        
      </Flex>
    </Box>
  );
};

export default Footer;
