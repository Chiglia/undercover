import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { GameService } from '../../services/game-service';
import { ActiveGameBanner } from "../common-components/active-game-banner/active-game-banner";
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-home',
  imports: [SharedModule, ActiveGameBanner, AccordionModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  service = inject(GameService);
  startNew() {
    if (this.service.hasActiveGame()) {
      this.service.reset();
    } else {
      this.service.goToPhase('SETUP');
    }
  }
}
