import React from "react";
import agent from "../agent";
import DeleteButton from "./delete-button";

const PersonDeleteButton = ({ person, ...props }) => {
    return (
        <DeleteButton
            title="Kişiyi Sil"
            message={`${person.name} isimli kişiyi silmek isteğinizden emin misiniz?`}
            action={() => agent.Person.destroy(person.id)}
            {...props}
        />
    );
};

export default PersonDeleteButton;
