import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import OpenAI from 'openai';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule, // <- import here
    InputTextModule,  // <- import here
    ButtonModule,  // <- import here
    CardModule,  // <- import here
    DatePickerModule,
    SelectModule,
      ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  countries= [{name:"Malawi"}];
  selectedCountry:any;
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        // <- another group of element
        street: [''],
        postCode: ['', Validators.required],
      }),
    });
    this.generateImage();
  }
  async generateImage() {
    const openai = new OpenAI({
      apiKey: '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',
      dangerouslyAllowBrowser: true,
      // This is the default and can be omitted
    });
    const image = await openai.images.generate({
      model: 'dall-e-3',
      prompt:
        'Create a photorealistic image of a serene desert landscape at sunset, featuring a fluffy orange tabby cat lounging on warm sand, with a curious expression and long shadows across the dunes.',
      n: 1, // Gera três variações
      size: '1024x1024',
      style: 'vivid',
    });
  }

  addUser(){
    
  }
}
