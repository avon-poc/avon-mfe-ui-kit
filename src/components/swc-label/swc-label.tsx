import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swc-label',
  styleUrl: 'swc-label.css',
  shadow: true,
})
export class SwcLabel {
  /**
   * Label
   */
  @Prop() label: string;

 /**
   * color
   */
  @Prop() color: string = "black";

  /**
   * font-family
   */
  @Prop() fontfamily: string = "Arial";

  /**
  * font-size
  */
  @Prop() fontsize: string = "12px";


  render() {
    return <label style={{'color':this.color,'font-size':this.fontsize,'font-family':this.fontfamily}}>{this.label}</label>;
  }
}
