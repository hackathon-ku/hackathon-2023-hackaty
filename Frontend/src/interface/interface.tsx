export interface CoordinateProps {
  lat: number;
  lng: number;
}

export interface MapDataLocationProps {
  m_id: string;
  user: null;
  desci: string;
  title: string;
  tags: TagProps[];
  lat: number;
  lon: number;
  time_stamp: string;
  Status: boolean;
  Priority: string;
  vote_score: number;
}

export interface TagProps {
  _id: string;
  name: string;
}
