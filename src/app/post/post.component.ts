import { Component, Input } from '@angular/core';
import { Content } from '../entities/content';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() content?: Content;
  constructor() {}
}
