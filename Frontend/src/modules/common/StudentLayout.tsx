const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        minHeight: '100dvh',
        maxWidth: '440px',
        marginInline: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default StudentLayout;
