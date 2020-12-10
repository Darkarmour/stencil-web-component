/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The middle name
         */
        "age": number;
        "experience": number;
        /**
          * The first name
         */
        "name": string;
        /**
          * The last name
         */
        "qualification": string;
    }
    interface ProfileComponent {
        "profile": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLProfileComponentElement extends Components.ProfileComponent, HTMLStencilElement {
    }
    var HTMLProfileComponentElement: {
        prototype: HTMLProfileComponentElement;
        new (): HTMLProfileComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "profile-component": HTMLProfileComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The middle name
         */
        "age"?: number;
        "experience"?: number;
        /**
          * The first name
         */
        "name"?: string;
        /**
          * The last name
         */
        "qualification"?: string;
    }
    interface ProfileComponent {
        "profile"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "profile-component": ProfileComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "profile-component": LocalJSX.ProfileComponent & JSXBase.HTMLAttributes<HTMLProfileComponentElement>;
        }
    }
}