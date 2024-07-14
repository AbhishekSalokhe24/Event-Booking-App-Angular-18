export interface IapiResp { // Interface API response 
    message: string;
    result: boolean;
    data: any;
}
export interface Events {
    eventId: number
    eventName: string
    startDate?: string
    startTime: string
    endDate?: string
    organizerName: string
    userId: number
    price: number
    location: string
    imageUrl: string
  }
