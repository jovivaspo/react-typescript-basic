export interface Sub {
    nick: string,
    avatar: string,
    subMonths: number,
    description?: string
  }

export type SubsResponse = Array<{
  nick: string,
  months: number
}>