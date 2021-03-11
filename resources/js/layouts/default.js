import { Container } from "@chakra-ui/layout";
import React from "react";

const DefaultLayout = ({ children }) => (
    <div>
        <Container>{children}</Container>
    </div>
);

export default DefaultLayout;
