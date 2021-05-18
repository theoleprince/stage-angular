import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogCategorieService } from '_services/blog-categorie.service';

@Component({
  selector: 'app-detail-junie',
  templateUrl: './detail-junie.component.html',
  styleUrls: ['./detail-junie.component.scss']
})
export class DetailJunieComponent implements OnInit {

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
        this.router.navigate(['/blog-category/all-junie'])
      }
    )
  }
}
