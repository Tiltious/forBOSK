import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    providers: [MessageService]
})
export class AppTopBarComponent {

    items: MenuItem[]=[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') topbarmenu!: ElementRef;

    @ViewChild('menu') menu!: ElementRef;

    @ViewChild('btn') btn!: ElementRef;
    
    constructor(public layoutService: LayoutService,private messageService: MessageService,private keycloack:KeycloakService) { }
    ngOnInit() {
        this.items = [
            {
                label: 'User',
                items: [
                    {
                        label: 'Profile',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-upload',
                        // routerLink: '/auth/logout',
                        command:()=>{this.keycloack.logout();}
                    }
                ]
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
    logout() {
        this.keycloack.logout();
    }
}
