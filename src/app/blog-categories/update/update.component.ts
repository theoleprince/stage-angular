import { BlogCategorieService } from './../../../../_services/blog-categorie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

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
        this.router.navigate(['/blog-category/all'])
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
    console.log('on submit');

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
        alert('enregistrer avec success')
        this.dataForm.reset();
      })
      .catch(err => {
        console.log(err)
        alert('echec enregistrement');
      });
  }


}
