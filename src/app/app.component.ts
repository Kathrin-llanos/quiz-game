

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'english-learning-app';

  checkAnswer(option: string) {
    alert(`You selected: ${option}`);
    // Aquí puedes agregar la lógica para verificar si la opción es correcta
  }
}
