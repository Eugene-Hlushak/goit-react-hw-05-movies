import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation, Link, Header, Container } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Header>
    </Container>
  );
};
export default SharedLayout;
