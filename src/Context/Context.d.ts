import * as React from 'react';
import { IContext } from './context';
export declare const MyContext: React.Context<IContext>;
declare const ContextProvider: ({ children }: {
    children: JSX.Element;
}) => JSX.Element;
export default ContextProvider;
