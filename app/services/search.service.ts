import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService{
    private username:string;
    private client_id:string;
    private client_secret:string;

    constructor(private _http:Http){
        console.log('service is ready soooon');
        this.username='Waqar Ahmad';
        this.client_id='122d6932652c0998a5b3';
        this.client_secret='ee9760dd14fe900b3a4e23740917369b82684493';
    }
    getUsers(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }
    updateUser(username:string){
        this.username=username;

    }
}