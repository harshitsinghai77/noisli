import { Box, Button, Layer, Image, Heading } from "grommet";
import { themePrimaryColor } from "../themes";
import HurrayGif from "../images/giphy.webp";
import "../css/alertbox.css";

function AlertBox(props) {
  const { show, onClose } = props;
  return (
    <Box>
      {show && (
        <Layer onEsc={onClose} onClickOutside={onClose} animation="slide">
          <Heading level={3} margin="medium" alignSelf="center">
            Yeah, you did it. Take 15 min break...
          </Heading>
          <Image fit="cover" src={HurrayGif} className="alertbox-img" />
          <Button
            alignSelf="center"
            margin="medium"
            label="I'm taking a break"
            onClick={onClose}
            color={themePrimaryColor}
          />
        </Layer>
      )}
    </Box>
  );
}

export default AlertBox;