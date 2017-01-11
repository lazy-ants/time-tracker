import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class TimeWatchService {

    @Output() playStop$ = new EventEmitter();

    private play: boolean = false;
    private stop: boolean = true;


    public startStopTime() {
        let date = new Date();
        console.log(date.getTime());
        return date.getTime();
    }

    public currentTime() {
        let date = new Date();
        return date;
    }

    public playTimer() {
        this.play = true;
        this.stop = false;

        this.playStop$.emit({
            play: this.play
        });
    }

    public stopTimer() {
        this.play = false;
        this.stop = true;

        this.playStop$.emit({
            stop: this.stop
        });
    }

}
