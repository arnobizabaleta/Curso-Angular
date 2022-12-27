import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan','IronMan','Thor','Capitán América'];
  heroeBorrado:string = '';
  borrarHeroe() {
    //const heroeBorrado = this.heroes.pop();
    //console.log(heroeBorrado);
    //this.heroes.pop();
    this.heroeBorrado =  this.heroes.shift() || '';
  }

}
