export interface CoordinateProps {
  lat: number;
  lng: number;
}

export interface MapDataLocationProps {
  _id: string;
  user: null;
  description: string;
  tags: TagProps[];
  lat: number;
  lon: number;
  time_stamp: string;
  Status: boolean;
  Priority: string;
  vote_score: number;
  title: string;
  photo_url?: string;
}

export interface TagProps {
  _id: string;
  name: string;
}
