import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(dataSource: [], searchValue:string) {
    if (!dataSource || !searchValue){
      return dataSource;
    }



    // console.log('hi',dataSource)
    // return dataSource.filter(data =>
    // // dataSource.filter(data =>{
    //   //
    //     data.AgentId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.AgentStatus.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.Extension.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.ExtStatus.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.TotalCalls.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.PhoneNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.Duration.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.CallType.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.Campaign.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.LoginHrs.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.TalkTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    //     data.WrapTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    // );
  }

}
