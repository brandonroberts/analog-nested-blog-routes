import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    Blog Index
  `
})
export default class BlogIndexPage {}