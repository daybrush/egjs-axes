import { DIRECTION } from "../const";
import { IInputType, IInputTypeObserver } from "./InputType";
export interface PanInputOption {
    inputType?: string[];
    scale?: number[];
    thresholdAngle?: number;
    threshold?: number;
    hammerManagerOptions?: Object;
}
export declare class PanInput implements IInputType {
    options: PanInputOption;
    axes: string[];
    hammer: any;
    element: HTMLElement;
    private observer;
    private _direction;
    private panRecognizer;
    static getDirectionByAngle(angle: number, thresholdAngle: number): DIRECTION;
    static getNextOffset(speeds: number[], deceleration: number): number[];
    static useDirection(checkType: DIRECTION, direction: DIRECTION, userDirection?: DIRECTION): boolean;
    constructor(el: string | HTMLElement, options?: PanInputOption);
    mapAxes(axes: string[]): void;
    connect(observer: IInputTypeObserver): IInputType;
    disconnect(): this;
    destroy(): void;
    enable(): this;
    disable(): this;
    isEnable(): boolean;
    private removeRecognizer;
    private onHammerInput;
    private onPanmove;
    private onPanend;
    private attachEvent;
    private dettachEvent;
    private getOffset;
}
