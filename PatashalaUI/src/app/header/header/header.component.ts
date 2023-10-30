import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
listMenuResponse:any = [];
dynamicmenuItems:any =[];
childmenuItems:any =[];


ngOnInit(){
  this.getdynamicMenu();
  this.dynamicmenuItems = this.listMenuResponse;
  this.childmenuItems = this.listMenuResponse;

}

getdynamicMenu(){
debugger;
  this.listMenuResponse = [

  {
    "menu_Id": 1,
    "submenu_id": 0,
    "menu": "Home",
    "menuUrl": "/home",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 3,
        "menu_Id": 1,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:14.16",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 2,
        "menu_Id": 1,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:29:39.03",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 1,
        "menu_Id": 1,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:28:42.153",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 2,
    "submenu_id": 0,
    "menu": "Courses",
    "menuUrl": "/recordedvideos",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 4,
        "menu_Id": 2,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:30.527",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 5,
        "menu_Id": 2,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:30.527",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 3,
    "submenu_id": 0,
    "menu": "Students",
    "menuUrl": "/Students",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 8,
        "menu_Id": 3,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:47.86",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 6,
        "menu_Id": 3,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:45.273",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 7,
        "menu_Id": 3,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:45.273",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 4,
    "submenu_id": 0,
    "menu": "News/Announcement",
    "menuUrl": "/newsandevents",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 11,
        "menu_Id": 4,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:58.087",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 9,
        "menu_Id": 4,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:55.69",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 10,
        "menu_Id": 4,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:30:55.69",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 5,
    "submenu_id": 0,
    "menu": "Contact Us",
    "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 14,
        "menu_Id": 5,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:31:06.22",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 12,
        "menu_Id": 5,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:31:03.66",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 13,
        "menu_Id": 5,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:31:03.66",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 6,
    "submenu_id": 1,
    "menu": "About Patashala",
     "menuUrl": "/home",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 17,
        "menu_Id": 6,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:33:53.43",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 16,
        "menu_Id": 6,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:33:47.823",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 7,
    "submenu_id": 1,
    "menu": "Our Team",
     "menuUrl": "/home",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 18,
        "menu_Id": 7,
        "responses": "Ram Mohan Komanduri is a successful entrepreneur and holds various positions among multiple organizations as a Chairman, Chief Executive Officer, Chief Technology Officer, Project Delivery Executive, Board of Director and Angel Investor. \n\nHaving pursued his Masters in Science from UK and MBA from USA and certified director from the prestigious New York Film Academy, USA his leadership is committed to defining, following and practicing the highest level of corporate governance across all business functions.\n\nWith over 20 Years of experience in SAP implementations which includes Fortune 100 companies and vast experience in managing global projects in United States of America, United Kingdom, Europe, Israel , Saudi Arabia & India.  His compassion to amplify human potential and create the next opportunity for people, businesses, and communities is what inspires us.\n\nBuilding high technology Virtual Movie Studio in Dallas, TX with his rare combination of expertise in software industry and his passion in film making \n\nPatshala is his dream project aimed to create a new era in commerce education both in India & USA with his brother(Sai Sir) who is transforming himself from an successful academician to world class entrepreneur. As a part of our commitment to rise commerce education to global best practices, with a broad selection of key governance principles and regulations.",
        "url": null,
        "createdOn": "2023-10-05T00:34:28.423",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 8,
    "submenu_id": 1,
    "menu": "Patashala Thought Process",
     "menuUrl": "/home",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 44,
        "menu_Id": 8,
        "responses": "CS professionals have a promising future and hold prestigious job profiles in the field of Commerce and Accounting.\r\nThey can pursue careers in various sectors, including stock exchanges, company affairs departments, financial auditing firms, law boards, and government departments.\r\nThe CS course opens up diverse career avenues, and individuals can choose roles in corporate governance, legal compliance, and corporate management.\r\nTrained and certified Company Secretaries can work as independent advisors to firms, providing expertise in areas such as loans, taxes, partnerships, government licenses, registrations, and more. They can also join CS firms to offer services to clients.\r\nThe CS profession continues to be highly regarded and offers significant opportunities for those who complete the course and become certified Company Secretaries. The evolving regulatory landscape and increasing demand for corporate governance and compliance further enhance the importance of CS professionals in the business world.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:57:16.107",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 43,
        "menu_Id": 8,
        "responses": "The CS course focuses on training students to handle the legal aspects of a firm, which includes tasks like tax returns and record keeping.\r\nCompany Secretaries play a crucial role in a company's strategy, decision-making, and ensuring compliance with legal, ethical, and regulatory requirements.\r\nThe Institute of Company Secretaries of India (ICSI) is the regulatory body responsible for training and regulating Company Secretaries in India under the Company Secretaries Act of 1980.\r\nThe CS program consists of three levels: CSEET (replacing the Foundation Program), Executive Program, and Professional Program.\r\nThe CS Exam is now recognized as equivalent to a postgraduate degree, which provides opportunities for higher studies and research in the field.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:56:51.92",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 19,
        "menu_Id": 8,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:34:32.743",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 9,
    "submenu_id": 2,
    "menu": "CPC-Commerce Professioanal Courses",
     "menuUrl": "/recordedvideos",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 36,
        "menu_Id": 9,
        "responses": "CPA, which stands for Certified Public Accountant, is a professional designation that signifies the highest level of competence in the field of accountancy. The CPA examination is administered by the American Institute of Certified Public Accountants (AICPA). In India, the Chartered Accountant (CA) designation is considered equivalent to the CPA credential.\r\nThe CPA program encompasses a comprehensive curriculum that includes subjects such as accounting, law, analytics, taxation, auditing, evaluation, regulatory frameworks and procedures, ethics, and financial planning and management.\r\nTo attain the title of Certified Public Accountant, a student must successfully pass all the required CPA exams. Typically, the CPA program can be completed within an 18-month timeframe.\r\nThe CPA Exam is composed of three types of assessments: multiple-choice questions (MCQs), task-based simulations (TBS), and written communication tasks. These examinations evaluate candidates on their knowledge, problem-solving skills, and communication abilities within the realm of accounting and finance.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:36:35.83",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 20,
        "menu_Id": 9,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:34:45.597",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 10,
    "submenu_id": 2,
    "menu": "Domestic Courses",
     "menuUrl": "/recordedvideos",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 21,
        "menu_Id": 10,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:34:50.31",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 11,
    "submenu_id": 3,
    "menu": "Study Hub- Videos",
     "menuUrl": "/recordedvideos",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 22,
        "menu_Id": 11,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:34:57.92",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 12,
    "submenu_id": 3,
    "menu": "Online-Live Classes",
     "menuUrl": "/recordedvideos",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 24,
        "menu_Id": 12,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:08.257",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 23,
        "menu_Id": 12,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:04.96",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 13,
    "submenu_id": 3,
    "menu": "Resource-Live Classes Recordings",
     "menuUrl": "/recordedvideos",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 25,
        "menu_Id": 13,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:23.1",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 14,
    "submenu_id": 4,
    "menu": "New Batches Announcements",
     "menuUrl": "/newsandevents",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 30,
        "menu_Id": 14,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:41.877",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 29,
        "menu_Id": 14,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:39.54",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 28,
        "menu_Id": 14,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:36.653",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 27,
        "menu_Id": 14,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:34.247",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      },
      {
        "menuResponsesId": 26,
        "menu_Id": 14,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:27.407",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 15,
    "submenu_id": 4,
    "menu": "Career Oppurtunities",
     "menuUrl": "/newsandevents",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 31,
        "menu_Id": 15,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:46.717",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 16,
    "submenu_id": 4,
    "menu": "Exam Notifications",
     "menuUrl": "/newsandevents",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 32,
        "menu_Id": 16,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:55.22",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 17,
    "submenu_id": 4,
    "menu": "Educational Videos BY Faculty",
     "menuUrl": "/newsandevents",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 33,
        "menu_Id": 17,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:35:59.953",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 18,
    "submenu_id": 5,
    "menu": "Branch Addresses",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 34,
        "menu_Id": 18,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:36:06.827",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 19,
    "submenu_id": 5,
    "menu": "Whatsapp Chat",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 35,
        "menu_Id": 19,
        "responses": "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.",
        "url": null,
        "createdOn": "2023-10-05T00:36:11.533",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 20,
    "submenu_id": 5,
    "menu": "GPS Location",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": []
  },
  {
    "menu_Id": 21,
    "submenu_id": 5,
    "menu": "Email ID",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": []
  },
  {
    "menu_Id": 22,
    "submenu_id": 5,
    "menu": "Helpline Numbers",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": []
  },
  {
    "menu_Id": 23,
    "submenu_id": 10,
    "menu": "CA",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 38,
        "menu_Id": 23,
        "responses": "Chartered Accountants, or CAs, are financial experts responsible for conducting essential accounting procedures. They are highly qualified professionals with comprehensive knowledge in areas like Accounting, Auditing, Taxation, Financial matters, and related services, catering to both individuals and organizations. Becoming a Chartered Accountant entails completing a demanding five-year professional certification program that focuses on taxation, accounting, auditing, financial analysis, and budgeting for individuals, businesses, or organizations.\r\nStudents should go through three levels to complete including the practical training part \r\nLevel 1 – ca foundation\r\nLevel 2 – ca inter\r\nLevel -3 - ca Final\r\nTo achieve the Chartered Accountant designation, individuals must successfully navigate a three-tiered training program established by the Institute of Chartered Accountants of India (ICAI), which serves as the governing body overseeing and maintaining the standards of the chartered accountancy profession in India. Aspiring Chartered Accountants can opt for one of two routes: the Foundation Course Route, beginning after completing Class 12, or the Direct Entry Route, designed for graduates.\r\n\r\nCareer prospects in chartered accountancy are driven by the profession's attractiveness due to its lucrative and secure nature. In a world where financial matters are central to everything, businesses depend on experts to manage their financial affairs. Upon completion of the CA course, graduates can explore diverse career opportunities, including roles as consultants, auditors, financial managers, business analysts, and more. Chartered Accountants engage in a wide range of activities, such as filing tax returns, auditing financial statements, facilitating business registration with government authorities, maintaining investment records, and preparing and reviewing financial reports.\r\n\r\nCAs are in high demand across various sectors, including banks, financial institutions, and corporations, which opens up a wealth of job opportunities. CA-certified individuals also have the option to establish their own auditing firms, offering auditing services to clients. Graduates can command competitive starting salaries, typically ranging from INR 5,00,000 to INR 25,00,000 per annum. With experience and advanced skills, this figure can potentially rise to as high as INR 75,00,000 per annum, depending on individual capabilities. Chartered Accountants are esteemed professionals and are often regarded as highly qualified individuals.\r\n\r\nIn summary, the field of chartered accountancy presents a promising and rewarding career path due to the strong demand for financial expertise and the substantial earning potential it offers.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:42:22.32",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 24,
    "submenu_id": 10,
    "menu": "CMA",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 37,
        "menu_Id": 24,
        "responses": "The Certified Management Accountant (CMA) designation is a globally recognized certification in management accounting, providing expertise in financial planning, strategic management, corporate finance, decision-making, and professional ethics. CMAs specialize in cost management, cost reduction, and cost auditing, making them valuable in various business organizations.\r\n\r\nIn India, the CMA program is administered by the Institute of Cost Accountants of India (ICAI), formerly known as the Institute of Cost and Works Accountants of India (ICWAI). This institute operates under the Cost and Works Accountants Act, 1959, a special act of Parliament that regulates the profession of cost and management accountancy.\r\n\r\nThe CMA course in India consists of three stages: Foundation, Intermediate, and Final. To attain CMA certification, candidates must complete all three stages and fulfil specific requirements, including practical training and work experience.\r\n\r\nThe CMA designation offers diverse career opportunities, with CMAs working in various business functions such as Accounting and Finance, Sales and Marketing, Operations, Strategic Planning and Analysis, Information Technology, and Human Resources. Their skills in strategic management and accounting are transferable to a wide range of industries.\r\n\r\nIn India, CMA salaries can vary based on factors like experience and industry. On average, a CMA in India earns approximately INR 6 lakh per annum. However, the salary range for CMAs can extend from INR 3 LPA to INR 20 LPA. Those with 1-3 years of experience typically earn between INR 5 LPA to INR 10 LPA, while individuals with 5 to 7 years of experience can earn INR 10 lakh to INR 20 lakh per annum.\r\nCertified Management Accountant is a great career choice with its easy and quick course with high annual salary and Limitless career choice. It also gives a chance to work abroad. It also provides growth and value as an employee and business appeal\r\nOverall, the CMA course in India equips professionals with the knowledge and skills necessary to excel in the fields of management accounting and financial management, making them valuable assets to organizations across the country.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:40:22.453",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 25,
    "submenu_id": 2,
    "menu": "International Courses",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": []
  },
  {
    "menu_Id": 26,
    "submenu_id": 25,
    "menu": "ACCA",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 39,
        "menu_Id": 26,
        "responses": "ACCA, short for the Association of Chartered Certified Accountants, is a globally recognized professional accounting body that offers a comprehensive and internationally respected qualification in the fields of accounting and finance. This certification, awarded by ACCA based in the United Kingdom, is designed to equip individuals with the necessary skills and knowledge to thrive in today's rapidly evolving business landscape.\r\nACCA's reach extends to 180 countries, making it a highly regarded qualification with a global reputation. It is often referred to as the \"global CA\" because it offers enhanced career prospects worldwide. The ACCA program prepares professionals for various domains, including accounting, auditing, taxation, management, finance, investment banking, corporate finance, forensic audit, and consulting.\r\nThis high-level professional qualification is equivalent to completing a full university degree. ACCA is in compliance with the International Federation of Accountants (IFAC), a global accounting body, and is built upon international accounting and auditing standards.\r\nThe ACCA qualification comprises 13 subjects divided into three levels: applied Knowledge, applied Skills, strategic professional . It provides a pathway to a rewarding career in accounting, finance, and management.\r\nThe core values of ACCA emphasize providing opportunities, embracing diversity, fostering innovation, upholding integrity, and maintaining accountability within the accounting and finance field.\r\nACCA is indeed a prestigious qualification that can lead to a successful and rewarding career in the accounting and finance industry, both in your home country and internationally. It's known for its high standards and rigorous training, making it a respected choice for those pursuing a career in this field.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:47:58.783",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 27,
    "submenu_id": 25,
    "menu": "CIMA",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 40,
        "menu_Id": 27,
        "responses": "CIMA, which stands for The Chartered Institute of Management Accountants, offers an esteemed qualification for individuals aspiring to excel as management accountants or pursue careers in the fields of finance and management. It enjoys a strong reputation within the business and finance sectors.\r\nAs a globally recognized professional management accounting body headquartered in the UK, CIMA tailors its internationally acclaimed qualification to cater to the distinct needs of professionals worldwide.\r\nThe CIMA program is structured into separate levels, each accompanied by its own set of examinations. These levels encompass the Certificate in Business Accounting, Operational level, Management level, and Strategic level.\r\nEncompassing a wide array of subjects, including management accounting, financial strategy, risk management, financial management, and business ethics, the CIMA curriculum equips individuals with the essential knowledge and competencies required for making strategic decisions within a business context.\r\nSuccessful completion of the CIMA qualification opens doors to diverse career opportunities in the fields of finance, management, and strategic decision-making. Graduates often secure roles such as management accountants, financial analysts, finance managers, or similar positions.\r\nFor individuals aspiring to build a career in management accounting, finance, or strategic management, the CIMA course provides an internationally recognized qualification and a pathway to a wide range of prospects in the business world.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:49:07.47",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  },
  {
    "menu_Id": 28,
    "submenu_id": 25,
    "menu": "CMA(US)",
     "menuUrl": "/contactus",
    "isActive": true,
    "listMenuResponse": [
      {
        "menuResponsesId": 41,
        "menu_Id": 28,
        "responses": "The Certified Management Accountant (CMA) designation is a globally recognized pinnacle achievement in management accounting, overseen by the Institute of Management Accountants (IMA) based in the USA. The CMA program has earned recognition in over 170 countries, making it the most highly sought-after certification in accounting and finance by businesses and recruiters worldwide.\r\n The CMA course is tailored for accountants and financial professionals seeking an advanced-level credential. It encompasses a wide range of topics, including accounting, business, finance, and analytics, enabling candidates to master 12 essential skills crucial for success in the accounting and finance realm. \r\nAspiring professionals can earn this prestigious American certification in just 12 to 18 months by completing the two-part program: Financial Planning, Performance, and Analytics (Part 1) and \r\nStrategic Financial Management (Part 2). \r\nThe CMA qualification offers global career prospects, with roles such as Senior Analyst, Finance Manager, Budget Analyst, Treasurer, Finance Controller, Internal Auditor, Financial Analyst, Cost Accountant, and Management Trainee.\r\n\r\nCMA USA Eligibility:\r\nTo be eligible for the CMA program, candidates should have a bachelor's degree from an accredited college or university, hold membership with the Institute of Management Accountants (IMA), and possess two years of professional work experience. For those beginning their CMA journey after completing high school (12th grade), they will only receive the CMA certificate upon completing their undergraduate degree.\r\n",
        "url": null,
        "createdOn": "2023-10-24T20:50:16.607",
        "createdBy": "Vamshi",
        "udpatedOn": null,
        "udpatedBy": null,
        "isActive": true
      }
    ]
  }
];
}
}
