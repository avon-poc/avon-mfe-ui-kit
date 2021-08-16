import { Component, Prop, h , Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'swc-modal',
  styleUrl: 'swc-modal.css',
  shadow: true,
})
export class SwcModal {
  /**
   * Heading
   */
  @Prop() modaltitle: string = "Modal title";

  /**
    * Title color
    */
  @Prop() titlecolor: string = "black";

  /**
   * Title font-family
   */
  @Prop() titlefontfamily: string = "Montserrat,Arial";

  /**
  * Title font-size
  */
  @Prop() titlefontsize: string = "18.72px";

  /**
* Title font-weight
*/
  @Prop() titlefontweight: string = "100";
  /**
* width
*/
  @Prop() width: string = "300px";
  /**
* height
*/
  @Prop() height: string = "100%";
    /**
* Button color
*/
  @Prop() btncolor?: 'primary' |'secondary' |'clear' |'light' = 'secondary';

  /**
* Position of modal
*/
@Prop() position?: 'center' | 'left' | 'right' |'top'|'bottom' = 'right';
    /**
* open
*/
@Prop({
  mutable: true,
})
public open: boolean=true;
/**
* button-label
*/
@Prop() buttonlabel: string = "Go back to shopping";
@Event() private btnClick: EventEmitter;


private handleCloseClick = () => {
  this.open = false;
};

private handleBtnClick = () => {
  this.open = false;
  this.btnClick.emit();
};


  render() {
    return <div class={this.open?"wrapper visible":"modal_none"}>
      <div class={`modal ${this.position}`} style={{ 'width': this.width, 'height': this.height }}>
        <div class="title">
          <span style={{'color':this.titlecolor,'font-weight':this.titlefontweight,'font-size':this.titlefontsize,'font-family':this.titlefontfamily}}>{this.modaltitle}</span>
          <span class="close" onClick={this.handleCloseClick} >&times;</span>
        </div>
        <div class="content"><slot /></div>
        <div class="button-container">
          <avon-button label={this.buttonlabel} color={this.btncolor} width="fullwidth" size="medium" onClick={this.handleBtnClick}></avon-button>
        </div>
      </div>
    </div>;
  }
}
