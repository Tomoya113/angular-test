import { Component, OnInit } from '@angular/core';
import { Content } from '../entities/content';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  contents: Content[] = [];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.contents = posts.contents;
    });
  }
}
