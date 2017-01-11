import { Component, OnInit, OnDestroy,  } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimeWatchService } from '../../../shared/timewatch.service';

@Component({
    moduleId: module.id,
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.css'],
})

export class TimerComponent implements OnInit, OnDestroy {
    private playStopUnsubscribe: any;

    start = 0;
    ticks = 0;
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    constructor(private timeWatchService: TimeWatchService) { }

    ngOnInit() {
        this.playStopUnsubscribe = this.timeWatchService.playStop$.subscribe((res: any) => this.playStop(res));
    }

    ngOnDestroy() {
        this.playStopUnsubscribe.unsubscribe();
    }

    private playStop(res: any) {
        if(res.play) {
            this.startTimer();
        } else if (res.stop) {
            this.stopTimer();
        }
    }

    private startTimer() {
        let timer = Observable.timer(1, 1000);
        if (this.sub) this.sub.unsubscribe();
        this.sub = timer.subscribe(
            t => {
                this.ticks = this.start + t;
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private stopTimer() {
        this.start = 0;
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        if (this.sub) this.sub.unsubscribe();
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }
}
