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
            src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg"
            alt="NetmedsLogo"
            w={"168px"}
            minWidth="168px"
            maxWidth="168px"
          ></Image>
        </Box>
        <Container size={"md"} centerContent={false}>
          <Text fontSize={"16px"} color="rgb(44, 51, 51)">
            Netmeds.com is one of India’s most trusted pharmacies, dispensing
            quality medicines at reasonable prices to over 7 million happy
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
        <Text fontSize="14px" as={'button'}>Medicine</Text>
        <Text fontSize="14px" as={'button'}>Wellness</Text>
        <Text fontSize="14px" as={'button'}>Lab Tests</Text>
        <Text fontSize="14px" as={'button'}>Beauty</Text>
        <Text fontSize="14px" as={'button'}>Copyright &#169; All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
