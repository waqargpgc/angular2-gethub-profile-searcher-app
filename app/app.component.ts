import { Component } from '@angular/core';
import {SearchService} from './services/search.service';
@Component({
    selector: 'my-app',
    template: `
<nav class="navbar navbar-default">
<div class="container">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      	<span class="icon-bar"></span>
      	<span class="icon-bar"></span>
      	<span class="icon-bar"></span>
      </button>
          <a class="navbar-brand" href="#">Job Touch</a>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav"> 
            <li class="active"><a href="#">Home</a></li>
      		<li><a href="#">About Us</a></li>
      		<li><a href="#">Contact Us</a></li> 
        </ul>
    </div>
</div>
</nav>
<div class="container">
<profile></profile>
</div>
    
    `,
    providers:[SearchService]
})
export class AppComponent { }
