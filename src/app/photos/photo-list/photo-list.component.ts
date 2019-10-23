import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
  
  photos: Photo[] = [];
  
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const userName = this.activatedRoute.snapshot.params.userName;
      this.photoService
        .listFromUser(userName)
        .subscribe(photos => this.photos = photos)
      
  }
}
