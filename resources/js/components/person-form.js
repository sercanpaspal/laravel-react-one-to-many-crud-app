import React from "react";
import Form from "../components/form";
import { useToast } from "@chakra-ui/react";

const fields = [
    { name: "name", label: "İsim", type: "text", value: "" },
    { name: "birthday", label: "Doğum Tarihi", type: "date", value: "" },
    {
        name: "gender",
        label: "Cinsiyet",
        type: "radio",
        options: [
            { value: "0", label: "Kadın" },
            { value: "1", label: "Erkek" },
        ],
        value: "",
    },
];

const PersonForm = ({
    action,
    onSuccess = () => {},
    person = {},
    ...props
}) => {
    const toast = useToast();

    const onSubmit = (data, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        action(data)
            .then((person) => {
                toast({ title: "Kayıt başarılı!", status: "success" });
                onSuccess(person);
            })
            .catch(({ errors, message }) => {
                if (errors) {
                    setErrors(errors);
                }
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <Form
            fields={fields}
            initialValues={person}
            onSubmit={onSubmit}
            {...props}
        />
    );
};

export default PersonForm;
