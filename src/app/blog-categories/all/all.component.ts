import { BlogCategorieService } from './../../../../_services/blog-categorie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  data: any;

  constructor(
    private dataService: BlogCategorieService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.getBlogCategories();
  }

  getBlogCategories() {
    this.dataService.get().then(
      response => {
        this.data = response;
        console.log(this.data)
      }
    ).catch(
      error => {
        alert(error)
      }
    )
  }

  editItem(id: number) {
    this.router.navigate(['/blog-category/update/' + id])
  }
  detailItem(id: number) {
    this.router.navigate(['/blog-category/detail/' + id])
  }

  deleteItem(id: number) {
    this.dataService.delete(id).then(
      res => {
        this.getBlogCategories();
      }
    ).catch(
      error => {
        console.log(error)
        alert(error)
      }
    )
  }
  computeDescription(content: string) {
    return content.substring(0, 100) + '...';
  }
}
