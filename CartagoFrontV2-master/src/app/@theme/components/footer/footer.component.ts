import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="http://www.bfigroupe.com/" target="_blank">BFI</a></b> 2022
    </span>

  `,
})
export class FooterComponent {
}
