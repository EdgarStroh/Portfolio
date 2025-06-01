import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { setInterval } from 'timers/promises';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})

export class ContactformComponent {
  constructor(public langService: LanguageService) { }
  mailTest = false;
  formSubmitted = false;
  http = inject(HttpClient);
  formValid = false;
  privacyAccepted = false;
  showSuccessMessage = false;

  contactData = {
    name: "",
    email: "",
    message: "",

  }

  post = {
    endPoint: 'https://edgar-stroh.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as const,
    },
  };

  onPrivacyChange() {
    if (!this.privacyAccepted) {
      this.formSubmitted = true;
    }
  }


  onSubmit(ngForm: NgForm): void {
    this.formSubmitted = true;

    if (ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            ngForm.resetForm();
            this.privacyAccepted = false;
            this.formSubmitted = false;
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000);
          },
          error: (error) => {
            console.error('Fehler beim Senden des Formulars:', error);
          },
        });
    } else if (ngForm.valid && this.mailTest) {
      ngForm.resetForm();
      this.privacyAccepted = false;
      this.formSubmitted = false;

    }
  }


  isSubmitDisabled(contactForm: NgForm): boolean {
    const result = !this.formValid || !this.privacyAccepted;
    return result;
  }
  formValidFN() {
    if (
      this.contactData.name &&
      this.contactData.email &&
      this.isEmailValid(this.contactData.email) &&
      this.contactData.message &&
      this.contactData.message.length >= 4  
    ) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }


  isEmailValid(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

}
