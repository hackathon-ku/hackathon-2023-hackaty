import { DotsThreeOutline, HouseSimple, IdentificationCard, QrCode, WarningCircle } from '@phosphor-icons/react';
import { Typography, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const NavDescription = [
  { name: 'Home', icon: HouseSimple, path: '/' },
  { name: 'Nisit Card', icon: IdentificationCard, path: '' },
  { name: 'Check in', icon: QrCode, path: '' },
  // TODO : Add path
  { name: 'Emergency', icon: WarningCircle, path: '' },
  { name: 'More', icon: DotsThreeOutline, path: '' },
] as const;

const StudentNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <div
      style={{
        height: '8vh',
        borderRadius: '12px 12px 0 0',
        background: colorPrimary,
        paddingBlock: '10px',
        display: 'flex',
        gap: '18px',
        width: '100vw',
        maxWidth: '440px',
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: 0,
      }}
    >
      {NavDescription.map((item) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60px',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            color: pathname === item.path ? 'white' : '#AFCDCC',
            cursor: 'pointer',
          }}
          onClick={() => navigate(item.path)}
        >
          <item.icon size={32} weight={pathname === item.path ? 'fill' : 'regular'} />
          <Typography.Text style={{ color: 'inherit', fontSize: '12px' }}>{item.name}</Typography.Text>
        </div>
      ))}
    </div>
  );
};

export default StudentNav;
