import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TimeWatchService {

    private play: boolean = false;
    private stop: boolean = true;
    public playStop$ = new EventEmitter();

    public whatTime() {
        return Date.parse(new Date());
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
