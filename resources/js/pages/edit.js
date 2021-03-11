import React, { useEffect, useState } from "react";
import { Heading, Box } from "@chakra-ui/layout";
import agent from "../agent";
import Breadcrumb from "../components/breadcrumb";
import PersonFormEdit from "../components/person-form-edit";

const EditPage = ({ match }) => {
    const [person, setPerson] = useState(null);

    const id = match.params.id;

    useEffect(() => {
        agent.Person.edit(id).then((person) => setPerson(person));
    }, [id]);

    return person ? (
        <Box>
            <Breadcrumb current={"Kişi Düzenle"} />
            <Box d="flex" mb={4} alignItems="center">
                <Heading mr={3}>Kişi Düzenle</Heading>
            </Box>

            <PersonFormEdit person={person} />

        </Box>
    ) : (
        "Person not found!"
    );
};

export default EditPage;
