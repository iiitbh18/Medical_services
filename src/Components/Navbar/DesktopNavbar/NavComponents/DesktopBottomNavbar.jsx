import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import Myselect from "./SelectTag";

const BottomNavbar = () => {
  return (
    <Box bg="rgb(57, 91, 100)">
      
    </Box>
  );
};

export default BottomNavbar;

// {
//     <Flex>
//     {navbardata.map((ele) => (
//       <Myselect
//         key={uuid()}
//         placeholder={ele.heading}
//         optionarray={ele.options}
//         width={ele.width}
//       ></Myselect>
//     ))}
//   </Flex>
// }



// const navbardata = [
//   {
//     heading: "Medicine",
//     options: ["All Medicines", "Previously Ordered Products"],
//     photo: "",
//     width: "150px",
//   },
//   {
//     heading: "Wellness",
//     photo: "",
//     width: "150px",
//   },
//   {
//     heading: "Lab Tests",
//     photo: "",
//     width: "100px",
//   },
//   {
//     heading: "Beauty",
//     options: [
//       "Personal Care",
//       "Make-Up",
//       "Hair",
//       "Skin Care",
//       "Tools & Appliances",
//       "Mom & Baby",
//       "Fragnances",
//       "Men's Grooming",
//     ],
//     photo: "",
//     width: "150px",
//   },
//   {
//     heading: "Health Corner",
//     options: ["Health Library", "Patients Alike", "Corona Awareness"],
//     photo: "", 
//     width: "150px",
//   },
// ];