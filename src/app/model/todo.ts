export class Todo {
  constructor(
    public id: number,
    public responsible: string,
    public phone: string,
    public email: string,
    public description: string,
    public dateEnd: string,
    public dateConclusion: string,
    public status: string
  ) {}
}
