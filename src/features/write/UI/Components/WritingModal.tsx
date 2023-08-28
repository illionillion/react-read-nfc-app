import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Spinner, Text } from "@chakra-ui/react";
import type { FC } from "react";

interface WritingModalProps {
    isWriting: boolean
    isWritingModal: boolean
    isError: boolean
    WritingModalClose: () => void  
}

export const WritingModal: FC<WritingModalProps> = ({isWriting, isWritingModal, isError, WritingModalClose}) => {
    return (
        <Modal isCentered size='2xl' closeOnOverlayClick={false} isOpen={isWritingModal} onClose={WritingModalClose}>
            <ModalOverlay />
            <ModalContent h='2xs'>
                <ModalBody h='full' display='flex' justifyContent='center' alignItems='center'>
                    {isWriting ? <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' gap={3}>
                        <Text>書き込み中</Text>
                        <Spinner size='lg' />
                    </Box> : <Text>書き込み完了</Text>
                    }
                    {isError && <Text colorScheme='red'>書き込み失敗</Text>}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' isDisabled={isWriting} onClick={WritingModalClose}>
                        閉じる
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}