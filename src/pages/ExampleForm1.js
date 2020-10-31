import React from "react";
import components from "../componentLibrary";

const {
  FrForm,
  FrHeader,
  FrContainer,
  FrSegment,
  FrFormGroup,
  FrButton,
  FrFormInput,
} = components;

export const ExampleForm1 = (props) => {
  return (
    <FrContainer>
      <FrSegment>
        <FrForm>
          <FrHeader as="h1" text="Regular JSX" />
          <FrFormGroup widths="equal">
            <FrFormInput label={"My budget goal"} handleBlur={console.log} />
            <FrFormInput
              label={"My achieved budget"}
              handleBlur={console.log}
            />
            <FrFormInput label={"Next year's goal?"} handleBlur={console.log} />
          </FrFormGroup>
          <FrFormInput
            size="small"
            label={"Last year's goal?"}
            handleBlur={console.log}
          />
          <FrFormInput
            size="medium"
            label={"Last year's achievement?"}
            handleBlur={console.log}
          />
          <FrButton label="Button" />
        </FrForm>
      </FrSegment>
    </FrContainer>
  );
};

export default ExampleForm1;
