import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import Map_data from '../../data/mapData';
import { CoordinateProps } from '../../interface/interface';
import CoordinateMap from './CoordinateMap';

const MapModal: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<CoordinateProps | null>(null);
  console.log("current : ", currentLocation);
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
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModal} onOk={handleOk} onCancel={handleCancel}>
        <CoordinateMap isModel={isModal} setIsModel={setIsModal} selectedCoor={currentLocation} setSelectedCoor={setCurrentLocation} />
      </Modal>
    </>
  );
};

export default MapModal;