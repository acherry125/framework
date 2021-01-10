# Framework - JSON-based React forms
## Create React application forms instantly with JSON'

(WIP) NPM package to come soon!

The full list of components in the Framework component library [can be found here](https://github.com/acherry125/framework/tree/main/src/componentLibrary). Framework's rendered components currently use the [Semantic-UI react component library](https://github.com/Semantic-Org/Semantic-UI-React). Framework will likely move towards becoming CSS framework-agnostic in the medium-term.

The components in Framework can be used as traditional JSX or in a JSON-based configurable format. See [App.js](https://github.com/acherry125/framework/blob/main/src/App.js) for an example.
![Example image of two identical Framework forms built with the JSX and JSON formats](https://github.com/acherry125/framework/blob/main/repoStatic/images/formcontrols.JPG)

Framework is built specifically to meet highly-flexible, complex form requirements. It will support redux data synchronization, redux-based validation errors and error rendering, and an API for "plug-in" components for your specific use-case.

![Another example of a JSON-based Framework form](https://github.com/acherry125/framework/blob/main/repoStatic/images/configurable-form.JPG)

Here is the JSON that generates the above form.
```
{
  "pageRender": [
    {
      "component": "FrForm",
      "nestedChildren": [
        {
          "component": "FrSegment",
          "nestedChildren": [
            {
              "component": "FrHeader",
              "configuration": {
                "as": "h1",
                "text": "A configurable form"
              }
            },
            {
              "component": "FrAlert",
              "configuration": {
                "header": "Instructions!",
                "message": "Fill out this form carefully.",
                "variant": "info"
              }
            },
            {
              "component": "FrFormGroup",
              "configuration": {
                "widths": "equal"
              },
              "nestedChildren": [
                {
                  "component": "FrFormInput",
                  "configuration": {
                    "label": "My budget goal",
                    "reduxJsonPath": "account.budget.goal",
                    "saveToService": "dynamodb",
                    "formId": "budgetGoal",
                    "validationId": "budgetGoal"
                  }
                },
                {
                  "component": "FrFormInput",
                  "configuration": {
                    "label": "My achieved budget",
                    "reduxJsonPath": "account.budget.achieved",
                    "saveToService": "dynamodb",
                    "formId": "achieved",
                    "validationId": "achieved"
                  }
                },
                {
                  "component": "FrFormInput",
                  "configuration": {
                    "label": "Next year's goal?",
                    "reduxJsonPath": "account.budget.nextYearGoal",
                    "saveToService": "dynamodb",
                    "formId": "nextYearGoal",
                    "validationId": "nextYearGoal"
                  }
                }
              ]
            },
            {
              "component": "FrAlert",
              "configuration": {
                "header": "No lies!",
                "message": "Be honest with yourself, if you didn't have a goal, use \"0.00$\"",
                "variant": "warning"
              }
            },
            {
              "component": "FrFormInput",
              "configuration": {
                "size": "small",
                "label": "Last year's goal?",
                "reduxJsonPath": "account.budget.lastYearGoal",
                "saveToService": "dynamodb",
                "formId": "nextYearGoal",
                "validationId": "nextYearGoal"
              }
            },
            {
              "component": "FrFormInput",
              "configuration": {
                "size": "medium",
                "label": "Last year's achievement?",
                "reduxJsonPath": "account.budget.lastYearAchievement",
                "saveToService": "dynamodb",
                "formId": "nextYearGoal",
                "validationId": "nextYearGoal"
              }
            },
            {
              "component": "FrAlert",
              "configuration": {
                "header": "Attention, this is an important alert!",
                "message": {
                  "$fr": {
                    "propType": "element",
                    "value": "You will need to redirect your attention to <a target='_blank' href=\"#apple\">my link</a> to inform yourself."
                  }
                }
              }
            },
            {
              "component": "FrContextConsumer",
              "configuration": {
                "contextToConsume": "FormSubmitContext",
                "contextPassToChildAs": "handleClick"
              },
              "nestedChildren": [
                {
                  "component": "FrButton",
                  "configuration": {
                    "label": "Button"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
You initialize this json like:
```
import HomeForm from "./static/configurations/home.json";
import Renderer from "./renderer/Renderer";

...
<Renderer
  component={"FrContainer"} // chosen top-level component, can be an FrGrid, FrForm, FrContainer, etc
  nestedChildren={HomeForm.pageRender}
/>
```

[ExampleForm1](https://github.com/acherry125/framework/blob/main/src/pages/ExampleForm1.js) is a more traditional way of creating forms with Framework that gives the same functionality as the JSON format
```
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
      <FrContextConsumer
        contextToConsume="FormSubmitContext"
        contextPassToChildAs="handleClick"
      >
        <FrButton
          label="Button"
        />
      </FrContextConsumer>
    </FrForm>
  </FrSegment>
</FrContainer>
```

To run the example app bundled with the library, run `npm run start` or `yarn start`
