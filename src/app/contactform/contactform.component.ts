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
  mailTest = true;
  formSubmitted = false;
  http = inject(HttpClient);
  formValid = false;

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyAccepted: false
  }

  post = {
    endPoint: 'https://edgar.stroh.de/app/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: any): void {
    this.formSubmitted = true;

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.contactData.privacyAccepted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm(); 
            console.log('Formular erfolgreich gesendet:', response);
          },
          error: (error) => {
            console.error('Fehler beim Senden des Formulars:', error);
          },
          complete: () => console.info('Senden des Formulars abgeschlossen'),
        });
    }
    else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      console.log('Mail-Test ist aktiv, Formular zurückgesetzt');
    }
    else if (!this.contactData.privacyAccepted) {
      console.warn('Bitte akzeptiere die Datenschutzrichtlinie.');
    }
  }

  isSubmitDisabled(contactForm: NgForm): boolean {
    const result = !this.formValid || !this.contactData.privacyAccepted;
    return result;
  }

  formValidFN() {
    if (this.contactData.name && this.contactData.email && this.contactData.message) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}
