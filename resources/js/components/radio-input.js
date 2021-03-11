import React from "react";
import { Stack, Radio, RadioGroup } from "@chakra-ui/react";

const RadioInput = ({ name, value, options, onChange }) => (
    <RadioGroup value={value} name={name} onChange={onChange} >
        <Stack direction="row">
            {options.map((option, _i) => (
                <Radio onChange={onChange} key={_i} value={option.value}>
                    {option.label}
                </Radio>
            ))}
        </Stack>
    </RadioGroup>
);

export default RadioInput;
