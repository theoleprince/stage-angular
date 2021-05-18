import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogCategorieService } from '_services/blog-categorie.service';

@Component({
  selector: 'app-update-junie',
  templateUrl: './update-junie.component.html',
  styleUrls: ['./update-junie.component.scss']
})
export class UpdateJunieComponent implements OnInit {

  dataForm!: FormGroup;
  blogCategorie: any;
  idItem: any = null;
  isSubmitted = false;

  constructor(
    private dataService: BlogCategorieService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.idItem = this.route.snapshot.paramMap.get("id");
    this.dataService.find(this.idItem).then(
      res => {
        this.blogCategorie = res;
        this.initForm(true);
        console.log(this.blogCategorie);
      }
    ).catch(
      err => {
        alert(err)
        this.router.navigate(['/blog-category/all-junie'])
      }
    )
  }

  initForm(withRole = false) {
    if (withRole) {
      console.log(this.blogCategorie)
      this.dataForm = this.formBuilder.group({
        name: [this.blogCategorie.name, [Validators.required]],
        description: [this.blogCategorie.description]
      });
    } else {
      this.dataForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['']
      });
    }
  }

  get form() {
    return this.dataForm.controls;
  }

  onSubmit() {
    console.log('soumis avec succes');

    if (this.dataForm.invalid) {
      alert('les champs en rouge sont obligatoire')
      return;
    }

    const formData = new FormData();
    formData.append('name', '' + this.form.name.value);
    formData.append('description', '' + this.form.description.value);

    console.log(formData);
    this.dataService.update(formData, this.blogCategorie.id)
      .then(resp => {
        alert('Modifier avec success')
        this.dataForm.reset();
      })
      .catch(err => {
        console.log(err)
        alert('echec de modification');
      });
  }



}
