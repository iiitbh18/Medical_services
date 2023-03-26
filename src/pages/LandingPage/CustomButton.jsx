import { Button } from "@chakra-ui/react";

function CustomButton(props) {
  const { buttonText, onClick } = props;
  return (
    <Button ml="2" colorScheme="blue" size="sm" onClick={onClick}>
      hiii hello
    </Button>
  );
}

export default CustomButton;