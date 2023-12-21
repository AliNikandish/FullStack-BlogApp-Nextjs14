
export function FormatTime(date:string){
    // let options:any = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric' };
    let options:any = { year: 'numeric', month: 'numeric', day: 'numeric'};
    let newDate = new Date(date).toLocaleDateString('fa-IR',options);
    return newDate
    
    }