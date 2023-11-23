import React from 'react';
import { MapDataLocationProps } from '../interface/interface';
import { Button } from 'antd';

const ReportDetailed = ({
  data,
  setData,
}: {
  data: MapDataLocationProps | null;
  setData: React.Dispatch<React.SetStateAction<MapDataLocationProps | null>>;
}) => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setData(null);
        }}
      >
        Back{data?.Priority}
      </Button>
      <p>ReportDetailed {data?.desci}</p>
    </div>
  );
};

export default ReportDetailed;
