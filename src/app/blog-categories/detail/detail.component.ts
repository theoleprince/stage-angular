import { BlogCategorieService } from './../../../../_services/blog-categorie.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  blogCategorie: any;
  idItem: any;

  constructor(
    private dataService: BlogCategorieService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  async ngOnInit() {
    this.idItem = this.route.snapshot.paramMap.get("id");

    console.log(this.idItem);
    this.dataService.find(this.idItem).then(
      data => {
        this.blogCategorie = data;
        console.log(this.blogCategorie)
      }
    ).catch(
      error => {
        alert(error);
        this.router.navigate(['/blog-category/all'])
      }
    )
  }
}
