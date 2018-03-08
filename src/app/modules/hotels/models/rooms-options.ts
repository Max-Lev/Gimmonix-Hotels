export interface IRoomOptions {
    description: string[];
    title: string;
    details: string[];
}

export class RoomOptions implements IRoomOptions {
    description: string[];
    title: string;
    details: string[];
    constructor(room: RoomOptions) {
        this.description = room.description;
        this.title = room.title;
        this.details = room.details;
    }
}

export const RoomOptionsList: RoomOptions[] = [
    {
        title: 'Standart Room Semi with Double Bed',
        description: [
            'MSG Avaliable',
            'Free WIFE',
            'LCD Television',
            'Refrigirator',
            'Private Shower',
            'Desk and Iron',
            'Air conditioning'
        ],
        details: [
            'GTA',
            'STGlobe',
            'RoomXML',
            'GetABed',
            'DOTW',
            'GetARoom',
            'Vanilla',
            'HotelsPro',
            'RTS'
        ]
    }

]