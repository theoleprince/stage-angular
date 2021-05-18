import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogCategorieService } from '_services/blog-categorie.service';

@Component({
  selector: 'app-all-junie',
  templateUrl: './all-junie.component.html',
  styleUrls: ['./all-junie.component.scss']
})
export class AllJunieComponent implements OnInit {

  data: any
  constructor(
    private dataService: BlogCategorieService,
    private router: Router
  ) { }

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
    this.router.navigate(['/blog-category/update-junie/' + id])
  }
  detailItem(id: number) {
    this.router.navigate(['/blog-category/detail-junie/' + id])
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
