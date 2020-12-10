import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'profile-component',
  styleUrl: 'profile-component.css',
  shadow: true,
})
export class ProfileComponent {

  @Prop() profile: string;

  render() {
    return (
      <Host>
        <slot name="slotOne"></slot>
        <p>{this.profile}</p>
      </Host>
    );
  }

}
