import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import Map_data from '../../data/mapData';
import { CoordinateProps } from '../../interface/interface';
import CoordinateMap from './CoordinateMap';

const MapModal = ({ selectedCoor, setSelectedCoor }: {
  selectedCoor: CoordinateProps | null,
  setSelectedCoor: React.Dispatch<React.SetStateAction<CoordinateProps | null>>,
}

) => {
  console.log(selectedCoor)
  const [isModal, setIsModal] = useState(false);
  // const [selectedCoor, setSelectedCoor] = useState<CoordinateProps | null>(null);
  const showModal = () => {
    setIsModal(true);
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <>
      {/* <CoordinateMap isModel={isModal} setIsModel={setIsModal} selectedCoor={currentLocation} setSelectedCoor={setCurrentLocation} /> */}
      <Button type="primary" onClick={showModal}>
        Map
      </Button>
      <Modal title="Select Map Location" open={isModal} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <CoordinateMap isModel={isModal} setIsModel={setIsModal} selectedCoor={selectedCoor} setSelectedCoor={setSelectedCoor} />
      </Modal>
    </>
  );
};

export default MapModal;