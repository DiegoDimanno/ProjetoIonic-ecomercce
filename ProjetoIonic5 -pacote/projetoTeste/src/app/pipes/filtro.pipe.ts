import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], texto: string[]): Usuario {
    if (texto.length===0){
      return usuarios
    };
    return usuarios.filter( usuarios =>{
      return usuarios.name.include(texto);
    })
  }

}
