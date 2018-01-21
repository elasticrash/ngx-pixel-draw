// Implementing SimulationNodeDatum interface into our custom Node class


const conf = {
    N: 100,
    SPECTRUM: [
        // "rgb(222,237,250)"
        'rgb(176,212,243)',
        'rgb(128,186,236)',
        'rgb(77,158,228)',
        'rgb(38,137,223)',
        'rgb(0,116,217)',
        'rgb(0,106,197)'
        // "rgb(0,94,176)"
        // "rgb(0,82,154)"
        // "rgb(0,60,113)"
    ]
};

export class Node {
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    id: string;
    linkCount = 0;

    constructor(id) {
        this.id = id;
    }

    normal = () => {
        return Math.sqrt(this.linkCount / conf.N);
    }

    get r() {
        return 50 * this.normal() + 10;
    }

    get fontSize() {
        return (30 * this.normal() + 10) + 'px';
    }

    get color() {
        const index = Math.floor(conf.SPECTRUM.length * this.normal());
        return conf.SPECTRUM[index];
    }
}
