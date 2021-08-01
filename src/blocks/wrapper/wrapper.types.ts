import { Component, ComponentProps } from "../../components/component.types";

export interface WrapperProps extends ComponentProps {
    inner?: string;
    tag?: string;
    comps?: Component[];
    tagInnerHTML?: string;
}