import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeWatchService } from './timewatch.service';

@Component ({
    moduleId: module.id,
    selector: 'buttons',
    templateUrl: 'buttons.component.html',
    styleUrls: ['buttons.component.css'],
})

export class ButtonsComponent implements OnInit, OnDestroy {

    private playStopUnsubscribe: any;
    private play: boolean;

    constructor(private TimeWatchService: TimeWatchService) { }

    ngOnInit() {
        this.playStopUnsubscribe = this.TimeWatchService.playStop$.subscribe((res: any) => this.setPlay(res));
    }

    ngOnDestroy() {
        this.playStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.TimeWatchService.playTimer();
    }

    stopTimer() {
        this.TimeWatchService.stopTimer();
    }

}


