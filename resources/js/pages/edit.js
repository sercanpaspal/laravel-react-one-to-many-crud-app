import React, { useEffect, useState } from "react";
import { Heading, Box, Text } from "@chakra-ui/layout";
import history from "../history";
import agent from "../agent";
import Breadcrumb from "../components/breadcrumb";
import PersonFormEdit from "../components/person-form-edit";
import PersonDeleteButton from "../components/person-delete-button";
import { Button } from "@chakra-ui/button";
import LoadingSkeleton from "../components/loading-skeleton";

const EditPage = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);

    const id = match.params.id;

    useEffect(() => {
        setLoading(true);
        agent.Person.edit(id)
            .then((person) => setPerson(person))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <Box>
            <Breadcrumb current={"Kişi Düzenle"} />
            <Box d="flex" mb={4} alignItems="center">
                <Heading mr={3}>Kişi Düzenle</Heading>
            </Box>

            {loading ? (
                <LoadingSkeleton />
            ) : person ? (
                <>
                    <PersonFormEdit person={person} />

                    <PersonDeleteButton
                        person={person}
                        onDeleted={() => history.push("/")}
                    >
                        {(onDelete, loading) => (
                            <Button
                                onClick={onDelete}
                                isLoading={loading}
                                variant="outline"
                                colorScheme="red"
                            >
                                Kişiyi Sil
                            </Button>
                        )}
                    </PersonDeleteButton>
                </>
            ) : (
                <Text>Person not found!</Text>
            )}
        </Box>
    );
};

export default EditPage;
