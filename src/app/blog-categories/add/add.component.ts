import { BlogCategorieService } from './../../../../_services/blog-categorie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  dataForm!: FormGroup;

  constructor(
    private dataService: BlogCategorieService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['']

    });
  }

  get form() {
    return this.dataForm.controls;
  }
  onSubmit() {
    console.log('on submit');

    if (this.dataForm.invalid) {
      alert('tous les champs en rouge sont obligatoire')
      return;
    }

    const formData = new FormData();
    formData.append('name', '' + this.form.name.value);
    formData.append('description', '' + this.form.description.value);

    console.log(formData);
    this.dataService.add(formData)
      .then(resp => {
        alert('enregistrer avec success')
        this.dataForm.reset();
      })
      .catch(err => {
        console.log(err)
        alert('enregistrement a echoue')
      });
  }

}
