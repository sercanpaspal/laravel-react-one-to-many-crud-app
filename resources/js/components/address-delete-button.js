import React from "react";
import agent from "../agent";
import DeleteButton from "./delete-button";

const AddressDeleteButton = ({ address, ...props }) => {
    return (
        <DeleteButton
            title="Adresi Sil"
            message={`Adresi silmek isteğinizden emin misiniz?`}
            action={() => agent.Address.destroy(address.id)}
            {...props}
        />
    );
};

export default AddressDeleteButton;
