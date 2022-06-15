import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.less'],
})
export class PostTemplateComponent implements OnInit {
  @Input() posts;

  @Input() isSkeletonVisible;

  constructor() {}

  ngOnInit(): void {}
}
