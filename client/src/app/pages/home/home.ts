import { Component, inject, OnInit, signal } from '@angular/core';
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
export class Home implements OnInit {
  service = inject(GameService);
  isBooting = signal(true);
  bootLogs = signal<string[]>([]);

  private logs = [
    '> INITIALIZING UC-OS KERNEL...',
    '> LOADING NEURAL_NET_V4...',
    '> BYPASSING SECURITY GATEWAY...',
    '> ESTABLISHING ENCRYPTED UPLINK...',
    '> ACCESS GRANTED.'
  ];

  ngOnInit() {
    this.runBootSequence();
  }

  startNew() {
    if (this.service.hasActiveGame()) {
      this.service.reset();
    } else {
      this.service.goToPhase('SETUP');
    }
  }

  private async runBootSequence() {
    for (const log of this.logs) {
      await new Promise(resolve => setTimeout(resolve, 400));
      this.bootLogs.update(prev => [...prev, log]);
    }
    setTimeout(() => this.isBooting.set(false), 800);
  }
}
