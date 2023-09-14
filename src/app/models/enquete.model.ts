export interface Enquete{
  id: number,
  name: string,
  alternatives: string[],
  is_active: boolean,
  start_date: string,
  end_date: string,
  results: {
    [key: string]:
      {
        count:number,
        percentage: string
      }
  }
}
