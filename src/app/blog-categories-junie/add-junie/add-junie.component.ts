import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogCategorieService } from '_services/blog-categorie.service';

@Component({
  selector: 'app-add-junie',
  templateUrl: './add-junie.component.html',
  styleUrls: ['./add-junie.component.scss']
})
export class AddJunieComponent implements OnInit {

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

  //fonction qui permet d'acceder aux élément du formulaire
  get form() {
    return this.dataForm.controls;
  }

  //Fonction de soumission des données
  onSubmit() {
    console.log('soumis avec success');
    if (this.dataForm.invalid) {
      alert('tous les champs en rouge sont obligatoire')
      return;
    }

    //stocker les données dans le formData
    const formData = new FormData();
    formData.append('name', '' + this.form.name.value);
    formData.append('description', '' + this.form.description.value);

    //Enregistrer dans la base de données
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
