import React from "react";
import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ current }) => (
    <ChakraBreadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
                Kişi Listesi
            </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{current}</BreadcrumbLink>
        </BreadcrumbItem>
    </ChakraBreadcrumb>
);

export default Breadcrumb;
