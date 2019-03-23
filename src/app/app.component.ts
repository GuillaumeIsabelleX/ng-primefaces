

import { Component, OnInit } from '@angular/core';

import { Message, ConfirmationService, MenuItem } from 'primeng//api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService]
})
export class AppComponent implements OnInit {
  mitems: MenuItem[];
  data: any;
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
    ];

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    //big menu
    this.mitems = [
      {
        label: 'TV', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              label: 'TV 1',
              items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
            },
            {
              label: 'TV 2',
              items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
            },
            {
              label: 'TV 4',
              items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
            },
            {
              label: 'Sports 2',
              items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
            },
            {
              label: 'Sports 4',
              items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
            },
            {
              label: 'Sports 6',
              items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
            }
          ]
        ]
      }
    ];
  }
  title = 'primengtest';

  value: Date;
  msgs: Message[];
  /**
   *
   */
  constructor(private confirmationService: ConfirmationService) {
    this.hide();
    this.msgs.push({ severity: 'info', summary: 'Welcome', detail: 'PrimeNG rocks welcome friend' });
  }



  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.hide();
        this.show("Accepted", "Your action will carry on");
      },
      reject: () => {
        this.hide();
        this.warn("Canceled", "Your action wont continue");

      }
    });
  }

  show(summary: string = "INfo msg", detail: string = "PrimeNG rocks man", severity: string = "info") {
    this.msgs.push({ severity, summary, detail });
  }
  warn(summary: string = "Warn msg", detail: string = "PrimeNG rocks man fall off you", severity: string = "warn") {
    this.msgs.push({ severity, summary, detail });
  }

  hide() {
    this.msgs = [];
  }



}
