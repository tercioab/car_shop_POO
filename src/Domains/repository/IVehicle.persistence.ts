export default interface IVehiclePersistence {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  create(obj: any): Promise<any>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  findAll(): Promise<any[]>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  findById(id: string): Promise<any>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  updateById(id: string, vehicle: Partial<any>): Promise<any>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  excludeById(id:string):Promise<any>
}