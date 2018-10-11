export class ObservacionesPreventivas {
    constructor(
        public usuario: string,
        public formulario: string,
        public fecha: string,
        public zona: string,
        public repeticion?: string,
        public _id?: string
    ) {}
}
