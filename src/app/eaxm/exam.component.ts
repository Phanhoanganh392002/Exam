import {Component, Input} from "@angular/core";
import {IExam} from "../interface/exam.interface";

@Component({
  selector:'app-exam',
  templateUrl:'./exam.component.html'
})
export class ExamComponent{
  examArray: IExam[] = [
    {name:'Gemma Roberson',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Anna Itna',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Markus Muller',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Emilyt Linc',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Sirra Roberson',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
  ];
}
