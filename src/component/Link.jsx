import React from 'react';
import { Link as NativeLink, NavLink } from 'react-router-dom';

const filter = [ 'staticContext', 'children', 'isNav' ];
const cleanProps = props => Object.keys(props).reduce(
    (acc, prop) => filter.indexOf(prop) === -1 ? (
        acc[prop] = props[prop],
        acc
    ): acc, {}
);

export const Link = props => {
    const { children, isNav } = props;
    const Component = isNav ? NavLink : NativeLink;
    return (
        <Component { ...cleanProps(props) }>{ children }</Component>
    )
}