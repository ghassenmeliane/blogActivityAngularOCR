import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() private post: Post;
  private myClassesObject;
  constructor() { }

  ngOnInit() {
      this.myClassesObject = {
        'list-group-item': true,
        'list-group-item-success': this.post.loveIts > 0,
        'list-group-item-danger': this.post.loveIts < 0
      };
  }

  onLoveIt() {
    this.post.loveIts++;
    console.log(this.post.loveIts);
    this.myClassesObject = {
      'list-group-item': true,
      'list-group-item-success': this.post.loveIts > 0,
      'list-group-item-danger': this.post.loveIts < 0
    };
  }
  onDontLoveIt() {
    this.post.loveIts--;
    console.log(this.post.loveIts);
    this.myClassesObject = {
      'list-group-item': true,
      'list-group-item-success': this.post.loveIts > 0,
      'list-group-item-danger': this.post.loveIts < 0
    };
  }
}
