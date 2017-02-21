import  {Component} from '@angular/core';
import  {CursosService} from './cursos.service';

@Component({
    moduleId: module.id,
    selector : 'cursos-lista',
    /*template : `<p>Curso: {{nome}} </p>
                <p>Lista de disciplinas</p>
                <ul>
                    <li *ngFor="let disciplina of disciplinas">
                        {{disciplina}}
                    </li>
                </ul>
                `*/
    templateUrl: 'cursos.component.html',
    providers: [CursosService]
})
export class CursosComponent{
    nome = "MBA Java Soa";
    disciplinas : string[];

    constructor(cursoService : CursosService){
        this.disciplinas = cursoService.getDisciplinas();
    }
}