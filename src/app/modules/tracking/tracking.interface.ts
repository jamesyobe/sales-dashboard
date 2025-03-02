export interface Event {
    status: string;
    date: string;
    icon: string;
    color: string;
    image?: string; // Optional property
    notes?:string;
  }
  
  export interface TrackedProduct {
    id: number;
    title: string;
    price: string;
    shop: string;
    location: string;
    status: string;
    imgSrc: string;
    events: Event[];
  }