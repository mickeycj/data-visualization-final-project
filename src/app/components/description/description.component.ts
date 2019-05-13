import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  @Input()
  side: string;
  @Input()
  title: string;
  @Input()
  description: string;

}
