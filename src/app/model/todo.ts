export class Todo {
  constructor(
    public id: number,
    public responsible: string,
    public phone: string,
    public email: string,
    public description: string,
    public dateEnd: string,
    public hourEnd: string,
    public status: string
  ) {}
}
