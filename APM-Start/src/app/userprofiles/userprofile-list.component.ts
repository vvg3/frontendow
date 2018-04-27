import {Component} from '@angular/core';

@Component({
  selector: 'pm-userprofiles',
  templateUrl: './userprofile-list.component.html'
})
export class UserprofileListComponent {
  pageTitle: string = 'User Profile';
  imageWidth: number = 50;
  imageMargin: number = 2;
  clickMe: boolean = false;
  // listSearch: string = '';
  teams: any[] = [
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-10-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 2-3 DRAGONS',
      'choiceResult': 'WRONG',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/YX6JZ6FR89LU1507822882865.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
    {
      'date': '4-15-2018',
      'selection': 'Dallas Fuel',
      'matchScore': 'DALLAS 3-2 BOSTON',
      'choiceResult': 'CORRECT',
      'imageUrl': 'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg'
    },
  ];

  // toggleClickMe(): void {
  //   this.clickMe = !this.clickMe;
  // }
}
