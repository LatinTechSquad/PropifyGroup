export class GetUserByIdResponse {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public phone: string,
  ) {}
}
