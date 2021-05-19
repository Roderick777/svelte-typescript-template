export class MenuService {
  public static async getMenu(): Promise<Array<any>> {

    const menu: any = await [
      { nombre: 'ELECTRO', enlace: '/'},
      { nombre: 'LÍNEA BLANCA', enlace: '/'},
      { nombre: 'TELEFONÍA', enlace: '/'},
      { nombre: 'COMPUTACIÓN', enlace: '/'},
      { nombre: 'DORMITORIO', enlace: '/'},
      { nombre: 'MUEBLES', enlace: '/'},
      { nombre: 'DECOHOGAR', enlace: '/'},
      { nombre: 'OUTDOOR Y MOTOS', enlace: '/'},
      { nombre: 'ENTRETENIMIENTO', enlace: '/'},
      { nombre: 'INFANTÍL', enlace: '/'}
    ]
    const promesa: Promise<Array<any>> = new Promise((resolve, reject) => setTimeout(() => resolve(menu) , 3000))

    return await promesa
    
  }
}