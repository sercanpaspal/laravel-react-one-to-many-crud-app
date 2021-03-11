import React, { useState, useEffect } from "react";
import {
    Button,
    Table,
    Tbody,
    Thead,
    Tr,
    Th,
    TableCaption,
} from "@chakra-ui/react";
import agent from "../agent";
import PersonTableRow from "./person-table-row";

const PersonTable = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        agent.Person.paginate(page)
            .then((response) => {
                setData((data) => [...data, ...response.data]);
                setMeta(response.meta);
            })
            .finally(() => setLoading(false));
    }, [page]);

    return (
        <Table size="sm" variant="striped" colorScheme="gray">
            {meta && page < meta.last_page && (
                <TableCaption>
                    <Button
                        size="xs"
                        isLoading={loading}
                        colorScheme="teal"
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Daha fazla yükle
                    </Button>
                </TableCaption>
            )}
            <Thead>
                <Tr>
                    <Th>İsim</Th>
                    <Th>Doğum Tarihi</Th>
                    <Th>Cinsiyet</Th>
                    <Th isNumeric>Adres Sayısı</Th>
                    <Th>İşlem</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data &&
                    data.map((person) => (
                        <PersonTableRow
                            key={person.id}
                            person={person}
                            onDeleted={() =>
                                setData((d) =>
                                    d.filter((i) => i.id !== person.id)
                                )
                            }
                        />
                    ))}
            </Tbody>
        </Table>
    );
};

export default PersonTable;
