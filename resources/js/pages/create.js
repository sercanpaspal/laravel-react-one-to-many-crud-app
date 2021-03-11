import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import agent from "../agent";
import PersonForm from "../components/person-form";
import Breadcrumb from "../components/breadcrumb";
import history from "../history";

const CreatePage = () => (
    <Box>
        <Breadcrumb current={"Kişi Oluştur"} />
        <Box d="flex" mb={4} alignItems="center">
            <Heading mr={3}>Kişi Oluştur</Heading>
        </Box>

        <PersonForm
            action={(data) => agent.Person.store(data)}
            onSuccess={(person) =>
                setTimeout(() => history.push(`/${person.id}/edit`), 200)
            }
            submitButtonText="Oluştur"
        />
    </Box>
);
export default CreatePage;
