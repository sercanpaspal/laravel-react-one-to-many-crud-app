import React from "react";
import Form from "../components/form";
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";

const fields = [
    { name: "address", label: "Adres", type: "textarea", value: "" },
    { name: "post_code", label: "Posta Kodu", type: "text", value: "" },
    { name: "city_name", label: "Şehir", type: "text", value: "" },
    { name: "country_name", label: "Ülke", type: "text", value: "" },
];

const AddressForm = ({
    children,
    action,
    onSuccess = () => {},
    address = {},
    ...props
}) => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const onSubmit = (data, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        action(data)
            .then((address) => {
                toast({ title: "Kayıt başarılı!", status: "success" });
                onSuccess(address);
                onClose();
            })
            .catch(({ errors, message }) => {
                if (errors) {
                    setErrors(errors);
                }
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <>
            {children(onOpen)}

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Adres Formu</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Form
                            fields={fields}
                            initialValues={address}
                            onSubmit={onSubmit}
                            submitButtonText="Kaydet"
                            {...props}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddressForm;
