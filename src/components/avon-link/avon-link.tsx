import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'avon-link',
  styleUrl: 'avon-link.css',
  shadow: true,
})
export class AvonLink {
  /**
   * Label
   */
  @Prop() label: string = "Link";
  /**
  * link
  */
  @Prop() link: string;

  /**
   * color
   */
  @Prop() color: string = "#7f28c4";

  /**
   * text-decoration
   */
  @Prop() textdecoration: string = "none";

  /**
  * font-size
  */
  @Prop() fontsize: string = "12px";


  /**
   * font-family
   */
  @Prop() fontfamily: string = "Montserrat,Arial";

  /**
* font-weight
*/
  @Prop() fontweight: string = "100";


  render() {
    return <a style={{
      'font-size': this.fontsize, 'text-decoration': this.textdecoration, 'color': this.color,
      'font-weight': this.fontweight, 'font-family': this.fontfamily
    }} href={this.link}>{this.label}</a>;
  }

}
