export interface Events {
    EventId: number;
    EventTitle: string;
    Type: any[];
    Start: Date,
    End: Date,
    VolunteersNeeded: number;
    Address: string;
    Zip: string;
    City: string;
    State: string;
    EventDescription: string;
}

this.type=[{value:1, name:'Formal'}, {value:2, name:'Governance'},{ value: 3, name:'Nonformal'}, {value: 4, name:'SocialAction'}, {value: 5, name: 'Project'}]