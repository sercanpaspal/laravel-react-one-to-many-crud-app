import React, { useState } from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import AddressForm from "./address-form";
import AddressListItem from "./address-list-item";
import { AddIcon } from "@chakra-ui/icons";
import agent from "../agent";

const AddressList = ({ person: { id, addresses = [] } }) => {
    const [items, setItems] = useState(addresses);

    return (
        <SimpleGrid columns={[2, null, 3]} spacing="20px">
            <AddressForm
                address={{ person_id: id }}
                action={(data) => agent.Address.store(data)}
                onSuccess={(address) =>
                    setItems((items) => [address, ...items])
                }
            >
                {(onOpen) => (
                    <Button onClick={onOpen} h="full" minH="80px">
                        <AddIcon mr={2} /> Oluştur
                    </Button>
                )}
            </AddressForm>
            {items.map((item) => (
                <AddressListItem
                    key={item.id}
                    item={item}
                    onEdited={(data) =>
                        setItems((d) =>
                            d.map((i) =>
                                i.id === item.id ? { ...i, ...data } : i
                            )
                        )
                    }
                    onDeleted={() =>
                        setItems((d) => d.filter((i) => i.id !== item.id))
                    }
                />
            ))}
        </SimpleGrid>
    );
};

export default AddressList;
