import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonButton, IonText, IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, DecimalPipe, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
    IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonButton, IonText, IonNote],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly tasaCambio = 8; // Q8.00 por US$1.00
  quetzales: number | null = null;
  dolares: number | null = null;
  error = '';

  convertir(): void {
    const q = Number(this.quetzales);
    if (this.quetzales === null || isNaN(q) || q < 0) {
      this.error = 'Ingrese una cantidad válida en quetzales.';
      this.dolares = null;
      return;
    }
    this.error = '';
    this.dolares = q / this.tasaCambio;
  }

  limpiar(): void {
    this.quetzales = null;
    this.dolares = null;
    this.error = '';
  }
}
