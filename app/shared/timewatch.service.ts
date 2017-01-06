import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class TimeWatchService {

    @Output() playStop$ = new EventEmitter();

    private play: boolean = false;
    private stop: boolean = true;


    private currentTime() {
        let date = new Date();
        let timeInMs = Date.now(date);
        console.log(timeInMs);
        return timeInMs;
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
