import { Component, OnInit } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[];

  ngOnInit() {
    this.posts = [
      new Post(
        'Mon premier post',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio metus, auctor in
        orci vitae, mollis imperdiet lorem. Suspendisse lobortis cursus varius.`
        ),
      new Post(
        'mon deuxième post',
        `Vivamus placerat lobortis tempor. Morbi aliquet non ligula eget mattis.
        Donec at nibh finibus enim volutpat laoreet ut eget massa.`,
        3
        ),
      new Post(
        'Mon troisième post',
        `Etiam posuere blandit augue at accumsan. Cras tristique ornare pellentesque.
        Aliquam enim ante, laoreet pulvinar maximus non, tristique a nisi.`,
        -2
      ),
      new Post(
        'Encore post',
        `Pellentesque ullamcorper purus ipsum, vel consectetur lacus congue in.
        Donec sit amet tortor a tellus imperdiet ultrices.
        Proin eget felis non nulla sollicitudin mollis.`
      )
    ];
  }
}
