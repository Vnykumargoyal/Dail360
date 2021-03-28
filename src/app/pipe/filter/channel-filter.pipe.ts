import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'channelFilter'
})
export class ChannelFilterPipe implements PipeTransform {

  transform(dataSource: any, searchValue:string) {
    if (!dataSource || !searchValue){
      return dataSource;
    }
    console.log('hi',dataSource)
    return dataSource.filter(data =>
      data.Campaign.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.CampaignID.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.Channel.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.Exten.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.PhoneNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.ReqReason.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.ReqSince.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.ReqType.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.Since.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.Status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.TalkTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.WrapTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );


  }


}
