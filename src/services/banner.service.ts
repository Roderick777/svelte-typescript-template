export class BannerService {
  public static async getBanners(): Promise<Array<any>> {
    const banners: Array<any> = await [
      { imagen: 'https://www.abcdin.cl/wcsstore/ABCDIN/images/2021/slide/abril/semana04/ventaNocturna/led21/desktop.jpg'}
    ]
    const promesa: Promise<Array<any>> = new Promise((resolve, reject) => setTimeout(() => resolve(banners) , 2000))

    return await promesa
  }
}