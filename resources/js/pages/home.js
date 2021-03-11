import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Button } from "@chakra-ui/react";
import PersonTable from "../components/person-table";

const HomePage = () => {
    return (
        <Box>
            <Box d="flex" mb={4} alignItems="center">
                <Heading mr={3}>Kişi Listesi</Heading>
                <Button as={Link} to="/create" size="sm" colorScheme="green">
                    Kişi Oluştur
                </Button>
            </Box>
            <PersonTable />
        </Box>
    );
};

export default HomePage;
