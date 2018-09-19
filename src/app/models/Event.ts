export interface Event {
    EventId?: number;
    EventTitle: string;
    Type: string;
    EventRange_Start: Date;
    EventRange_End: Date;
    VolunteersNeeded: number;
    Address: string;
    Zip: string;
    City: string;
    State: string;
    EventDescription: string;
}