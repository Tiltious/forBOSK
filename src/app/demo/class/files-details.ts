export class ProjectMain {
    // File:FileDetails;
    Details:ProjectDetails
    Values:ProjectValues;
    constructor(Details:ProjectDetails,Values:ProjectValues){
        // this.File = File;
        this.Details = Details;
        this.Values = Values;
    }
}
export class FileDetails {
    name:string;
    guid:string;
    constructor(name:string,guid:string){
        this.name = name;
        this.guid = guid;
    }
}
export class ProjectDetails {
    tm:string;
    name:string;
    number:string;
    language:string;
    lcid:string;
    constructor(tm:string,name:string,number:string,language:string,lcid:string){
        this.tm = tm;
        this.name = name;
        this.number = number;
        this.language = language;
        this.lcid = lcid;
    }
}
export class ProjectValues {
    PerfectMatch:string;
    ContextMatch:string;
    Repetitions:string;
    CFRepetitions:string;
    Exact:string;
    New:String;
    // fuzzy:any[];
    'fuzzy 95-99 %':string;
    'fuzzy 85-94 %':string;
    'fuzzy 75-84 %':string;
    'fuzzy 50-74 %':string;
    // internal
    // fuzzy_i:string[];
    'i fuzzy 95-99 %':string;
    'i fuzzy 85-94 %':string;
    'i fuzzy 75-84 %':string;
    'i fuzzy 50-74 %':string;
    Total:string;
    constructor(
        PerfectMatch:string,
        ContextMatch:string,
        Repetitions:string,
        CFRepetitions:string,
        Exact:string,
        New:String,
        // fuzzy:any[],
        // fuzzy_i:any[],
        fuzzy_95:string,
        fuzzy_85:string,
        fuzzy_75:string,
        fuzzy_50:string,
        // internal
        fuzzy_95_i:string,
        fuzzy_85_i:string,
        fuzzy_75_i:string,
        fuzzy_50_i:string,
        Total:string,
    ){
        this.PerfectMatch = PerfectMatch;
        this.ContextMatch = ContextMatch;
        this.Repetitions = Repetitions;
        this.CFRepetitions = CFRepetitions;
        this.Exact = Exact;
        this.New = New;
        // this.fuzzy = fuzzy;
        // this.fuzzy_i = fuzzy_i;
        this['fuzzy 95-99 %'] = fuzzy_95;
        this['fuzzy 85-94 %'] = fuzzy_85;
        this['fuzzy 75-84 %'] = fuzzy_75;
        this['fuzzy 50-74 %'] = fuzzy_50;
        // internal
        this['i fuzzy 95-99 %'] = fuzzy_95_i;
        this['i fuzzy 85-94 %'] = fuzzy_85_i;
        this['i fuzzy 75-84 %'] = fuzzy_75_i;
        this['i fuzzy 50-74 %'] = fuzzy_50_i;
        this.Total = Total;
    }
}
