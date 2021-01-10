import React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';

export interface PlaygroundProps {
    code: string,
    scope?: {[key: string]: any}
}

const Playground: React.FC<PlaygroundProps> = (props) => {
    const {code, scope} = props;

    console.log(scope);

    return (
        <LiveProvider code={code} scope={scope} language={"tsx"} noInline={true}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    );
}

export default Playground;
