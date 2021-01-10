import React from "react";
import HeaderView from "./parts/HeaderView";
import IncludesView from "./parts/IncludesView";
import FeatureView from "./parts/FeatureView";
import CodeExample1View from "./parts/CodeExample1View";
import styled from "styled-components";
import {useWindowSize} from "../../hooks/useWindowSize";
import Layout from '@theme/Layout';
import Playground from "../../components/Playground";
import {Agile} from "@agile-ts/core";
import {useAgile} from "@agile-ts/react";

const makeExample = (uri) => `<iframe
  src="https://codesandbox.io/embed/${uri}?fontsize=14&hidenavigation=0&theme=light&view=preview"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Chat-Example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  ></iframe>`;


const firstStateExample = makeExample('agilets-first-state-f12cz');

const tempCode = "const App = new Agile();\n" +
    "const MY_FIRST_STATE = App.State(\"Hello World\");\n" +
    "let helloWorldCount = 0;\n" +
    "\n" +
    "const RandomComponent = () => {\n" +
    "    const myFirstState = useAgile(MY_FIRST_STATE);\n" +
    "\n" +
    "    return(\n" +
    "        <div>\n" +
    "            <p>{myFirstState}</p>\n" +
    "            <button\n" +
    "                onClick={() => {\n" +
    "                    MY_FIRST_STATE.set(`Hello World ${++helloWorldCount}`)\n" +
    "                }}\n" +
    "            >\n" +
    "                Update State\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    );\n" +
    "}\n" +
    "\n" +
    "render(<RandomComponent/>);"

const LandingPage: React.FC = () => {
    const windowSize = useWindowSize();
    return (
        <Layout title={`Home`}
                description="AgileTs is a global State and Logic Framework for reactive Typescript & Javascript Applications. Supporting frameworks like React, React Native.."
        >
            <HeaderView/>
            <FeatureView/>
            {
                windowSize.windowWidth > 900 &&
                <div>
                    <BorderContainer>
                        <Border/>
                        <IncludesView/>
                        <Border/>
                    </BorderContainer>

                    <CodeExampleContainer>
                        <CodeExample1View/>
                    </CodeExampleContainer>
                </div>
            }

            <Playground scope={{Agile, useAgile}} code={tempCode}/>

            <div id="firstStateExample" dangerouslySetInnerHTML={{ __html: firstStateExample }} />
        </Layout>
    )
}

export default LandingPage;

const BorderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0 90px 0;
`;

const Border = styled.div`
  height: 2px;
  width: 45%;
  margin: 0 10px;

  align-self: center;
  background-color: #8481af;
`;

const CodeExampleContainer = styled.div`
  margin-bottom: 200px;

  @media (max-width: 900px) {
    margin: 0 0 50px 0;
  }
`;

