export interface Schedule {
    id: number;
    day: string;
    date: string;
    session: Session[];
} 

export interface Session {
    time: string;
    booked: boolean;
}