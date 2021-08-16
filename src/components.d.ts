/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AvonButton {
        "color"?: 'primary' |'secondary' |'clear' |'light';
        "disabled"?: boolean;
        /**
          * Button Label
         */
        "label": string;
        "shape"?: 'full' |'round'|'smooth';
        "size"?: 'large' | 'medium' | 'small';
        "width"?: 'fullwidth' | 'mediumwidth' | 'smallwidth';
    }
    interface AvonHeader {
        "strings": any;
    }
    interface AvonHeading {
        /**
          * The first name
         */
        "label": string;
        "level"?: 'h1' | 'h2' | 'h3';
    }
    interface AvonLink {
        /**
          * color
         */
        "color": string;
        /**
          * font-size
         */
        "fontsize": string;
        /**
          * Label
         */
        "label": string;
        /**
          * link
         */
        "link": string;
        /**
          * text-decoration
         */
        "textdecoration": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SwcLabel {
        /**
          * color
         */
        "color": string;
        /**
          * font-family
         */
        "fontfamily": string;
        /**
          * font-size
         */
        "fontsize": string;
        /**
          * Label
         */
        "label": string;
    }
}
declare global {
    interface HTMLAvonButtonElement extends Components.AvonButton, HTMLStencilElement {
    }
    var HTMLAvonButtonElement: {
        prototype: HTMLAvonButtonElement;
        new (): HTMLAvonButtonElement;
    };
    interface HTMLAvonHeaderElement extends Components.AvonHeader, HTMLStencilElement {
    }
    var HTMLAvonHeaderElement: {
        prototype: HTMLAvonHeaderElement;
        new (): HTMLAvonHeaderElement;
    };
    interface HTMLAvonHeadingElement extends Components.AvonHeading, HTMLStencilElement {
    }
    var HTMLAvonHeadingElement: {
        prototype: HTMLAvonHeadingElement;
        new (): HTMLAvonHeadingElement;
    };
    interface HTMLAvonLinkElement extends Components.AvonLink, HTMLStencilElement {
    }
    var HTMLAvonLinkElement: {
        prototype: HTMLAvonLinkElement;
        new (): HTMLAvonLinkElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSwcLabelElement extends Components.SwcLabel, HTMLStencilElement {
    }
    var HTMLSwcLabelElement: {
        prototype: HTMLSwcLabelElement;
        new (): HTMLSwcLabelElement;
    };
    interface HTMLElementTagNameMap {
        "avon-button": HTMLAvonButtonElement;
        "avon-header": HTMLAvonHeaderElement;
        "avon-heading": HTMLAvonHeadingElement;
        "avon-link": HTMLAvonLinkElement;
        "my-component": HTMLMyComponentElement;
        "swc-label": HTMLSwcLabelElement;
    }
}
declare namespace LocalJSX {
    interface AvonButton {
        "color"?: 'primary' |'secondary' |'clear' |'light';
        "disabled"?: boolean;
        /**
          * Button Label
         */
        "label"?: string;
        "shape"?: 'full' |'round'|'smooth';
        "size"?: 'large' | 'medium' | 'small';
        "width"?: 'fullwidth' | 'mediumwidth' | 'smallwidth';
    }
    interface AvonHeader {
        "strings"?: any;
    }
    interface AvonHeading {
        /**
          * The first name
         */
        "label"?: string;
        "level"?: 'h1' | 'h2' | 'h3';
    }
    interface AvonLink {
        /**
          * color
         */
        "color"?: string;
        /**
          * font-size
         */
        "fontsize"?: string;
        /**
          * Label
         */
        "label"?: string;
        /**
          * link
         */
        "link"?: string;
        /**
          * text-decoration
         */
        "textdecoration"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SwcLabel {
        /**
          * color
         */
        "color"?: string;
        /**
          * font-family
         */
        "fontfamily"?: string;
        /**
          * font-size
         */
        "fontsize"?: string;
        /**
          * Label
         */
        "label"?: string;
    }
    interface IntrinsicElements {
        "avon-button": AvonButton;
        "avon-header": AvonHeader;
        "avon-heading": AvonHeading;
        "avon-link": AvonLink;
        "my-component": MyComponent;
        "swc-label": SwcLabel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "avon-button": LocalJSX.AvonButton & JSXBase.HTMLAttributes<HTMLAvonButtonElement>;
            "avon-header": LocalJSX.AvonHeader & JSXBase.HTMLAttributes<HTMLAvonHeaderElement>;
            "avon-heading": LocalJSX.AvonHeading & JSXBase.HTMLAttributes<HTMLAvonHeadingElement>;
            "avon-link": LocalJSX.AvonLink & JSXBase.HTMLAttributes<HTMLAvonLinkElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "swc-label": LocalJSX.SwcLabel & JSXBase.HTMLAttributes<HTMLSwcLabelElement>;
        }
    }
}
