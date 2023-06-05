import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileDetails, ProjectDetails, ProjectMain, ProjectValues } from 'src/app/demo/class/files-details';
import { HttpDataService } from 'src/app/demo/service/http.data.service';



interface ProjectSelect {
    name: string,
    data: ProjectMain
}

@Component({
    styleUrls:['./filedemo.component.scss'],
    templateUrl: './filedemo.component.html',
    providers: [MessageService]
})
export class FileDemoComponent implements OnInit{
    myProjects:any[]=[];
    project_select:ProjectSelect[]=[];
    project!: ProjectSelect;
    constructor(private dataserv:HttpDataService) {
    }
    cols:any;

    ngOnInit(){this.getAllProjects();}
    onChange(){}
    
    getAllProjects(){
        this.dataserv.getAllProjects({}).subscribe(
            (data:any)=>{
                console.log(data)
                data.forEach(
                    (el:any)=>{
                        var details!:ProjectDetails;
                        var values!:ProjectValues;
                        details = new ProjectDetails(
                            el.taskInfo.tm?._attributes?.name,
                            el.taskInfo.project?._attributes?.name,
                            el.taskInfo.project?._attributes?.number,
                            el.taskInfo.language?._attributes?.name,
                            el.taskInfo.language?._attributes?.lcid
                        )
                        values = new ProjectValues(
                            el.batchTotal.analyse.perfect._attributes.words,
                            el.batchTotal.analyse.inContextExact._attributes.words,
                            el.batchTotal.analyse.repeated._attributes.words,
                            el.batchTotal.analyse.crossFileRepeated._attributes.words,
                            el.batchTotal.analyse.exact._attributes.words,
                            el.batchTotal.analyse.new._attributes.words,
                            el.batchTotal.analyse.fuzzy[3]?._attributes.words,
                            el.batchTotal.analyse.fuzzy[2]?._attributes.words,
                            el.batchTotal.analyse.fuzzy[1]?._attributes.words,
                            el.batchTotal.analyse.fuzzy[0]?._attributes.words,
                            el.batchTotal.analyse.internalFuzzy[3]?._attributes.words,
                            el.batchTotal.analyse.internalFuzzy[2]?._attributes.words,
                            el.batchTotal.analyse.internalFuzzy[1]?._attributes.words,
                            el.batchTotal.analyse.internalFuzzy[0]?._attributes.words,
                            el.batchTotal.analyse.total._attributes.words
                        )
                        const project = new ProjectMain(details,values);
                        this.myProjects.push(project);
                        this.project_select.push({name:project.Details.name, data:project})
                    }
                )
                
                console.log(this.myProjects)
            }
        )
    }
}
