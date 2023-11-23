export interface CoordinateProps {
  lat: number;
  lng: number;
}

export interface MapDataLocationProps {
  _id: string;
  user: null;
  description: string;
  title: string;
  tags: TagProps[];
  lat: number;
  lon: number;
  time_stamp: string;
  report_status: string;
  priority: string;
  vote_score: number;
}

export interface TagProps {
  _id: string;
  name: string;
}
