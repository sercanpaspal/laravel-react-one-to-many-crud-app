import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Text, ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import AddressForm from "./address-form";
import agent from "../agent";
import AddressDeleteButton from "./address-delete-button";

const AddressListItem = ({ item, onEdited, onDeleted }) => {
    return (
        <Box
            d={"flex"}
            flexDirection={"column"}
            borderRadius="md"
            bg="gray.100"
            p={3}
        >
            <Box flexGrow={1} fontSize={"sm"} mb={3}>
                <Text>{item.address}</Text>
                <Text>{item.post_code}</Text>
                <Text fontWeight={"bold"}>
                    {item.city_name}, {item.country_name}
                </Text>
            </Box>
            <ButtonGroup isAttached variant="outline">
                <AddressForm
                    address={item}
                    onSuccess={onEdited}
                    action={(data) => agent.Address.update(item.id, data)}
                >
                    {(onOpen) => (
                        <Button
                            onClick={onOpen}
                            colorScheme="teal"
                            w="full"
                            mr="-px"
                            size="sm"
                        >
                            Düzenle
                        </Button>
                    )}
                </AddressForm>
                <AddressDeleteButton address={item} onDeleted={onDeleted}>
                    {(onDelete, loading) => (
                        <IconButton
                            onClick={onDelete}
                            isLoading={loading}
                            size="sm"
                            colorScheme="red"
                            icon={<DeleteIcon />}
                        />
                    )}
                </AddressDeleteButton>
            </ButtonGroup>
        </Box>
    );
};

export default AddressListItem;
