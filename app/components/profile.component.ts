import { Component } from '@angular/core';
import {SearchService} from '../services/search.service';
@Component({
    moduleId:module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers:[SearchService]
})
export class profileComponent {
    user:any;
    repos:any[];
    username:string;

    constructor(private _searchservice:SearchService){
        this.user=false;
    }
    searchUser(){
        this._searchservice.updateUser(this.username);

        this._searchservice.getUsers().subscribe(user =>{
            this.user=user;
        });
        this._searchservice.getRepos().subscribe(repos =>{
            this.repos=repos;
        });
    }
 }