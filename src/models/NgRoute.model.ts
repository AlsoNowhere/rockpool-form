
export class NgRoute {

    path: string;
    component: any;

    constructor(
        path: string,
        component: any
    ){
        this.path = path;
        this.component = component;
    }
}
