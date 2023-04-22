import { Box, Heading, Text } from "@chakra-ui/react";


export default function WomensHealth() {
    console.log("Rendering Fitness component");
    return (
      <Box>
        <Heading as="h2" size="lg" mb={4}>
        <center>
        Explore over 1,000 articles on women's health
        </center>
        </Heading>



        <Box display="flex" justifyContent="space-between" marginY={4}>
      <a href="https://www.womenshealthnetwork.com/adrenal-fatigue-and-stress/"><Box as="img" src="https://www.womenshealthnetwork.com/wp-content/uploads/2022/09/Clipboard-Image-11.png" width="93%" />  <b>Adrenal health</b></a>   
      <a href="https://www.womenshealthnetwork.com/bone-health/"><Box as="img" src="https://www.womenshealthnetwork.com/wp-content/uploads/2022/09/shutterstock_12923467.png" width="93%" />  <b>Bone health</b> </a>
      <a href="https://www.womenshealthnetwork.com/thyroid-health/"><Box as="img" src="https://www.womenshealthnetwork.com/wp-content/uploads/2022/09/shutterstock_1249507945.png" width="93%" />   <b>Thyroid health</b></a>
      <a href="https://www.womenshealthnetwork.com/menopause-and-perimenopause/"><Box as="img" src="https://www.womenshealthnetwork.com/wp-content/uploads/2022/09/valerie-blanchett-iajkliejEiU-unsplash.png" width="93%" /> <b>Menopause health</b></a>
    </Box>
    <center >
      <a href="https://www.womenshealthnetwork.com/conditions/"><b color="blue">See All health conditions</b></a>
    </center>
        
      </Box>
    );
  }
  