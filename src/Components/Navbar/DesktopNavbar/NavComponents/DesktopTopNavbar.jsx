import { Box, Container, Flex, Image } from "@chakra-ui/react";
import UploadButton from "./UploadButton";
import UserButton from "./UserButton";
import InputComponent from "./InputComponent";
import { Link } from "react-router-dom";
import CartNavbar from "./CartNavbar";


const TopNavbar = () => {
  return (
    <>
    <Box
      top="0px"
      position="fixed"
      width={"100%"}
      zIndex="1"
    >
      
      <Container width={"100%"} maxW='100%' bg={"rgb(63, 57, 100)"} paddingBlock="15px" >
        <Flex justifyContent={"center"} gap="20px" alignItems={"center"}>
          <Link to={"/"}>
            <Box paddingRight={"20px"}>
            <Image
                //src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
                src="https://i.postimg.cc/qM9y4VJq/logo192.png"
                alt="MedicalmartLogo"
                w={"168px"}
                minWidth="20px"
                maxWidth="80px"
              ></Image>
            </Box>
          </Link>
          <InputComponent />
          <UploadButton />
          <Link to={"/Cart"}>
            <CartNavbar />
          </Link>

         <UserButton />
        </Flex>
      </Container>
    </Box>
    <Box width={"100%"} height="90px" bg={"rgb(165, 201, 202)"}></Box>
    </>
  );
};

export default TopNavbar;
