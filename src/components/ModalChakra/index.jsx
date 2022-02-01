import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function ModalChakra({ children, title, ButtonText, isOpen, onClose, onOpen }) {
  return (
    <>
      {ButtonText && (
        <Button
          onClick={onOpen}
          w={["50%", "50%", "auto"]}
          Button
          variant="ButtonFilledBlue"
          fontSize={["12px", "18px", "20px"]}
          ml={["10px", "15px", "0"]}
        >
          {ButtonText}
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalChakra;
