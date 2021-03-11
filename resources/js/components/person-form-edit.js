import React from "react";
import { FormControl, FormLabel, Text, Button } from "@chakra-ui/react";
import agent from "../agent";
import PersonForm from "./person-form";
import AddressList from "./address-list";

const PersonFormEdit = ({ person }) => {
    return (
        <PersonForm
            person={person}
            action={(data) => agent.Person.update(person.id, data)}
            submitButtonText="Düzenle"
        >
            <FormControl mt={4}>
                <FormLabel>
                    <Text>Adresler</Text>
                </FormLabel>
                <AddressList person={person} addresses={person.addresses} />
            </FormControl>
        </PersonForm>
    );
};

export default PersonFormEdit;
