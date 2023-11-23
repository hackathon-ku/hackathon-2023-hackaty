export interface CoordinateProps {
  lat: number;
  lng: number;
}

export interface MapDataLocationProps {
  _id: string;
  user: null;
  description: string;
<<<<<<< HEAD
  title: string;
=======
>>>>>>> ee83e53034fecc894b2027c20db67171c7ab6d0f
  tags: TagProps[];
  lat: number;
  lon: number;
  time_stamp: string;
<<<<<<< HEAD
  report_status: string;
  priority: string;
  vote_score: number;
  photo_url: string;
=======
  Status: boolean;
  Priority: string;
  vote_score: number;
  title: string;
  photo_url?: string;
>>>>>>> ee83e53034fecc894b2027c20db67171c7ab6d0f
}

export interface TagProps {
  _id: string;
  name: string;
}
