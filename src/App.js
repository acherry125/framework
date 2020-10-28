import React from "react";
import "./App.css";

import components from "./componentLibrary";
import Renderer from "./renderer/Renderer";

const {
  FrForm,
  FrHeader,
  FrContainer,
  FrSegment,
  FrFormGroup,
  FrButton,
  FrFormInput,
} = components;

global.React = React;

function App() {
  const formNestedChildren = [
    {
      component: "FrForm",
      nestedChildren: [
        {
          component: 'FrSegment',
          nestedChildren: [
            {
              component: "FrHeader",
              configuration: {
                as: "h1",
                text: "A configurable form",
              },
            },
            {
              component: "FrFormGroup",
              configuration: {
                widths: "equal",
              },
              nestedChildren: [
                {
                  component: "FrFormInput",
                  configuration: {
                    label: "My budget goal",
                    reduxJsonPath: "grant.budget.goal",
                    saveToService: "dynamicData",
                    formId: "budgetGoal",
                    validationId: "budgetGoal",
                  },
                },
                {
                  component: "FrFormInput",
                  configuration: {
                    label: "My achieved budget",
                    reduxJsonPath: "grant.budget.achieved",
                    saveToService: "dynamicData",
                    formId: "achieved",
                    validationId: "achieved",
                  },
                },
                {
                  component: "FrFormInput",
                  configuration: {
                    label: "Next year's goal?",
                    reduxJsonPath: "grant.budget.nextYearGoal",
                    saveToService: "dynamicData",
                    formId: "nextYearGoal",
                    validationId: "nextYearGoal",
                  },
                },
              ],
            },
            {
              component: "FrFormInput",
              configuration: {
                size: "small",
                label: "Last year's goal?",
                reduxJsonPath: "grant.budget.lastYearGoal",
                saveToService: "dynamicData",
                formId: "nextYearGoal",
                validationId: "nextYearGoal",
              },
            },
            {
              component: "FrFormInput",
              configuration: {
                size: "medium",
                label: "Last year's achievement?",
                reduxJsonPath: "grant.budget.lastYearAchievement",
                saveToService: "dynamicData",
                formId: "nextYearGoal",
                validationId: "nextYearGoal",
              },
            },
            {
              component: "FrButton",
              configuration: {
                label: "Button",
              },
            },
          ]
        }
      ]
    },
  ];
  return (
    <div className="App">
      <FrContainer>
        <FrSegment>
          <FrForm>
            <FrHeader as="h1" text="Regular JSX" />
            <FrFormGroup widths="equal">
              <FrFormInput
                label={"My budget goal"}
                handleBlur={console.log}
              />
              <FrFormInput
                label={"My achieved budget"}
                handleBlur={console.log}
              />
              <FrFormInput
                label={"Next year's goal?"}
                handleBlur={console.log}
              />
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
      <Renderer
        component={"FrContainer"}
        configuration={{}}
        nestedChildren={formNestedChildren}
      />
    </div>
  );
}

export default App;
