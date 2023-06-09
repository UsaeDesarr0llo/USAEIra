export default interface Trabajador {
    id?: string;
    area: string;
    piso: string;
    nImss: string;
    nombre: string;
    apellidoPate: string;
    apellidoMate: string;
    fechaNaci: string;
    domicilio: string;
    colonia: string;
    municipio: string;
    telefono: string;
    peso: string;
    talla: string;
    restrMedica: string;
    enfermePadezca: string;
    recibeTrata: 'Si'| 'No';
    motivo: string;
    medicamento: string;
    dosis: string;
    horario: string;
    hospitalizado: 'Si'| 'No';
    causas: string;
    edad: string;
    observaciones: string;
    alergias: 'Si'| 'No';
    medicamentos: string;
    alimentos: string;
    insectos: string;
    otros: string;
    nombreEmger: string;
    parentesco: string;
    telefono2: string;
    nombreEmger2: string;
    parentesco2: string;
    telefono3: string;
    clinica: string;
}