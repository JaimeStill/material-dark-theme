import { Component } from '@angular/core';
import { SidepanelService } from './services/sidepanel.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public sidepanel: SidepanelService) {}
}
