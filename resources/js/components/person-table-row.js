import React from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    Button,
    ButtonGroup,
    IconButton,
    Tr,
    Td,
} from "@chakra-ui/react";
import moment from "moment";
import { DeleteIcon } from "@chakra-ui/icons";
import PersonDeleteButton from "./person-delete-button";

const PersonTableRow = ({ person, onDeleted }) => {
    return (
        <Tr>
            <Td>{person.name}</Td>
            <Td>{moment(person.birthday).format("DD/MM/Y")}</Td>
            <Td>{person.genderText}</Td>
            <Td isNumeric>
                <Badge colorScheme="teal">{person.addresses_count} Adres</Badge>
            </Td>
            <Td>
                <ButtonGroup size="xs" isAttached variant="outline">
                    <Link to={`/${person.id}/edit`}>
                        <Button mr="-px">Düzenle</Button>
                    </Link>
                    <PersonDeleteButton person={person} onDeleted={onDeleted}>
                        {(onDelete, loading) => (
                            <IconButton
                                ml={2}
                                onClick={onDelete}
                                isLoading={loading}
                                size="xs"
                                color="red"
                                icon={<DeleteIcon />}
                            />
                        )}
                    </PersonDeleteButton>
                </ButtonGroup>
            </Td>
        </Tr>
    );
};

export default PersonTableRow;
